class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const newNode = new Node(value)

    if (this.isEmpty()) {
      this.root = newNode
    } else {
      let current = this.root

      while (current) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return
          } else {
            current = current.left
          }
        } else {
          if (current.right === null) {
            current.right = newNode
            return
          } else {
            current = current.right
          }
        }
      }
    }
  }

  search(value) {
    let current = this.root
    while (current) {
      if (value === current.value) {
        return true
      } else if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  preOrder() {
    if (this.root === null) {
      return null
    } else {
      let result = []
      function traversePreOrder(node) {
        result.push(node.value)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(this.root)
      return result
    }
  }

  inOrder() {
    if (this.root === null) {
      return null
    } else {
      let result = []
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left)
        result.push(node.value)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  postOrder() {
    if (this.root === null) {
      return null
    } else {
      let result = []
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        result.push(node.value)
      }
      traversePostOrder(this.root)
      return result
    }
  }

  levelOrder() {
    // preferably use the optimized queue implementation
    const result = []
    const queue = []
    queue.push(this.root)
    while (queue.length) {
      let current = queue.shift()
      result.push(current.value)
      if (current.left) {
        queue.push(current.left)
      }

      if (current.right) {
        queue.push(current.right)
      }
    }
    return result
  }

  findMin() {
    if (this.root === null) {
      return null
    } else {
      let current = this.root
      while (current.left) {
        current = current.left
      }
      return current.value
    }
  }

  findMax() {
    if (this.root === null) {
      return null
    } else {
      let current = this.root
      while (current.right) {
        current = current.right
      }
      return current.value
    }
  }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(15)
bst.insert(7)
console.log(bst.isEmpty())
// console.log(bst.root)

console.log(bst.preOrder()) // [ 10, 5, 3, 7, 15 ]
console.log(bst.inOrder()) // [ 3, 5, 7, 10, 15 ]
console.log(bst.postOrder()) // [ 3, 7, 5, 15, 10 ]
console.log(bst.levelOrder()) // [ 10, 5, 15, 3, 7 ]
console.log(bst.findMin())
console.log(bst.findMax())
