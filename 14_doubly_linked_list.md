# Doubly Linked List

- In a doubly linked list each node contains a `value` field, a `next` node link, as well as second link`(prev)` pointing to the previous node in the sequent

- This means insertion and removal at both ends is posible, and with `constant` time complexity, but at the expense of more space

![linked list stack](/images/doubly_linked_list_2.png)

![linked list stack](/images/doubly_linked_list_1.png)

## Prepend

- If the list is empty the new node is both the head and tail of the list

![linked list stack](/images/doubly_linked_list_3.png)

- However, if a list already exists we point `node.next` to `head`, `head.prev` to `node`, and assign head to the new node which we just created

![linked list stack](/images/doubly_linked_list_4.png)

## Append

- If the list is empty the new node is both the head and tail of the list

![linked list stack](/images/doubly_linked_list_3.png)

- However if a list already exists we point `tail.next` to the new node, and point `node.prev` to tail, and assign tail to the newly created node

![linked list stack](/images/doubly_linked_list_5.png)

## Remove from front

- All you have to do is point the `head` node to its `next` node. Then set the `prev` of the new head to `null` The first node will effectively be removed in doing so

![linked list stack](/images/doubly_linked_list_6.png)

## Remove from end

- If the list contains only one node both `head` and `tail` should be pointed to null

![linked list stack](/images/doubly_linked_list_7.png)

- If the list contains more than one node, you get hold of the node previous to the tail using `tail.prev`. You assign tail to `tail.prev`, you then update the new tail `next` poiter to `null`

![linked list stack](/images/doubly_linked_list_8.png)

#### Removing items at both ends in a doubly linked list has `constant time` complexity

## Print

To print the list, start at head to the tail, using `next` pointer on each node

![linked list stack](/images/doubly_linked_list_9.png)

## Reverse

To print the list in reverse start at tail and traverse the list till the head, using the `prev` pointer in each node

![linked list stack](/images/doubly_linked_list_10.png)

```
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


```
