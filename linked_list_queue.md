# Linked List Queue

A queue data structure follows the FIFO(first in first out) principle. In other words we insert from one end and remove from the other end.

If we consider a linked list, we can treat inserting a node at the end of the linked list as a `enqueue` operation and removing a node from the start as the `dequeue` operation

![linked list queue](/images/linked_list_queue_1.png)

![linked list queue](/images/linked_list_queue_2.png)

### Creating and Exporting a linkedList in another file

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

### Importing and Using the Linked List to create a queue

```
const LinkedList = require("./linked-list")

class LinkedListQueue {
constructor() {
this.list = new LinkedList()
}

enqueue(value) {
this.list.append(value)
}

dequeue() {
this.list.removeFromEnd()
}

isEmpty() {
return this.list.isEmpty()
}

getSize() {
return this.list.getSize()
}

peek() {
return this.list.head.value
}

print() {
return this.list.print()
}
}

const newQueue = new LinkedListQueue()

console.log(newQueue.isEmpty())
newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(30)
newQueue.enqueue(40)
newQueue.print()
newQueue.getSize()
console.log(newQueue.isEmpty())
newQueue.dequeue()
console.log(newQueue.getSize())
console.log(newQueue.peek())
newQueue.print()

```
