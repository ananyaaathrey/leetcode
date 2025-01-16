class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'empty queue'
    }
    this.items.shift()
  }

  isEmpty() {
    return this.items.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return 'empty queue'
    }
    return this.items[0]
  }

  last() {
    if (this.isEmpty()) {
      return 'empty queue'
    }
    return this.items[this.items.length - 1]
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)

console.log('queue.peek(): ', queue.peek())
console.log('queue.last(): ', queue.last())

queue.enqueue(3)
console.log('queue.peek(): ', queue.peek())

queue.dequeue()
console.log('queue.peek(): ', queue.peek())

queue.dequeue()
console.log('queue.peek(): ', queue.peek())
