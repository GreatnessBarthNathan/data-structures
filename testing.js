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
      console.log(this.frontPointer)
      console.log(this.rearPointer)
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

console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())
queue.print()

queue.dequeue()
console.log(queue.peek())
queue.enqueue(60)
console.log(queue.size())
queue.print()
