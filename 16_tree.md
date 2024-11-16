# Tree

A tree is a hierarchical data structure that consists of nodes connected by edges. Typically each node stores a data value

A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures

In linear data structures, the time required to search is proportional to the size of the data set. Meaning the more the data, the more the time needed to search

Trees however, owing to the non-linear nature, allow quicker and easier access to the data

It is also important to note that a tree will not contain any loops or cycles

## Tree Visualization

In a tree we have the `nodes` represented as circles, and `edges` represented as lines

![trees](/images/trees_1.png)

## Tree Usage

Trees find usage in a number of scenarios where heirarchical representation is necessary:

- File systems for directory structure
- A family tree
- An organisation tree
- DOM
- Chat bots
- Abstract syntax trees

## Tree Terminology

Apart from `nodes` and `edges`, there are quite a few terms and properties of a tree you should be aware of:

- `Parent Node` - a node that is an immediate predecessor of any node is called a `parent node`

- `Child Node` - a node that is an immediate successor of a node is called a `child node`

![trees](/images/trees_2.png)

- `Root Node` - the node from which the tree originates is called a `root node`. It does not have a parent node

![trees](/images/trees_3.png)

- `Leaf Node` - a node that do not have any child nodes is called `leaf node`

- `Siblings` - nodes with the same parent and `siblings`

- `Ancestor` - a parent of another parent node is an `ancestor`

- `Path` - this refers of the sequence of nodes and edges from one node to another

- `Distance` - this refers to the number of edges along the shortest path between two nodes

![trees](/images/trees_4.png)

- `Degree of a node` - this refers to the total number of `child nodes` it has

- `Degree of a tree` - this refers to the maximum degree of a node in the tree, which is the degree of the root node

- `Depth of a node` - this refers to the number of edges from the root to that node. The depth of the root node is always `0`

- `Height of a node` - this refers to the number of edges from the deepest leaf to that node

- `Height of a tree` - this refers to the number of edges from the deepest leaf to the `root node`

![trees](/images/trees_5.png)
