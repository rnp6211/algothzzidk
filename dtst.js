class Stack {
    constructor() {
        this.arr = []
    }

    push(val) {
        this.arr.push(val)
    }

    pop() {
        return this.arr.pop()
    }

    peek() {
        return this.arr[this.arr.length - 1]
    }
}

class Queue {
    constructor() {
        this.arr = []
    }

    enqueue(val) {
        this.arr.push(val)
    }

    dequeue() {
        return this.arr.shift()
    }

    peek() {
        return this.arr[0]
    }
}

module.exports = { Stack, Queue }
