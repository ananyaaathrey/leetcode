class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = null
    this.tail = null
  }

  append(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
  }

  printForward() {
    let result = ''
    let current = this.head
    while (current !== null) {
      result += current.value + (current.next ? ' <-> ' : '')
      if (current) {
        current = current.next
      }
    }
    console.log('result list forward: ', result)
  }

  printBackward() {
    let result = ''
    let current = this.tail
    while (current !== null) {
      result += current.value + (current.prev ? ' <-> ' : '')
      current = current.prev
    }
    console.log('result list backward: ', result)
  }

  delete(value) {
    let current = this.head
    let nextNode, prev
    while (current !== null) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next
          if (this.head) {
            this.head.prev = null
          }
        } else if (current === this.tail) {
          this.tail = current.prev
          if (this.tail) {
            this.tail.next = null
          }
        } else {
          nextNode = current.next
          prev = current.prev

          prev.next = nextNode
          nextNode.prev = prev
        }
        return
      }
      current = current.next
    }
  }
}

const list = new DoublyLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)

console.log('list: ', list)
list.printForward()
list.printBackward()

list.delete(2)
list.printForward()

list.delete(1)
list.printForward()

list.delete(4)
list.printForward()

list.delete(3)
list.printForward()
