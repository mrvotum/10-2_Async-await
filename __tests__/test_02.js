import GameSavingLoader from '../src/js/GameSavingLoader';
import readGameSaving from '../src/js/readGameSaving';
import GameSavingData from '../src/js/GameSavingData';

jest.setTimeout(10000);

jest.mock('../src/js/readGameSaving');

test('Mocking of readGameSaving = error', () => {
  readGameSaving.mockRejectedValue('ERROR');

  return GameSavingLoader.load().catch(err => expect(String(err)).toMatch('ERROR'));
});
