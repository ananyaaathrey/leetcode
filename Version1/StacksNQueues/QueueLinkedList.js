class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(element) {
    const newNode = new Node(element)
    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode

    if (!this.head) {
      this.head = newNode
    }
    this.size++
  }

  // remove head
  dequeue() {
    if (this.isEmpty()) {
      return 'queue is empty'
    }
    const topElement = this.head
    this.head = this.head.next

    if (!this.head) {
      this.tail = null
    }
    this.size--
    return topElement.value
  }

  isEmpty() {
    return this.size === 0
  }

  peek() {
    if (this.isEmpty()) {
      return 'queue is empty'
    }
    return this.head.value
  }

  getSize() {
    return this.size
  }

  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }
}

const queueLinkedList = new QueueLinkedList()
queueLinkedList.enqueue(1)
console.log('peek :', queueLinkedList.peek())

queueLinkedList.enqueue(2)
console.log('peek :', queueLinkedList.peek())

queueLinkedList.enqueue(3)
console.log('peek :', queueLinkedList.peek())

queueLinkedList.dequeue()
console.log('peek :', queueLinkedList.peek())

queueLinkedList.clear()
console.log('peek :', queueLinkedList.peek())
console.log('size :', queueLinkedList.getSize())
