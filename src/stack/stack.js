class Stack {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  size() {
    return this.count;
  }

  push(item) {
    this.head = { item: item, next: this.head };
    this.count++;
  }

  pop() {
    if (this.head === null) {
      throw new Error('Stack is Empty');
    }
    const item = this.head.item;
    this.head = item.next;
    this.count--;
    return item;
  }

  peek() {
    if (this.head === null) {
      throw new Error('Stack is Empty');
    }
    return this.head.item;
  }
}

module.exports = Stack;