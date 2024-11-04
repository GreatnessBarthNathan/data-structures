# Queue Optimized

In the previous implementation of the queue data structure we used an array. However, the 'dequeue' operation has a 'linear time complexity' due to the use of the built in shift method

Now let's implement the queue data structure using an object, ensuring both dequeue and enqueue operations have 'constant time complexity'

```
class Queue {
  constructor() {
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  enqueue(element) {
    this.items[this.rear] = element
    this.rear++
  }

  dequeue() {
    delete this.items[this.front]
    this.front++
  }

  isEmpty() {
    return this.rear - this.front === 0
  }

  peek() {
    return this.items[this.front]
  }

  size() {
    return this.rear - this.front
  }

  print() {
    return this.items
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

console.log(queueA.print()) --> {'1': 'cat', '2': 'fish', '3': 'bird'}

```
