import Character from './domain.js';

console.log(Character);

export default class Game {
  characters = [];

  start() {
    console.log('game started');
  }

  addCharacter(character) {
    if (character instanceof Character) {
      this.characters.push(character);
    } else {
      throw new Error('You can only add instances of Character to the game');
    }
  }
}

export class GameSavingData {
  data = {};

  save(game) {
    this.data = game;
  }

  load() {
    return this.data;
  }
}

export function readGameSaving(gameSavingData) {
  return gameSavingData.load();
}

export function writeGameSaving(gameSavingData, game) {
  gameSavingData.save(game);
}

