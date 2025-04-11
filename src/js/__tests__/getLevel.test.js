import { getLevel } from '../getLevel';
import fetchData from '../fetchData';

// Документация по Jest mocks 
// https://jestjs.io/ru/docs/jest-object#jestmockmodulename-factory-options
jest.mock('../fetchData');

describe('getLevel', () => {
  const testData = [
    // [fetchData response, expected message]
    [{ status: 'ok', level: 1 }, 'Ваш текущий уровень: 1'],
    [{ status: 'error' }, 'Информация об уровне временно недоступна'],
  ];

  beforeEach(() => {
    // Документация по Jest resetAllMocks 
    // https://jestjs.io/ru/docs/jest-object#jestresetallmocks
    jest.resetAllMocks();
  });

  it.each(testData)(
    'should return correct message for fetchData response: %o', 
    (fetchResponse, expectedMessage) => {
    fetchData.mockReturnValue(fetchResponse);
    expect(getLevel(1)).toBe(expectedMessage);
  });
});
