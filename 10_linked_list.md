# Linked List

A linked list is a linear data structure that includes a series of connected nodes

Each node consists of a data value and a pointer that points to the next node. So the order of the nodes is not given by their physical placement in memory, instead each node points to the next

The benefits of using a linked list over an array is that the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure. This is again due to the fact that items need not be stored contigiously in memory

However, a drawback is that random access of elements is not feasible and accessing an element has linear time complexity

The linked list data structure supports three main operations:

1. Insertion - to add an element at the beginning, end or at a given index in the list
2. Deletion - to remove an item given its index or value
3. Search - to find an element given its value

Here is a simple visualization of the linked list data structure

![Linked list](/images/linked_list_1.png)

- To work with a linked list we always maintain a pointer to the first node in the list. That pointer is called 'head' and is crucial to almost every operation we perform on a linked list

- However, when the list is empty and there is no first node to point at, the head pointer will point at null

As you can see, we have a series of connected nodes. Each node consists of a 'data value' and a 'pointer' to the next node

The very last node points at null, marking the end of the list

## Linked List - Node

When a node is isolated it contains a data value and the 'next' pointer pointing at null
![linked list node](/images/linked_list_2.png)

## Linked List - Prepend (Empty list)

- Step 1 - create a new node that will be added to the list. The node will have a value and a pointer pointing to null
  ![linked list prepend](/images/linked_list_3.png)

- Step 2 - if the list is empty we have to make the head point to the new node. Remember the head pointer should always point at the first node in the list. By pointing the head at the newly created node we have effectively prepended our node to an empty list
  ![linked list prepend](/images/linked_list_4.png)

- Step 3 - If the list is not empty:

  - To add a new node at the start, make the newly created node point at the head node and make the newly added node as the head of the list. This will ensure connectivity between the newly added node and the existing list while also ensuring head continues to point at the first node in the list
    ![linked list prepend](/images/linked_list_5.png)

- Note=> The Time Complexity of the prepending in a linked list is 'constant'

  Big-O = O(1)

## Linked List - Print

If the list is not empty we have to traverse through the list from the first node till the last node while printing the value of each node

- we are going to begin by creating a temporary pointer called 'current' to traverse the list. 'current' will point at the head node since head is the first node in the list

- we will then use the 'next' pointer in each node to traverse the list. so `current = currentNode.next`. This will give us access to the second node whose value can be printed

- Similarly, current once again `current = currentNode.next`, which will give us access to the third node. And this will continue for all elements in the list

- If current points at null, it implies we have covered all the nodes in the list

![linked list print](/images/linked_list_6.png)

## Linked List - Append

- Step 1 - we have to create a new node that will be added to the list. The node will contain a value and a 'next' pointer pointing at 'null'

![linked list append](/images/linked_list_7.png)

- Step 2 - if the list is empty we have to make the head point at the newly created node. Remember the head pointer should always point at the first node in the list

![linked list append](/images/linked_list_8.png)

- Step 3 - If the list is not empty:

  - to add a new node at the end, make the last node in the list to point to the new node. This will ensure connectivity between the existing list and the new node. But how do we get hold of the last node?

  - we will create a temporary pointer called 'prev' and it will point first at the head since it is the first node on our list. We then advance it till we reach the condition where `prev.next !== null` That will ensure the 'prev' pointer lands at the very last node in the list
    ![linked list append](/images/linked_list_9.png)

  - once you end up at the last node, we make 'prev.next' point at the new node. This will effectively append the new node to the existing list
    ![linked list append](/images/linked_list_10.png)

- Note=> The Time Complexity of the prepending in a linked list is 'linear'

  Big-O = O(n)

## Linked List - Insert

We will be inserting a new node at a given index in the list. In this case the method will accept the 'node value' as well as the 'index' at which the node needs to be inserted. The index will lie in the range of '0' to 'size' of the linked list, both inclusive. This will be done across three scenarios:

1. The Index is less than 0 or greater than the size if the list (invalid index) - we simply return from the function
   ![linked list insert](/images/linked_list_11.png)

2. The index is equal to 0 (i.e inserting the new node as the first node in the list) - inserting a new node at the beginning is the same as prepending
   ![linked list insert](/images/linked_list_12.png)

3. The index is valid and greater than 0 (in the middle of the list):
   - lets assume we have three nodes in the list
   - we are going to treat the positions similar to arrays, so the nodes are positioned at `0, 1, 2`
     ![linked list insert](/images/linked_list_13.png)
   - lets say we need to insert a new node at index 2 (i.e in between the nodes at position 1 and 2)
   - The only rule we have to fulfill after insertion is that the node must point to the next node in the right order
   - what we have to do is make the new node point to the node that `node 1` is pointing at and change the next pointer from `node 1` to the new node
   - whenever we want to do something that is not at the head of the list, it generally involves a pointer that moves across the list
   - to insert an element at a given index we need to get a hold of the node previous to that given index. For that purpose we are going to use a temporary pointer called previous
     ![linked list insert](/images/linked_list_14.png)
   - we sill start off with previous pointing at the head node. We will then start advancing the `prev` pointer till we reach the index 1
     ![linked list insert](/images/linked_list_15.png)
   - at this point we will point the new node's `next` pointer to the previous node's `next` pointer. So the new node will now point at index 2
     ![linked list insert](/images/linked_list_16.png)
   - we then connect the previous node's `next` to the new node
     ![linked list insert](/images/linked_list_17.png)
   - the new node gets inserted at index 2, the head continues to point at first node and we have our new linked list
     ![linked list insert](/images/linked_list_18.png)

## Linked List - Remove

Similar to insertion at an index we will be removing a given node at an index across 3 scenarios:

