const Calculator = require('../calculator');

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(2);
    expect(cal.value).toBe(2);
  });

  it('clear', () => {
    cal.clear();
    expect(cal.value).toBe(0);
  })

  it('adds', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it('add should throw an error if value id greater than 100', () => {
    expect(() => { cal.add(101); }).toThrow('Value can not be greater than 100');
  });

  it('subtract', () => {
    cal.set(5);
    cal.subtract(1);
    expect(cal.value).toBe(4);
  });

  it('multiply', () => {
    cal.set(10);
    cal.multiply(2);
    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('25 / 5 === 5', () => {
      cal.set(25);
      cal.divide(5);
      expect(cal.value).toBe(5);
    });
  });
});
