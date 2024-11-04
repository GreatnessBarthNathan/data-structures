# Queue

The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)

This means the first element inserted into the queue is the first element to be removed

A common analogy is a queue of people waiting in line. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head)

Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model

So a queue is simply a list, and what makes it a queue is how it behaves

The Queue data structure supports two main operations:

- Enqueue, which adds an element to the rear/tail of the collection
- Dequeue, which removes an element from the front/head of the collection

## Queue Usage

Typically a queue is great when you have to process in an orderly fashion. Example:

- Printers: when you are trying to print multiple documents
- CPU task scheduling
- Callback queue in JavaScript runtime to determine the order in which your code executes

## Queue Implementation

1. enqueue(element) - add an element to the queue

2. dequeue( ) - remove the oldest element from the queue

3. peek( ) - get the value of the element at the fromt of the queue without removing it

4. isEmpty( ) - check if the queue is empty

5. size( ) - get the number of elements in the queue

6. print( ) - to visualize the elements in the queue

```
class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    this.items.shift()
  }

  isEmpty() {
    return this.items.length === 0
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0]
    }
    return null
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}

const queueA = new Queue()
console.log(queueA.isEmpty()) --> true
queueA.enqueue("dog")
queueA.enqueue("cat")
queueA.enqueue("fish")
queueA.enqueue("bird")
console.log(queueA.size()) --> 4
queueA.dequeue()
console.log(queueA.peek()) --> cat

queueA.print() --> cat,fish,bird

```
