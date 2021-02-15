import { calculateMilesDrivenPerMonth, calculateSavingsPerMonth } from './fuelSavings';
 
describe('calculateMilesDrivenPerMonth', () => {
  it('computes monthly', () => {
    expect(calculateMilesDrivenPerMonth(100, 'month')).toEqual(100);
    expect(calculateMilesDrivenPerMonth(1200, 'year')).toEqual(100);
    expect(() => calculateMilesDrivenPerMonth(1200, 'parsec')).toThrow('parsec');
  })
})

describe('calculateSavingsPerMonth', () => {
  it('returns 0', () => {
    expect(calculateSavingsPerMonth({ milesDrive: 0 })).toEqual(0)
  })
})