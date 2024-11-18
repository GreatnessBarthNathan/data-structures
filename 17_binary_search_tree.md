# Binary Tree

A binary tree is a tree data structure in which each node has at most two children. They are referred to as `left child` and `right child`

![binary tree](/images/bst_1.png)

# Binary Search Tree (BST)

A binary search tree is a binary tree that has the following two properties:

- The value of each left node must be smaller than the parent node
- The value of each right node must be greater than the parent node

![binary tree](/images/bst_2.png)

## BST Operations

Binary search tree supports the following operations:

- `Insertion` - to add a node to the tree
- `Search` - to find a node, given its value
- `DFS & BFS` - to visit all nodes in the tree
- `Deletion` - to remove a node, given its value

## BST Class

If we isolate a single node, it contains a data value, and the `left and right pointers` pointing at `null`

To work with a BST, we maintain a pointer to the root node. That pointer is crucial to almost every operation we perform on a binary search tree. Is the tree is empty there is no root node to point at, and hence the `root poiner` will point at `null`

![binary tree](/images/bst_3.png)

```
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  isEmpty(){
    return this.root === null
  }
}
```

## Insert

When it comes to a tree data structure, recursion is really important, as it simplifies the code to a great extent.

- `Step 1` - create a new node that will be added to the tree. The node will contain a value and two pointers pointing at null
- `Step 2` - check if a tree is empty. If it is empty, the newly created node will become the root of the tree
- `Step 3` - if the tree is not empty, we have to make sure that we do not violate the properties of a binary search tree (each node should contain at most two child nodes. The left child should contain a value lesser than the parent node value while the right child should contain a value greater than the parent node value)
  - Let's say we have and existing tree with root node of `10` and two children of `5` as left child and `15` as right child, and we want `3`
  - we check if `3` is less than `10`. If it is, we focus on the left side of the tree. We check if left child of `10` is present. If it is we compare `3` with that left child. `3` is less than `5`, so we focus on the left of `5`. If it is null we simply make `3` the left child of `5`

![binary tree](/images/bst_4.png)

- Let's say we also want to add `7` to the existing tree
- we check if `7` is less than `10`. If it is, we focus on the left side of the tree. We check if left child of `10` is present. If it is we compare `7` with that `5`. `7` is greater than `5`, so we focus on the right of `5`. If it is null we simply make `7` the right child of `5`

![binary tree](/images/bst_5.png)

## Search

- Let's consider a tree with five nodes. And the value to search is `10`. We start by checking if the value is equal to the `root node value`. It is and we return `true`

![binary tree](/images/bst_6.png)

- Let's say the value to search is `3`. We check if `3` is equal to the `root node value` - it is not. We check if `3` is less than the `root node value` - it is. We now focus on the left sub tree. So we check if `3` is equal to `5` - it is not. We check if `3` is less than `5` - it is. We then move to the left of `5`. We check if `3` is equal to the left sub node which is `3` - it is. We then return `true`

![binary tree](/images/bst_7.png)

## Tree Traversal

Traversing a tree means visiting every node in the tree

Linear data structures like `arrays, stacks, queues and linked lists` have only one way to read the data

But a hierarchical data structure like a tree can be traversed in different ways

Generally there are `two` widely used ways for traversing trees:

1. Depth First Search (DFS)
2. Breadth First Search (BFS)

## Depth First Search

The DFS algorithm starts at the `root node` and explores as far as possible along each branch before backtracking

So we need to visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right subtree

Depending on the order in which we do this, there can be `three` types of DFS traversals:

- `Preorder`
- `Inorder`
- `Postorder`

### Preorder Traversal

The algorithm of the `preorder` algorithm is as follows:

1. Read the data of the node
2. Visit the left subtree
3. Visit the right subtree

Example:

- Let's say we have a BST with `five` nodes

![binary tree](/images/bst_8.png)

- we start from the `root node` - i.e read the data of the node. We get `10`
- visit the left subtree. we read the data of the left child. We get `5`
- visit the left subtree of `5`. we read the data of the left child. We get `3`. There is no futher left subtree
- visit the right subtree of `5` and read its data. We get `7`. So subtree with 5 as the root node is completely traversed
- go one up and visit the right subtree of `10` and read its data. We get `15`. All the nodes have been visited and `10 5 3 7 15` is the preorder traversal of our binary tree

![binary tree](/images/bst_9.png)

### Inorder Traversal

The algorithm for Inorder Traversal is as follows:

1. Visit the left subtree
2. Read the data of the node
3. Visit the right subtree

Example:

Assuming we are using the tree in the previous example

- we start from the root node, and visit the left subtree. That brings us to node `5`
- visit the left subtree once again. That brings us to node `3`. This node does not have a left subtree. So read the data. Since it has no right subtree either, so go back to the parent `5` and read the data
- visit the right subtree of `5`. That brings us to node `7`. It has no left subtree, so read its data. It does not have any right subtree either, so go back to the parent `5`. Left subtree of the root node has been visited
- read the root node's value `10`
- visit the root node's right subtree `10`. Since there are no other subtrees to visit we read its data. At this stage all the nodes have been visited and `3 5 7 10 15` is the `inorder` traversal of the tree

![binary tree](/images/bst_10.png)

### PostOrder Traversal

Assuming we are using the tree in the previous example

1. Visit the left subtree
2. Visit the right subtree
3. Read the data of the node

![binary tree](/images/bst_11.png)

## Breadth First Search (BFS)

With the BFS algorithm we explore all nodes at the present depth prior to moving on to the nodes at the next depth level

For example, if we have a `BST` with `5` nodes, `BFS` visits the root node first, moves on to the nodes at the next level, and the level after that, and so on. As the name indicates, traverse the breadth first

![binary tree](/images/bst_12.png)

### Steps to achieve BFS

- `Step 1` - create a queue
- `Step 2` - enqueue the root node
- `Step 3` - as long as the node exists in the queue perform the following operations:
  - dequeue the node from the front
  - read the node's value
  - enqueue the node's left child if it exists
  - enqueue the node's right child if it exists

Let's assume we have a BST with 5 nodes like in the examples above.

We create an empty queue. We begin by queueing up the root node. We then dequeue the root node and read the value

![binary tree](/images/bst_13.png)

We enque the left child node, followed by the right child node. We check if the queue is empty. It is not. So we dequeue a node and read its value (`5`)

![binary tree](/images/bst_14.png)

We then enqueue the dequeued node's left and child nodes

![binary tree](/images/bst_15.png)

Repeat thesame set of steps for every node in the queue

Dequeue and read the value (`15`). There are no child nodes for `15`, so nothing to enqueue

![binary tree](/images/bst_16.png)

Dequeue and read `3`. Once again, nothing to enqueue since it has no child nodes

![binary tree](/images/bst_17.png)

Dequeue and read `7`. Nothing to enqueue since it has no child nodes

![binary tree](/images/bst_18.png)

The tree is now empty. This indicates that every node has been visited

We will call the method a `levelOrder` since we traverse the nodes one level at a time

## Min Node and Max Node

To find the `minimum value` in the tree is to find the left most leaf node in the tree

![binary tree](/images/bst_19.png)

To find the `maximum value` in the tree is to find the right most leaf node in the tree

![binary tree](/images/bst_20.png)

## BST Usage

- Searching
- Sorting
- To implement abstract data types such as lookup tables, and priority queues
