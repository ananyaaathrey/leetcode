// stacks are LIFO

class Stack {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    this.items.pop()
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack empty'
    }
    return this.items[this.items.length - 1]
  }

  print() {
    let result = ''
    for (let i = 0; i < this.size(); i++) {
      result += this.items[i] + ', '
    }
    console.log('Stack is:', result)
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}

const stack = new Stack()

stack.push(1)
stack.print()

stack.push(2)
stack.push(3)
stack.print()
