class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      newNode.next = newNode
      newNode.prev = newNode
    } else {
      this.tail.next = newNode
      newNode.next = this.head

      this.head.prev = newNode
      newNode.prev = this.tail

      this.tail = newNode
    }
  }

  print() {
    if (this.head === this.tail) {
      console.log('result : ', this.head.value)
      return
    }
    let result = ''
    let current = this.head

    do {
      result += current.value + (current.next !== this.head ? ' <-> ' : '')
      console.log('result: ', result)
      if (current.next) current = current.next
    } while (current !== this.head)
    console.log('result:', result)
  }
}

const list = new CircularLinkedList()

list.append(1)
list.print()

list.append(2)
console.log('list: ', list)
list.print()
