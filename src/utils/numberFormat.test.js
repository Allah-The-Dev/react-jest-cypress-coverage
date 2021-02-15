import { getCurrencyFormattedNumber, getFormattedNumber } from './numberFormat';

describe('numberFormat', () => {
  it('getCurrencyFormattedNumber', () => {
    expect(getCurrencyFormattedNumber(0)).toBe('$0');
    expect(getCurrencyFormattedNumber(10)).toBe('$10');
  })

  it('getFormattedNumber', () => {
    // edge cases
    expect(getFormattedNumber(0)).toBe(0);
    expect(getFormattedNumber('')).toBeNull();
    expect(getFormattedNumber(null)).toBeNull();

    expect(getFormattedNumber('not a number')).toBeNull();
    // really large values should get commas
    expect(getFormattedNumber(10000000.1234)).toEqual('10,000,000.12')
    // always 2 digits for cents
    expect(getFormattedNumber(99.1)).toEqual('99.10')
  })
})