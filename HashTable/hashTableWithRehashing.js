class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
    this.DELETED = 'deleted'
    this.numElements = 0
    this.loadFactorThreshold = 0.7
  }

  hash(key) {
    let hashValue = 0
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i)
    }
    return hashValue
  }

  set(key, value) {
    if (this.numElements / this.size > this.loadFactorThreshold) {
      this.resize()
    }
    let index = this.hash(key)
    while (this.table[index] && this.table[index] !== this.DELETED) {
      index = (index + 1) % this.table.length
    }
    this.table[index] = [key, value]
    this.numElements++
  }

  get(key) {
    let index = this.hash(key)
    while (this.table[index]) {
      if (this.table[index] !== this.DELETED && this.table[index][0] === key) {
        return this.table[index][1]
      }
      index = (index + 1) % this.table.length
    }
    return undefined
  }

  delete(key) {
    let index = this.hash(key)
    while (this.table[index]) {
      if (this.table[index] !== this.DELETED && this.table[index][0] === key) {
        this.table[index] = this.DELETED
        this.numElements--
        return true
      }
      index = (index + 1) % this.table.length
    }
    return false
  }

  resize() {
    console.log('Resizing hash table')
    const oldTable = this.table
    this.size = this.size * 2
    this.table = new Array(this.size)
    this.numElements = 0

    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i] && oldTable[i] !== this.DELETED) {
        const [key, value] = oldTable[i]
        this.set(key, value)
      }
    }
  }
}

const hashTable = new HashTable(3)

hashTable.set('a', 'alpha')
hashTable.set('b', 'beta')
hashTable.set('c', 'gamma')

hashTable.set('t', 'thetha')
console.log(hashTable.get('t'))
