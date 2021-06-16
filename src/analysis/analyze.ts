import { SlippiGame } from "@slippi/slippi-js";

export function analyzeGame(game: SlippiGame): void {
  if (game.getSettings().isTeams) {
    console.log('Analysis for teams is not yet supported.');
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
        console.log(`Frame ${frame.frame}: missing data for player: ${playerIndex}`);
        return;
      }
      stateArray.push(actionState)
    });
  }

  actionStates.forEach((stateArray, playerIndex) => {
    console.log(`Report for player: ${playerIndex}`);
    console.log(stateArray);
    console.log('\n\n\n')
  });
}

function check<T>(t: T | undefined | null): T {
  if (t === undefined || t === null) {
    throw new Error("Input was null or undefined");
  }
  return t;
}