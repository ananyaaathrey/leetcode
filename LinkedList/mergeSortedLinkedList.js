function mergeSortedLinkedList(linkedList1, linkedList2) {
  let dummy = new Node(0)
  let current = dummy

  let l1 = linkedList1.head
  let l2 = linkedList2.head

  while (l1 !== null || l2 !== null) {
    if (l1.value === l2.value) {
      current.next = l1
      l1++
      current = current.next
      current.next = l2
      l2++
      current = current.next
    } else if (l1.value > l2.value) {
      current.next = l2
      l2++
      current = current.next
    } else {
      current.next = l1
      l1++
      current = current.next
    }
  }
  if (l1 !== null) {
    current.next = l1
  } else if (l2 !== null) {
    current.next = l2
  }
  return dummy.next
}

function removeNthFromEnd(n, list) {
  // first get length of the list to do for loop
  // then once you get length, do loop till len - n -1 = index to be removed
  // remove index is current.next= current.next.next
  let dummy = new Node(0)
  dummy.next = list.head
  let current = dummy.next
  let len = 1
  // get length
  while (current !== null) {
    len++
    current = current.next
  }
  if (n > len) {
    return list // Return the original list
  }
  let i = 0
  current = dummy.next
  while (i !== len - n - 1) {
    i++
    current = current.next
  }

  current.next = current.next.next

  return dummy.next
}

function addTwoLinkedList(linkedList1, linkedList2) {
  //  get 2 pointers l1, l2
  // carry =0
  //  add sum and see if sum >10 then get reminder and add to current.next = reminder
  // carry =1
  //   handle left over list

  let l1 = linkedList1.head
  let l2 = linkedList2.head

  let dummy = new Node(0)
  let current = dummy
  let carry = 0,
    sum = 0,
    reminder = 0

  while (l1 !== null || l2 !== null || carry) {
    sum = l1 ? l1.value : 0 + l2 ? l2.value : 0 + carry

    reminder = sum % 10 // reminder
    carry = Math.floor(sum / 10)

    current.next = new Node(reminder)
    current = current.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  return dummy.next
}

function intersection(linkedList1, linkedList2) {
  // get two pointers l1 and l2
  // if(l1.val === l2.val) { return l1.value}
  // l1= l1.next ; l2 = l2.next
  // final answer to return the common node ie., current.value

  let l1 = linkedList1.head,
    l2 = linkedList2.head
  while (l1 !== null) {
    l2 = linkedList2.head
    while (l2 !== null) {
      if (l1.value === l2.value) {
        return l1.value
      }
      l2 = l2.next
    }
    l1 = l1.next
  }
  return null
}

function reverse(list) {
  let prev = null
  let current = list.head
  let nextNode
  while (current !== null) {
    nextNode = current.next
    current.next = prev

    prev = current
    current = nextNode
  }
  return prev // head is at prev
}

function detectCycle(list) {
  let slow, fast
  slow = list.head
  fast = list.head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}

function middle(list) {
  let slow = list.head
  let fast = list.head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow.value
}
