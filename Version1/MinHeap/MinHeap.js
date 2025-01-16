class MinHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2
  }

  swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      let parentIndex = this.getParentIndex(index)
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index)
        index = parentIndex
      } else {
        break
      }
    }
  }

  getMin() {
    return this.heap[0]
  }

  extractMin() {
    let min = this.heap[0]
    let end = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = end
      this.bubbleDown()
    }
    return min
  }

  bubbleDown() {
    let index = 0
    const length = this.heap.length

    while (true) {
      let leftChildIndex = index * 2 + 1
      let rightChildIndex = index * 2 + 2
      let swapIndex = null

      if (
        leftChildIndex < length &&
        this.heap[index] > this.heap[leftChildIndex]
      ) {
        swapIndex = leftChildIndex
      }

      if (
        rightChildIndex < length &&
        (swapIndex === null ||
          this.heap[swapIndex] > this.heap[rightChildIndex])
      ) {
        swapIndex = rightChildIndex
      }

      if (swapIndex === null) {
        break
      }
      this.swap(swapIndex, index)
      index = swapIndex
    }
  }

  getHeap() {
    return this.heap
  }

  size() {
    return this.heap.length
  }
}

const minHeap = new MinHeap()
minHeap.insert(10)
minHeap.insert(15)
minHeap.insert(30)
minHeap.insert(40)
minHeap.insert(50)
console.log('Heap now:', minHeap.getHeap())

minHeap.insert(5) //bubble up
console.log('Heap after inserting 5:', minHeap.getHeap())

console.log('Extracted min:', minHeap.extractMin())
console.log('Heap after extracting min:', minHeap.getHeap())

function kLargestElements(arr, k) {
  const minHeap = new MinHeap()
  for (let i = 0; i < arr.length; i++) {
    if (minHeap.heap.length < k) {
      minHeap.insert(arr[i])
    } else {
      if (arr[i] > minHeap.getMin()) {
        minHeap.extractMin()
        minHeap.insert(arr[i])
      }
    }
  }
  return minHeap.getHeap()
}
const arr = [3, 2, 1, 5, 6, 4]
const k = 3
console.log(`The ${k} largest elements are:`, kLargestElements(arr, k))

function kSmallestElements(arr, k) {
  const minHeap = new MinHeap()
  for (let num of arr) {
    minHeap.insert(num)
  }
  const result = []
  for (let i = 0; i < k; i++) {
    const min = minHeap.extractMin()
    if (min !== null) {
      result.push(min)
    }
  }
  return result
}

console.log(
  `---The ${k} smallesttttt elements are:`,
  kSmallestElements([3, 2, 1, 5, 6, 4], k)
)
