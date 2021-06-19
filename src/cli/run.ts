import { SlippiGame } from "@slippi/slippi-js";
import { existsSync } from "fs";
import { analyzeGame, GameReport } from "../analysis/analyze";

const args = process.argv;
if (args.length != 3) {
  console.log("Usage: node run.js path/to/replay.slp");
  process.exit(1);
}

const replay = args[2];
if (!existsSync(replay)) {
  console.log(`File ${replay} does not exist.`);
  process.exit(1);
}

const game = new SlippiGame(replay);
console.log(GameReport.format(analyzeGame(game)));
