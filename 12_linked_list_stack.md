# Linked List Stack

A stack data structure follows the LIFO(last in first out) principle. In other words we insert from one end and remove from that same end.

If we consider a linked list, we can treat inserting a node at the start of the linked list as a `push` operation and removing a node from the start as the `pop` operation

![linked list stack](/images/linked_list_stack_1.png)

![linked list stack](/images/linked_list_stack_2.png)

### Creating and Exporting a linkedList Instance in another file

```
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
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
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null
    } else {
      this.head = this.head.next
      this.size--
    }
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null
    }
    if (this.size === 1) {
      this.head = null
      this.tail = null
      this.size--
    } else {
      let prev = this.head

      while (prev.next !== this.tail) {
        prev = prev.next
      }
      prev.next = null
      this.tail = prev
      this.size--
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty")
    } else {
      let current = this.head
      let listValue = ""
      while (current) {
        listValue += `${current.value} `
        current = current.next
      }
      console.log(listValue)
    }
  }
}

module.exports = LinkedList

```

### Using the Importing and Using the Linked List to create a stack

```
const LinkedList = require("./linked-list")

class LinkedListStack {
  constructor() {
    this.list = new LinkedList()
  }

  push(value) {
    this.list.prepend(value)
  }

  pop() {
    this.list.removeFromFront()
  }

  peek() {
    return this.list.head.value
  }

  isEmpty() {
    const isEmpty = this.list.isEmpty()
    return isEmpty
  }

  getSize() {
    return this.list.getSize()
  }

  print() {
    return this.list.print()
  }
}

const newStack = new LinkedListStack()

console.log(newStack.isEmpty())
newStack.push(40)
newStack.push(30)
newStack.push(20)
newStack.push(10)
newStack.getSize()
console.log(newStack.isEmpty())
newStack.pop()
console.log(newStack.getSize())
console.log(newStack.peek())
newStack.print()

```
