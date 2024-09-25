// Separate Chaining
class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let hashValue = 0
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i)
    }
    return hashValue % this.size
  }
  set(key, value) {
    const index = this.hash(key)
    if (!this.table[index]) {
      this.table[index] = []
    }
    this.table[index].push([key, value])
  }

  get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1]
        }
      }
    }
    return undefined
  }

  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1)
      }
    }
  }
}

const hashTable = new HashTable(50)
hashTable.set('name', 'sun')
hashTable.set('mane', 'moon')

console.log(hashTable.get('name'))
console.log(hashTable.get('mane'))

hashTable.remove('name')
console.log('after removing name : ', hashTable.get('name'))
console.log(hashTable.get('mane'))
