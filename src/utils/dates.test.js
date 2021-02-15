import { padLeadingZero } from './dates';

describe('padLeadingZero', () => {
    it('handles NaN', () => {
        expect(() => padLeadingZero('foo')).toThrow('Numbers only.')
    })
})