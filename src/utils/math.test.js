import { roundNumber } from './math';

describe('roundNumber', () => {
    it('correctly rounds different numbers', () => {
        expect(roundNumber(0.1234, 2)).toBe(0.12);
        expect(roundNumber(0)).toBe(0);
        expect(roundNumber()).toBe('');
        expect(roundNumber(0.1234)).toBe(NaN);
        expect(roundNumber(0.1234, -1)).toBe(0);
    })
});