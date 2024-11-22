class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  prepend(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.size++
  }

  append(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.size++
  }

  removeFromFront() {
    if (!this.isEmpty()) {
      if (this.size === 1) {
        this.head = null
        this.tail = null
        this.size--
      } else {
        this.head = this.head.next
        this.head.prev = null
        this.size--
      }
    }
  }

  removeFromEnd() {
    if (!this.isEmpty()) {
      if (this.size === 1) {
        this.head = null
        this.tail = null
        this.size--
      } else {
        this.tail = this.tail.prev
        this.tail.next = null
        this.size--
      }
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty")
    } else {
      let current = this.head
      let result = ""
      while (current) {
        result += `${current.value} `
        current = current.next
      }
      console.log(result)
    }
  }

  reverse() {
    if (!this.isEmpty()) {
      let current = this.tail
      let result = ""
      while (current) {
        result += `${current.value} `
        current = current.prev
      }
      console.log(result)
    }
  }
}

const list = new DoublyLinkedList()

list.prepend(15)
list.prepend(10)
list.append(20)
list.append(25)
// list.removeFromFront()
// list.removeFromFront()
// list.removeFromFront()
// list.removeFromEnd()
list.print()
list.reverse()
// console.log(list)
