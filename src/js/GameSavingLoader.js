import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

class GameSavingLoader {
  static async load() {
    const result = await readGameSaving();
    const val = await new GameSavingData(result);
    const arr = val.json();
    return arr;
  }
}

export default GameSavingLoader;
