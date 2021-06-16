import { SlippiGame } from "@slippi/slippi-js";
import { analyzeGame } from "./analyze";

const game = new SlippiGame("test.slp");

// Get game settings – stage, characters, etc
// const settings = game.getSettings();

// Get metadata - start time, platform played on, etc
//const metadata = game.getMetadata();

// Get computed stats - openings / kill, conversions, etc
//const stats = game.getStats();

// Get frames – animation state, inputs, etc
// This is used to compute your own stats or get more frame-specific info (advanced)
// const frames = game.getFrames();
// console.log(frames[0].players); // Print frame when timer starts counting down

analyzeGame(game);
