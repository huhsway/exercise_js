// class Queue {
//     constructor() {
//       this._arr = [];
//     }
//     enqueue(item) {
//       this._arr.push(item);
//     }
//     dequeue() {
//       return this._arr.shift();
//     }
//   }
  
//   const queue = new Queue();
//   queue.enqueue(1);
//   queue.enqueue(2);
//   queue.enqueue(3);
//   queue.dequeue(); // 1

const queue = [];

//put value on end of queue
queue.push(1);

//Take first value from queue
const value = queue.shift();