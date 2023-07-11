import operate from './operate';
test('should run the moduleys function', () => {
  const result3 = operate(4, 2, '%');
  expect(result3).toEqual('0');
});
describe('operate', () => {
  test('should addition two numbers correctly', () => {
    const result = operate(1, 2, '+');
    expect(result).toEqual('3');
  });

  test('should multiply two numbers correctly', () => {
    const result2 = operate(2, 4, 'x');
    expect(result2).toEqual('8');
  });

  test('should substract two numbers correctly', () => {
    const result3 = operate(4, 2, '-');
    expect(result3).toEqual('2');
  });

  test('should divide two numbers correctly', () => {
    const result3 = operate(4, 2, '÷');
    expect(result3).toEqual('2');
  });
});
