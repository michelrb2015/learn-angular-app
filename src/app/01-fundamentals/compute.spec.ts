import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if value is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment value if input is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
