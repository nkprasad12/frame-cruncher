import { SlippiGame } from "@slippi/slippi-js";
import { ActionState } from "./action_states";

export function analyzeGame(game: SlippiGame): void {
  if (game.getSettings().isTeams) {
    console.log("Analysis for teams is not yet supported.");
    return;
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

  actionStates.forEach((stateArray, playerIndex) => {
    const tag = getTag(playerIndex, game) ?? playerIndex;
    console.log(`Report for player: ${tag}`);
    analyzeActionStates(stateArray);
    console.log("\n\n\n");
  });
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

function analyzeActionStates(states: number[]) {
  let lastState = states[0];
  const lastActionBeforeWaitMap = new Map<number, number>();
  for (let i = 1; i < states.length; i++) {
    const currentState = states[i];
    if (currentState === ActionState.Wait && lastState !== ActionState.Wait) {
      if (!lastActionBeforeWaitMap.has(lastState)) {
        lastActionBeforeWaitMap.set(lastState, 0);
      }
      lastActionBeforeWaitMap.set(
        lastState,
        lastActionBeforeWaitMap.get(lastState)! + 1
      );
    }
    lastState = currentState;
  }

  Array.from(lastActionBeforeWaitMap.entries())
    .map(PreWaitState.fromEntry)
    .sort((a, b) => b.occurences - a.occurences)
    .forEach((entry) => console.log(PreWaitState.format(entry)));
}

function formatState(state: number): string {
  if (state in ActionState) {
    return ActionState[state];
  }
  return "0x" + state.toString(16);
}

function check<T>(t: T | undefined | null): T {
  if (t === undefined || t === null) {
    throw new Error("Input was null or undefined");
  }
  return t;
}

interface PreWaitState {
  state: number;
  occurences: number;
}

namespace PreWaitState {
  export function format(state: PreWaitState): string {
    return `State ${formatState(state.state)} happened ${
      state.occurences
    } times before Wait.`;
  }

  export function fromEntry(entry: [number, number]): PreWaitState {
    return {
      state: entry[0],
      occurences: entry[1],
    };
  }
}
