class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.DELETED = 'deleted'
  }

  hash(key) {
    let hashValue = 0
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i)
    }
    return hashValue
  }

  set(key, value) {
    let index = this.hash(key)
    while (this.table[index]) {
      index = (index + 1) % this.table.length
      console.log('index: ', index)
    }
    this.table[index] = [key, value]
  }

  get(key) {
    let index = this.hash(key)
    while (this.table[index]) {
      if (this.table[index][0] === key) {
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
        return true
      }
      index = (index + 1) % this.table.length
    }
    return false
  }
}

const hashTable = new HashTable(50)
hashTable.get('name')

hashTable.set('name', 'sun')
console.log(hashTable.get('x'))

hashTable.set('mane', 'moon')
console.log('hashTable.get(name) : ', hashTable.get('name'))
console.log('hashTable.get(mane) : ', hashTable.get('mane'))

console.log('before deleting')
console.log('delete mane : ', hashTable.delete('mane'))
console.log('hashTable.get(mane) : ', hashTable.get('mane'))
