# Set

- A set is a data structure that can hold a collection of values. The values however must be unique

- Sets can contain a mix of different data types. You can store strings, booleans, number or even objects all in the same set

- Sets are dynamically sized. You don't have to declare the size of a set before creating it

- Sets do not maintain an insertion order. An item inserted first does not necessarily mean it is the first element in the set

- Sets are iterables. They can be used with a for of loop

- To create a new set we use the set constructor. The construction optionally accepts an array as its argument. To log the values we can use a for of loop to iterate over the set

```
const set = new Set([1, 2, 3])

for (const item of set) {
    console.log(item)
}
```

- To add a new value we can use the 'add' method

```
set.add(4)

console.log(set) --> {1, 2, 3, 4}
```

- If we try to add a duplicate value the set will ignore that value

```
set.add(4)
set.add(4)

console.log(set) --> {1, 2, 3, 4}
```

- If you want to check if a value exists in a set use the 'has' method

```
console.log(set.has(4)) --> true
```

- To delete a value from a set you can make use of the 'delete' method

```
set.delete(3)

console.log(set) --> {1, 2, 4}
```

- To check the number of items in a set use the 'size' property

```
console.log(set.size)
```

- To delete all values in the set you can make use of the 'clear' method

```
set.clear()

console.log(set) --> {}
```

## Set vs Array

- Arrays can contain duplicate values whereas Sets cannot

- Insertion order is maintained in arrays but it is not the case with sets

- Searching and deleting an element in the set is faster compared to arrays
