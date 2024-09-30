class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head

      while (current.next !== null) {
        current = current.next
      }

      current.next = newNode
    }
  }

  print() {
    let current = this.head
    let result = ''
    while (current !== null) {
      result += current.value + ' -> '
      current = current.next
    }
    console.log('list is : ', result, null)
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head

    this.head = newNode
  }

  delete(value) {
    if (!this.head) {
      return
    }

    if (this.head.value === value) {
      this.head = this.head.next
      return
    }

    let current = this.head
    while (current.next && current.next.value !== value) {
      current = current.next
    }
    if (current.next) {
      current.next = current.next.next
    }
  }

  search(value) {
    let current = this.head
    while (current.next !== null) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }
    return false
  }

  reverse() {
    let prev = null
    let current = this.head

    while (current !== null) {
      let nextNode = current.next
      current.next = prev
      prev = current
      current = nextNode
    }
    this.head = prev
  }

  detectCycle() {
    let slow = this.head
    let fast = this.head

    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next

      if (slow === fast) {
        return true
      }
    }
    return false
  }

  findMiddle() {
    let slow = this.head
    let fast = this.head

    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow.value
  }

  lengthOfLinkedList() {
    let current = this.head

    let counter = 0
    while (current !== null) {
      counter++
      current = current.next
    }
    return counter
  }

  mergeTwoSortedLinkedLists(l1, l2) {
    const dummy = new Node(0)
    let pointer = dummy

    while (l1 !== null && l2 !== null) {
      if (l1.value < l2.value) {
        pointer.next = l1
        l1 = l1.next
      } else {
        pointer.next = l2
        l2 = l2.next
      }
      pointer = pointer.next
    }

    pointer.next = l1 !== null ? l1 : l2
    return dummy.next
  }

  mergeTwoSortedLinkedListsAvoidDuplicate(l1, l2) {
    const dummy = new Node(0)
    let pointer = dummy

    while (l1 !== null && l2 !== null) {
      if (l1.value == l2.value) {
        pointer.next = l1
        pointer = pointer.next

        l1 = l1.next
        l2 = l2.next

        while (l1 !== null && l1.value === pointer.value) {
          l1 = l1.next
        }

        while (l2 !== null && l2.value === pointer.value) {
          l2 = l2.next
        }
      } else if (l1.value < l2.value) {
        pointer.next = l1
        pointer = pointer.next

        l1 = l1.next
      } else {
        pointer.next = l2
        pointer = pointer.next

        l2 = l2.next
      }
    }

    pointer.next = l1 !== null ? l1 : l2
    return dummy.next
  }

  removeNthFromEnd(n) {
    let current = this.head
    let length = 0

    while (current !== null) {
      length++
      current = current.next
    }

    if (n === length) {
      this.head = this.head.next
      return
    }

    current = this.head
    for (let i = 0; i < length - n - 1; i++) {
      current = current.next
    }

    if (current.next !== null) {
      current.next = current.next.next
    }
  }

  addTwoNumbers(l1, l2) {
    l1.reverse() // Assuming reverse method is implemented in LinkedList
    l2.reverse()

    let currentL1 = l1.head
    let currentL2 = l2.head
    let carry = 0
    let newList = new LinkedList()

    while (currentL1 || currentL2 || carry) {
      const value1 = currentL1 ? currentL1.value : 0 // Use 0 if currentL1 is null
      const value2 = currentL2 ? currentL2.value : 0 // Use 0 if currentL2 is null

      const sum = value1 + value2 + carry
      newList.append(sum % 10) // Append the unit digit to the new list
      carry = Math.floor(sum / 10) // Update carry for the next iteration

      // Move to the next nodes
      if (currentL1) currentL1 = currentL1.next
      if (currentL2) currentL2 = currentL2.next
    }

    return newList // Return the new linked list
  }

  printNew() {
    let result = ''
    let current = this.head
    while (current) {
      result += current.value
      if (current.next) {
        result += ' -> '
      }
      current = current.next
    }
    console.log('Resulting Linked List: ' + result)
  }

  intersectionNode(l1, l2) {
    let currentL1 = l1.head
    let currentL2 = l2.head

    while (currentL1) {
      while (currentL2) {
        if (currentL1.value === currentL2.value) {
          return true
        }

        if (currentL2.next) {
          currentL2 = currentL2.next
        } else {
          break
        }
      }

      if (currentL1.next) {
        currentL1 = currentL1.next
      } else {
        break
      }
    }
    return false
  }
}
const list = new LinkedList()

const list1 = new LinkedList()
list1.append(2)
list1.append(4)
list1.append(3)

const list2 = new LinkedList()
list2.append(5)
list2.append(6)
list2.append(14)

// const result = list.addTwoNumbers(list1, list2)
// console.log('Resulting Linked List:', result.printNew())
// const final = new LinkedList()
// final.head = result
// final.printNew()

// --- find intersection
const result = list.intersectionNode(list1, list2)
console.log('Resulting intersection:', result)

// const list = new LinkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.print()

// list.prepend(5)
// list.print()

// // console.log('starting delete ')

// // list.delete(10)
// // list.print()

// // list.delete(30)
// // list.print()

// // list.delete(5)
// // list.print()

// // list.delete(20)
// // list.print()

// // list.delete(22)
// // list.print()
// console.log('search for 5 :', list.search(5))
// console.log('search for 15 :', list.search(15))

// list.print()
// console.log('reversing')
// list.reverse()
// list.print()

// console.log('detectCycle(): ', list.detectCycle())

// console.log('findMiddle: ', list.findMiddle())
// list.print()
// console.log('lengthOfLinkedList: ', list.lengthOfLinkedList())

// const list1 = new LinkedList()
// list1.append(1)
// list1.append(2)
// list1.append(4)

// const list2 = new LinkedList()
// list2.append(1)
// list2.append(3)
// list2.append(4)

// const mergedHead = list.mergeTwoSortedLinkedLists(list1.head, list2.head)
// const mergedList = new LinkedList()
// mergedList.head = mergedHead
// mergedList.print()

// const mergedHead2 = list.mergeTwoSortedLinkedListsAvoidDuplicate(
//   list1.head,
//   list2.head
// )
// const mergedList2 = new LinkedList()
// mergedList2.head = mergedHead2
// mergedList2.print()

// list.print()
// console.log('removeNthFromEnd: 3 ')
// list.removeNthFromEnd(3)
// list.print()
