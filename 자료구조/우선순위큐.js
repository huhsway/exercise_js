class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this.heap = [];
        this.comparator = comparator;
    }

    get size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.size === 0) return undefined;
        const poppedValue = this.heap[0];
        const bottomValue = this.heap.pop();
        if (this.size !== 0) {
            this.heap[0] = bottomValue;
            this.heapifyDown();
        }
        return poppedValue;
    }

    heapifyUp() {
        let index = this.size - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[parentIndex], this.heap[index])) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const lastIndex = this.size - 1;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex <= lastIndex && this.comparator(this.heap[smallestIndex], this.heap[leftChildIndex])) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex <= lastIndex && this.comparator(this.heap[smallestIndex], this.heap[rightChildIndex])) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex !== index) {
                [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
                index = smallestIndex;
            } else {
                break;
            }
        }
    }
}
