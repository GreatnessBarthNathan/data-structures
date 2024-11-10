class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
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
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
  }

  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return
    }

    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }
    this.size--
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return
    }

    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    this.size--
  }

  reverse() {
    if (this.isEmpty()) {
      return
    }
    if (this.size === 1) {
      return
    } else {
      let current = this.tail
      let listValues = ""
      while (current) {
        listValues += `${current.value} `
        current = current.prev
      }
      console.log(listValues)
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty")
    }
    if (this.size === 1) {
      console.log(this.head.value)
    } else {
      let current = this.head
      let listValues = ""
      while (current) {
        listValues += `${current.value} `
        current = current.next
      }
      console.log(listValues)
    }
  }
}

const list = new DoublyLinkedList()

console.log(list.isEmpty())
console.log(list.getSize())
list.prepend(10)
list.prepend(15)
list.append(40)
list.append(30)
list.append(20)
list.print()
list.removeFromFront()
list.print()
list.removeFromEnd()
list.print()
list.reverse()