1. Index is less than 0 or greater than the size of the list (invalid index) - we return null as no element can be removed

2. Index is equal to 0 (i.e removing the first node in the list) - removing the head node involves pointing head at the second node in the list. Head will point to its own next pointer. The first node is detached and garbage collected
   ![linked list remove](/images/linked_list_19.png)

   - If the list has only one element, head will still point at its `next` which is `null`. Head pointing at null indicates an empty list
     ![linked list remove](/images/linked_list_20.png)

3. The index is valid and greater than 0 (in the middle of the list):

- let's assume we have 4 nodes in the list. We are going to treat the nodes as arrays, so nodes are positioned `0, 1, 2, 3`. Let's say we need to remove the node at index 2 (i.e between the nodes at index 1 and 3)
- what we have to do is to make the node at position `1` point directly at position `3`. That will effectively detach node 2 from the list
- to delete a node at index 2 we need a reference to the node at index 1. For that purpose we will need a pointer called `prev`
- we will start off with `prev` starting at the head node. We will then advance the `prev` pointer till we reach the node before the index we want to remove from
- so a new pointer called `remove` node will be equal to `prev.next`
  ![linked list remove](/images/linked_list_21.png)

- we then break the link from the node at position 1 to the node at position 2, and instead link node at position 1 to node at position 3
  ![linked list remove](/images/linked_list_22.png)

## Linked List - Remove Value

We will be removing a node from the list, given its value. The method will remove the first node that contains the value. It will return the value if the node was removed or null if the node was not found. We will do this across 3 scenarios:

1. The list is empty - return null, as there is no node to remove

2. The passed in value is equal to the value of the first node in the list - this involves pointing head at the second node in the list
   ![linked list remove](/images/linked_list_23.png)

If the list has only one node, head will still point at its own next pointer, which is null. And we will have an empty list
![linked list remove](/images/linked_list_24.png)

3. Value is present in a node that is not the head:

- let's say we have a linked list of 4 nodes with values `10, 20, 25, 30`. Let's say we need to remove a node with value 25. What we have to do is to make node with value `20` point to node with value `30`
- to delete a node that contains the given value we need to get a hold of the node previous to that node. For example, to delete a node with vaue `25` we need a reference to node `20`
- for that purpose we will use a temporary pointer called `prev`. We will start off with `prev` pointing to the head node. We will then advance the `prev` pointer till we reach the node that is previous to the node that contains `25`
  ![linked list remove](/images/linked_list_25.png)

- we then change `prev.next` to `removedNode.next`. This wil provide the continuity required
  ![linked list remove](/images/linked_list_26.png)

- suppose the value passed in is `60` and is not in the list and our `prev` pointer would have advanced to the last node in the list. At that point we check if there is a `next` node. If there is no `next` node it means we have reached the end of the list without finding the node that contains the passed in value. In that case we return `null`

### Time Complexity of 'Remove' operation

- Removing the head node is always `constant` time complexity `(O(1))`
- Removing a node that is not the head node has a `linear` time complexity `(O(n))`

## Linked List - Search

We will find a node, given its value

1. If the list is empty - return `-1` as no node can be found

2. If the list is not empty - we will create a variable called `count` which will serve as the index as in arrays. Then we will use a temporary pointer called `current` to traverse the list till we find the node pointing to the node with the value

3. If we do not find the node, meaning `current = null`, we will return `-1`
   ![linked list remove](/images/linked_list_27.png)

## Linked List - Reverse

Let's assume we have a list of three nodes `1, 2, 3`. `1` is the head node and points at `2`. `3` is the last node and points at `null`

The reversed list contains `3` as the head node pointing to `2`, while `1` is the last node pointing to `null`

![linked list reverse](/images/linked_list_28.png)

To achieve this we will do the following:

1. Create `two` temporary pointers - `prev` which does not point at any node, technically points at `null` and `current` which points at head

![linked list reverse](/images/linked_list_29.png)

2. For every node in the list we execute `four` steps

- Step 1 - we create a new temporary pointer called `next` and point it to `current.next`
  ![linked list reverse](/images/linked_list_30.png)

- Step 2 - we then set `current.next` to `prev`
  ![linked list reverse](/images/linked_list_31.png)

- Step 3 - we then update `prev` to `current`, and `current` to `next`. So `prev` now points at `1` and `current` now points at `2`. We repeat the same operation for the second and third nodes
  ![linked list reverse](/images/linked_list_32.png)
  ![linked list reverse](/images/linked_list_33.png)
  ![linked list reverse](/images/linked_list_34.png)

- Step 4 - we then assign the `prev` node as the `head` node
  ![linked list reverse](/images/linked_list_35.png)

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
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return
    }
    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
    } else {
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      let removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null
    }
    if (this.head.value === value) {
      this.head = this.head.next
      this.size--
    } else {
      let prev = this.head
      while (prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if (prev.next) {
        let removedNode = prev.next
        prev.next = removedNode.next
        this.size--
      }
      return null
    }
  }

  search(value) {
    let count = 0
    if (this.isEmpty()) {
      return -1
    } else {
      let current = this.head
      while (current) {
        if (current.value === value) {
          return count
        }
        current = current.next
        count++
      }
      return -1
    }
  }

  reverse() {
    let prev = null
    let current = this.head
    while (current) {
      let next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty")
    } else {
      let current = this.head
      let listValues = ""
      while (current) {
        listValues += `${current.value} `
        current = current.next
      }
      console.log(listValues)
    }
  }
}

```

## Linked List Usage

- Well the linked list data structure can be used to implement stacks and queues. So all applications of both stacks and queues are applications of linked lists

- A real world example is the Image Viewer. You can look at folders continuously is a slide show
