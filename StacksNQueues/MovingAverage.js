class MovingAverage {
  constructor(k) {
    this.queue = []
    this.maxSize = k
    this.sum = 0
  }

  next(element) {
    if (this.queue.length === this.maxSize) {
      this.sum -= this.queue.shift()
    }

    this.queue.push(element)
    this.sum += element

    return this.sum / this.queue.length
  }
}

const movingAverage = new MovingAverage(3)
console.log(movingAverage.next(1)) // Output: 1.0
console.log(movingAverage.next(10)) // Output: 5.5
console.log(movingAverage.next(3)) // Output: 4.6667
console.log(movingAverage.next(5)) // Output: 6.0
