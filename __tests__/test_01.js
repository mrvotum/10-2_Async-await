import GameSavingLoader from '../src/js/GameSavingLoader';
import readGameSaving from '../src/js/readGameSaving';
import GameSavingData from '../src/js/GameSavingData';

jest.setTimeout(10000);

test('all ok', () => {
  const initialData = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  return GameSavingLoader.load().then((value) => {
    expect(value).toBe(initialData);
  });
});
