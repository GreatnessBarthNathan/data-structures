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
