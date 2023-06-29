import Character from './domain.js';
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();

const character1 = new Character();
character1.name = "Harry";
game.addCharacter(character1);

console.log(game);

const gameSave = new GameSavingData();
saveGame(gameSave, game); // Saving game data

console.log('Game data after saving: ', gameSave);

const loadedGame = loadGame(gameSave); // Loading game data
console.log('Loaded game: ', loadedGame);
