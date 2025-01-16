class PriorityQueue {
  constructor() {
    this.queue = []
  }

  enqueue(element, priority) {
    const node = { element, priority }
    let added = false
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority > priority) {
        this.queue.splice(i, 0, node)
        added = true
        break
      }
    }
    if (!added) {
      this.queue.push(node)
    }
  }

  // Remove and return node with lowest priority
  dequeue() {
    if (this.isEmpty()) {
      return 'Priority queue is empty'
    }
    return this.queue.shift()
  }

  isEmpty() {
    return this.queue.length === 0
  }

  getSize() {
    return this.queue.length
  }
}
const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('Clean the house', 3)
