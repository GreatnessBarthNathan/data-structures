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

## Linked List - Print

If the list is not empty we have to traverse through the list from the first node till the last node while printing the value of each node

- we are going to begin by creating a temporary pointer called 'current' to traverse the list. 'current' will point at the head node since head is the first node in the list

- we will then use the 'next' pointer in each node to traverse the list. so `current = currentNode.next`. This will give us access to the second node whose value can be printed

- Similarly, current once again `current = currentNode.next`, which will give us access to the third node. And this will continue for all elements in the list

- If current points at null, it implies we have covered all the nodes in the list

![linked list prepend](/images/linked_list_6.png)

## Linked List - Append

## Linked List Usage

- Well the linked list data structure can be used to implement stacks and queues. So all applications of both stacks and queues are applications of linked lists

- A real world example is the Image Viewer. You can look at folders continuously is a slide show
