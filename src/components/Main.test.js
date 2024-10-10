import { initializeTimes, updateTimes } from './Main';

describe('initializeTimes function', () => {
    test('returns the correct initial times', () => {
        const initialTimes = initializeTimes();
        expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    });
});

describe('updateTimes function', () => {
    test('returns the same times when an action is dispatched', () => {
        const currentTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const action = { type: 'UPDATE_TIMES', date: '2024-10-10' };
        const updatedTimes = updateTimes(currentTimes, action);
        expect(updatedTimes).toEqual(currentTimes);
    });
});
