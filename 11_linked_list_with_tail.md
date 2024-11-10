# Linked List With Tail

## Insertion

In a regular linked list, if we focus on the insertion operations, we see that insertion at the beginning (prepend) has a constant time complexity, whereas insertion at the end (append) has linear time complexity. This linear time complexity can be improved to a constant time complexity by keeping track of an additional poiter called `tail` which always points at the last node on the list

- When the list is empty we have both `head` and `tail` poiting at null
  ![list with tail](/images/list_with_tail_1.png)

- To insert the first node in the list we create a node and point both `head` and `tail` at that node
  ![list with tail](/images/list_with_tail_2.png)

- To `prepend` a node, create a node, point its `next` pointer at the `head` node and point `head` at the new node
  ![list with tail](/images/list_with_tail_3.png)

- To `append` a node, we already have a reference to the last node, which is `tail`. All we have to do is to create a new node, point `tail.next` to the node, and assign the newly created node as the tail node for the list
  ![list with tail](/images/list_with_tail_4.png)

This makes insertion at both ends a constant time operation

## Deletion

- When there is one node on the list deleting that node involves making head and tail to point at null
  ![list with tail](/images/list_with_tail_5.png)

- If the list contains more than one element, and you want to delete the first element, make `head` point to `head.next`
  ![list with tail](/images/list_with_tail_6.png)

- In deleting the last element, we obtain a reference(`prev`) to the node before the last node. We set `tail` to be `prev` and point `prev` to `null`
  ![list with tail](/images/list_with_tail_7.png)

Deleting `from the start` has a `constant time complexity`, whereas deleting `from the end` has a `linear time complexity`

## Inserting, Searching, Reversing

All these are thesame with the regular linked list with only head

```
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
```

```
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
    return `The size of the list is ${this.size}`
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
      console.log(this.tail)
    }
  }
}

```
