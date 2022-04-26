const Stack = require('../stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is create empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allow push item', () => {
    stack.push("0");
    expect(stack.size()).toBe(1);
  });

  describe('Pop', () => {
    it('throw an error if stack is empty ', () => {
      expect(() => stack.pop()).toThrow('Stack is Empty');
    });

    it('return last pushed item and removes it from the stack', () => {
      stack.push('benz');
      stack.push('bmw');
      expect(stack.pop()).toBe('bmw');
      expect(stack.size()).toBe(1);
    })
  });

  describe('Peek', () => {
    it('throw an error if stack is empty', () => {
      expect(() => stack.peek()).toThrow("Stack is Empty");
    });

    it('return last pushed item but keeps it in the stack', () => {
      stack.push('benz');
      stack.push('bmw');
      expect(stack.peek()).toBe("bmw");
      expect(stack.size()).toBe(2);
    })
  });
});