class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
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
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return
    }
    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
    } else {
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      let removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null
    }
    if (this.head.value === value) {
      this.head = this.head.next
      this.size--
    } else {
      let prev = this.head
      while (prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if (prev.next) {
        let removedNode = prev.next
        prev.next = removedNode.next
        this.size--
      }
      return null
    }
  }

  search(value) {
    let count = 0
    if (this.isEmpty()) {
      return -1
    } else {
      let current = this.head
      while (current) {
        if (current.value === value) {
          return count
        }
        current = current.next
        count++
      }
      return -1
    }
  }

  reverse() {
    let prev = null
    let current = this.head
    while (current) {
      let next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty")
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

const list = new LinkedList()

console.log("List is empty? ", list.isEmpty())
console.log("List size -", list.getSize())
list.print()

list.insert(10, 0)
list.insert(20, 1)
list.insert(15, 1)
list.print()
list.removeFrom(2)
list.print()
list.insert(20, 2)
list.insert(25, 3)
list.print()
// list.removeValue(20)
// list.removeValue(15)
// list.removeValue(40)
console.log(list.search(10))
console.log(list.search(15))
console.log(list.search(20))
console.log(list.search(30))
list.print()
list.reverse()
list.print()
console.log(list.getSize())
