# Graph

A graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges

You could say `trees` are a specific type of graph data structure

The graph has a pair of vertices represented as `circles` and a pair of edges represented as `lines`

![graph](/images/graph_1.png)

As opposed to a tree which is read top-down, `there is no heirarchy in graphs and there is no set way to represent or read the graph`

## Types of Graph

Based on the characteristics of the edges, graphs can be categorized into two types:

1. `Directed`
2. `Undirected`

### Directed Graph

A graph in which its edges have a direction is called a directed graph. Edges are usually represented by arrows pointing in the direction the graph can be traversed

![graph](/images/graph_2.png)

In the above example, we can traverse `A -> B -> C`. We cannot traverse from `C -> B -> A`

### Undirected Graph

A graph in which its edges are bidirectional is called an undirected graph. The graph can be traversed in either direction. The absence of an arrow tells us that the graph is undirected

![graph](/images/graph_3.png)

In the above example, we can traverse `A -> B -> C` and `C -> B -> A`

## More Graph Types

- A graph with only vertices

![graph](/images/graph_4.png)

- A graph with multiple edges from one node

![graph](/images/graph_5.png)

- A graph with cycles

![graph](/images/graph_6.png)

- A graph with self loops on a node

![graph](/images/graph_7.png)

- A disconnected graph

![graph](/images/graph_8.png)

- A graph with weights on edges representing the cost of traversing that edge

![graph](/images/graph_9.png)

## Graph Representation

Graphs are commonly represented in two ways:

1. Adjacency matrix
2. Adjacency List

### Adjacency Matrix

An adjacency matrix is a `2D array size V x V` where `V` is the number of vertices in the graph

Each row and column represent a vertex

If the value of any element say, `matrix[i][j]` is `1`, it represents that there is an edge connecting vertex `i` and vertex `j`

![graph](/images/graph_10.png)

```
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
]

console.log(matrix[0][1]) // 1
console.log(matrix[1][2]) // 1
console.log(matrix[0][2]) // 0

```

### Adjacency List

In this form of representation vertices are stored in a map like data structure, and every vertex stores a list of its adjacent vertices

![graph](/images/graph_11.png)

```
const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
}

console.log(adjacencyList["A"]) // [ 'B' ]
console.log(adjacencyList["B"]) // [ 'A', 'C' ]
console.log(adjacencyList["C"]) // [ 'B' ]
```

## Adjacency Matrix Vs Adjacency List

- With an `adjacency list`, we only need to store the values for the edges that exist. With `adjacency matrix`, you store values irrespective of whether an edge exists or not. Storage wise, an adjacency list is way more efficient

- With adjacency list, inserting and finding adjacent nodes is constant time complexity, whereas with adjacency matrix, it is linear time complexity

- An adjacency list allows you to store additional values with an edge such as weight of the edge. With adjacency matrix, such information would have to be stored externally

Because of these reasons our implementation will assume the adjacency list represention of a graph

```
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1)
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    )
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
    }
  }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")

graph.display()`A -> B
                B -> A,C
                C -> B `
console.log(graph.hasEdge("A", "C")) // false
console.log(graph.hasEdge("A", "B")) // true

graph.removeEdge("A", "B")
graph.display()`A ->
                B -> C
                C -> B`
console.log(graph.hasEdge("A", "B")) // false

graph.removeVertex("B")
graph.display()`A ->
                C ->`

```

## Graph Usage

Graphs find usage in a number of real world applications:

- `Google maps`: where cities are represented as vertices, and roads as edges to help build a navigation system

- `Social media sites`: users are considered as vertices, and edges are the links between connections. Facebook, Instagra, LinkedIn, all use graph data structure to show mutual connections, post suggestions and other representations
