class Stack {
    constructor() {
      this._arr = [];
    }
    push(item) {
      this._arr.push(item);
    }
    pop() {
      return this._arr.pop();
    }
    peek() {
      return this._arr[this._arr.length - 1];
    }
  }
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop(); // 3
  

// const stack = [];

// //put value on top of stack
// stack.push(1);

// //remove value from top of stack
// const value = stack.pop();