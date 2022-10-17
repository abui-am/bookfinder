import sum from '../sum';

describe('Sum', () => {
  it('should be 5', () => {
    const value = sum(1, 4);
    expect(value).toBe(5);
  });

  it('should be 4', () => {
    const value = sum(2, 2);
    expect(value).toBe(4);
  });

  it('should be 0', () => {
    const value = sum(2, -2);
    expect(value).toBe(0);
  });
});
