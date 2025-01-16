class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class StackLinkedList {
  constructor() {
    this.top = null
    this.size = 0
  }

  push(element) {
    const newNode = new Node(element)
    newNode.next = this.top
    this.top = newNode
    this.size++
  }
  // remove top element of stack
  pop() {
    if (this.isEmpty()) {
      return 'stack empty nothing to pop'
    }
    const topElement = this.top
    this.top = this.top.next
    this.size--

    return topElement.value
  }

  isEmpty() {
    return this.top === null
  }

  // return peek of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return 'stack is empty'
    }
    return this.top.value
  }

  getSize() {
    return this.size
  }
  // clear stack
  clear() {
    this.top = null
    this.size = 0
  }
}

const stack = new StackLinkedList()

stack.push(1)
stack.push(2)
stack.push(3)
console.log('peek:', stack.peek())

stack.pop()
console.log('peek:', stack.peek())
