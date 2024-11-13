class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    let index = this.hash(key)
    const bucket = this.table[index]
    if (!bucket) {
      this.table[index] = [[key, value]]
    } else {
      let existingKey = bucket.find((item) => item[0] === key)
      if (existingKey) {
        existingKey[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }

  get(key) {
    let index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      let existingKey = bucket.find((item) => item[0] === key)
      return existingKey[1]
    }
    return undefined
  }

  remove(key) {
    let index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      let existingKey = bucket.find((item) => item[0] === key)
      bucket.splice(bucket.indexOf(existingKey), 1)
    } else {
      return
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(this.table[i])
      }
    }
  }
}

const table = new HashTable(50)

table.display()
table.set("name", "Greatness")
table.set("age", 32)
table.set("role", "full-stack")
table.set("salary", 6000)
table.set("mane", "Liverpool")
table.display()
console.log(table.get("name"))
console.log(table.get("age"))
table.display()
table.set("name", "Nathan")
console.log(table.get("name"))
table.remove("age")
table.display()
