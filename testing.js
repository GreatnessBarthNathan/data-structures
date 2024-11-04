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
console.log(queueA.isEmpty())
queueA.enqueue("dog")
queueA.enqueue("cat")
queueA.enqueue("fish")
queueA.enqueue("bird")
console.log(queueA.size())
queueA.dequeue()
console.log(queueA.peek())

console.log(queueA.print())
