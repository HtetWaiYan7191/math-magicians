import calculate from './calculate';

describe('calculate', () => {
  test('should handle AC button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('should handle number buttons', () => {
    const result2 = calculate({ total: '10', next: '5', operation: '+' }, '1');
    expect(result2).toEqual({ total: '10', next: '51', operation: '+' });
  });

  test('should perform addition correctly', () => {
    const result3 = calculate({ total: '5', next: '4', operation: '+' }, '=');
    expect(result3).toEqual({ total: '9', next: null, operation: null });
  });
});
