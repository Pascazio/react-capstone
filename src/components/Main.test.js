import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from '../js/Api';

jest.mock('../js/Api', () => ({
  fetchAPI: jest.fn(),
}));

describe('Main Component Functions', () => {
  beforeEach(() => {
    fetchAPI.mockClear();
  });

  test('initializes times correctly', () => {
    const mockDate = new Date();
    fetchAPI.mockReturnValue(['17:00', '18:00']);
    const times = initializeTimes(mockDate);
    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(times).toEqual(['17:00', '18:00']);
  });

  test('updates times correctly', () => {
    const mockDate = new Date('2023-01-01');
    fetchAPI.mockReturnValue(['19:00', '20:00']);
    const state = [];
    const action = { type: 'UPDATE_TIMES', date: mockDate };
    const newState = updateTimes(state, action, mockDate);
    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(newState).toEqual(['19:00', '20:00']);
  });
});