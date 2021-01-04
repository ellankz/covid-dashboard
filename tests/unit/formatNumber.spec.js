import { formatNumber } from '../../src/helpers/formatNumber';

describe('formatNumber function', () => {
  test('should format all kinds of numbers', () => {
    const numbers = [
      1e9, 44444, 1e18, 292.3333, 44e3, 12, 294, 0.1, 0.33334, 1e6, 1e12, 1e15,
    ];

    const output = [
      '1G', '44k', '1E', '292', '44k', '12', '294', '0.100', '0.333', '1M', '1T', '1P',
    ];

    numbers.forEach((num, i) => expect(formatNumber(num)).toEqual(output[i]));
  });
});
