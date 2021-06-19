import { SlippiGame } from "@slippi/slippi-js";
import { check } from "../utils/checks";
import { ActionState } from "./action_states";

export interface GameReport {
  playerReports: PlayerReport[];
}

export namespace GameReport {
  export function format(report: GameReport | null): string {
    if (report === null) {
      return "Failed to create game report";
    }
    return report.playerReports.map(PlayerReport.format).join("\n\n");
  }
}

export interface PlayerReport {
  playerTag: string;
  preWaitActions: PreWaitState[];
}

export namespace PlayerReport {
  export function format(report: PlayerReport): string {
    return [`Player: ${report.playerTag}`]
      .concat(report.preWaitActions.map(PreWaitState.format))
      .join("\n");
  }
}

export interface PreWaitState {
  state: ActionState;
  waitFrames: number[];
}

export namespace PreWaitState {
  export function format(state: PreWaitState): string {
    return `${ActionState[state.state]} happened ${
      state.waitFrames.length
    } times, wait lengths (in frames): ${state.waitFrames}`;
  }
}

export function analyzeGame(game: SlippiGame): GameReport | null {
  if (game.getSettings().isTeams) {
    console.log("Analysis for teams is not yet supported.");
    return null;
  }

  const lastFrame = check(game.getMetadata().lastFrame);
  const actionStates = new Map<number, number[]>();

  for (const playerIndex in check(game.getMetadata().players)) {
    actionStates.set(parseInt(playerIndex), []);
  }
  for (let i = 0; i < lastFrame; i++) {
    const frame = game.getFrames()[i];
    actionStates.forEach((stateArray, playerIndex) => {
      const actionState = frame.players[playerIndex]?.post.actionStateId;
      if (actionState === undefined || actionState === null) {
        console.log(
          `Frame ${frame.frame}: missing data for player: ${playerIndex}`
        );
        return;
      }
      stateArray.push(actionState);
    });
  }

  const reports: PlayerReport[] = Array.from(actionStates.entries()).map(
    (entry) => {
      return {
        playerTag: getTag(entry[0], game) ?? entry[0].toString(),
        preWaitActions: analyzeActionStates(entry[1]),
      };
    }
  );
  return {
    playerReports: reports,
  };
}

function getTag(playerIndex: number, game: SlippiGame): string | null {
  for (const player of game.getSettings().players) {
    if (player.playerIndex === playerIndex) {
      // @ts-ignore  TODO: is there another way to get the name?
      return player.displayName;
    }
  }
  return null;
}

export interface ActionData {
  /** The state associated with this data point. */
  state: ActionState;
  /** An integer number of the frames spent in this state. */
  frames: number;
}

function processStateSeries(states: number[]): ActionData[] {
  const result: ActionData[] = [{ state: states[0], frames: 1 }];
  for (let i = 1; i < states.length; i++) {
    const lastState = result[result.length - 1];
    if (states[i] === lastState.state) {
      lastState.frames += 1;
    } else {
      result.push({ state: states[i], frames: 1 });
    }
  }
  return result;
}

function analyzeActionStates(states: number[]): PreWaitState[] {
  const actionData = processStateSeries(states);
  const lastActionBeforeWaitMap = new Map<ActionState, number[]>();
  let lastData: ActionData | null = null;
  for (const currentData of actionData) {
    if (currentData.state === ActionState.Wait && lastData !== null) {
      if (!lastActionBeforeWaitMap.has(lastData.state)) {
        lastActionBeforeWaitMap.set(lastData.state, []);
      }
      lastActionBeforeWaitMap.get(lastData.state)!.push(currentData.frames);
    }
    lastData = currentData;
  }

  return Array.from(lastActionBeforeWaitMap.entries())
    .map((entry) => {
      return {
        state: entry[0],
        waitFrames: removeIntentionalWaits(entry[1]),
      };
    })
    .filter((data) => data.waitFrames.length > 0)
    .sort((a, b) => b.waitFrames.length - a.waitFrames.length);
}

function removeIntentionalWaits(waitFrames: number[]) {
  // For now, just assume anything over 17 frames (safe reaction window) is intentional.
  return waitFrames.filter((frames) => frames <= 17);
}
