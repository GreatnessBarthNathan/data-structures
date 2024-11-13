# Hash Table

A hash table, also known as hash map, is a data structure that is use to store key-value pairs

Given a key, you can associate a value with that key for very fast lookup

But do we not already have `Objects` in javascript for that very same purpose? Yes we do

JavaScript Object is a special implementation of the hash table data structure. However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties

However, the `Map` data structure overcomes these shortcomings. Maps which were introduced in 2015 allow you to store key-value pairs without the shortcomings of an object. To be honest, that is what you should use when writing code

Although JavaScript already has two hash table impementations(Objects and Maps), writing your own hash table implementation is a very popular JavaScript interview question

Hash tables store key value pairs. For Example:

1. 'in' => 'India'
2. 'au' => 'Australia'
3. 'fr' => 'France'
4. 'It' => 'Italy'

Typically, we store the key value pairs in a fixed size array. But we know that arrays have a numeric index.

How do we go from using a `string` as an index to `number` as an index?

This is where a function called a `hashing function` comes in. A `hashing function` accepts a `string key`, converts it into a `hash code` using a defined logic and then maps it into a numeric index that is within the bounds of the array

Once we have that index, we use it to store the value

The same hashing function is reused to retrieve the value given a key

A hash table supports three main operations:

1. Set - to store a key-value pair
2. Get - to retrieve a value given its key
3. Remove - to delete a key value pair

![hash table](/images/hash_table_1.png)

```
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
    const index = this.hash(key)
    this.table[index] = value
  }

  get(key) {
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key) {
    const index = this.hash(key)
    this.table[index] = undefined
  }

  display() {
    let result = ""
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
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

table.display()

console.log(table.get("name"))

table.remove("age")

console.log(table.get("age"))
table.display()

```

## Collisions

If for example we set a key-value pair to be `name => Bruce` and later set another one to be `mane => Henry`. It will result in a `collision` of index because the hash function will assign thesame index to `mane` hence replacing `name` in memory. This is called a collision, and our implementation above doesn't handle that.

## Handling Collisions

- Instead of storing one value at a given index, we store an array of key-value pairs

![hash table](/images/hash_table_2.png)

- to be more specific, at index 0, instead of storing just one key-value pair, we store an array, and withing this array we store smaller arrays that contain key-value pairs

![hash table](/images/hash_table_3.png)

```
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
    const index = this.hash(key)
    const bucket = this.table[index]
    if (!bucket) {
      this.table[index] = [[key, value]]
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key)
      if (sameKeyItem) {
        sameKeyItem[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }

  get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key)
      if (sameKeyItem) {
        return sameKeyItem[1]
      }
    }
    return undefined
  }

  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key)
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1)
      }
    }
  }

  display() {
    let result = ""
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
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

```

## Time Complexity

The worst case time complexity of the `set`, `get`, and `remove` methods are `linear`

However, with hash tables the collisions is very minimal and it can be reduced a great extent by having better hashing functions. Because of that we generally consider the `average case time complexity` which is `constant`

This is the reason why hash tables are a prime choice when solving problems

## Hash Table Usage

Hash tables are typically implemented where constant time lookup and insertion are required. Common examples are:

- Database indexing
- Caches
