# Circular Queue

The circular queue is an extension of the regular queue

The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element

The circular queue is also referred to as circular buffer or ring buffer and follows the FIFO principle

Unlike the regular queue created with arrays, the circular queue will reuse the empty block created during the dequeue operation

Because of this, when working with queues of fixed maximum size, a circular queue is a greate implementation choice

The circular queue data structure supports two main operations:

- Enqueue, which adds an element to the rear/tail of the collection
- Dequeue, which removes an element from the front/head of the collection

## Circular Queue Visualization

- You enqueue one element at a time using the rear pointer. If the queue is full you cannot enqueue anymore

![Alt text](/images/circular_queue_1.png)

- You can start to dequeue from the other end using the front pointer. The empty block available can be reused to enqueue more items

![Alt text](/images/circular_queue_2.png)

## Circular Queue Usage

Whenever you have a fixed size data you need to manage, circular queue is your go-to data structure

- Clock
- Streaming data (where it acts as a buffer)
- Computer controlled Traffic lights

## Circular Queue Implementation

1. enqueue(element) - add an element to the queue
2. dequeue( ) - remove the oldest element from the queue
3. isFull( ) - check if the queue is full
4. isEmpty( ) - check if the queue is empty
5. peek( ) - get the value of the element at the front of the queue without removing it
6. size( ) - get the number of elements in the queue
7. print( ) - visualize the elements in the queue

```
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity)
    this.capacity = capacity
    this.currentLength = 0
    this.frontPointer = -1
    this.rearPointer = -1
  }

  isFull() {
    return this.currentLength === this.capacity
  }

  isEmpty() {
    return this.currentLength === 0
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rearPointer = (this.rearPointer + 1) % this.capacity
      this.items[this.rearPointer] = element
      this.currentLength += 1
      if (this.frontPointer === -1) {
        this.frontPointer = this.rearPointer
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    this.items[this.frontPointer] = null
    this.frontPointer = (this.frontPointer + 1) % this.capacity
    this.currentLength -= 1
    if (this.isEmpty()) {
      this.frontPointer = -1
      this.rearPointer = -1
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.frontPointer]
    }
    return null
  }

  size() {
    return this.currentLength
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty")
    } else {
      let i
      let str = ""
      for (
        i = this.frontPointer;
        i !== this.rearPointer;
        i = (i + 1) % this.capacity
      ) {
        str += this.items[i] + " "
      }

      str += this.items[i]
      console.log(str)
    }
  }
}

const queue = new CircularQueue(5)

console.log(queue.isEmpty()) --> true

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull()) --> true
queue.print()

queue.dequeue()
console.log(queue.peek()) --> 20
queue.enqueue(60)
console.log(queue.size()) --> 5
queue.print() --> 20 30 40 50 60
```
