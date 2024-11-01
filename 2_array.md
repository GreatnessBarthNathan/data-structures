# Array

- An array is a data structure that can hold a collection of values

- Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array

- Arrays are resizable. You don't have to declare the size of an array before creating it

- JavaScript arrays are zero-indexed and the insertion order is maintained

- Arrays are iterables. They can be used with a for of loop

- To create an array we can use square brackets

```
const arr = [1, 2, 3]
```

you can also add a string, as arrays can contain a mix of data types

```
const arr = [1, 2, 3, 'elephant']
```

- To access an element we use the index which starts at 0

```
console.log(arr[0]) --> 1
console.log(arr[2]) --> 3
```

## Array Methods

- To add an element to the end of an array you can use the 'push' method

```
arr.push(4)

console.log(arr) --> [1, 2, 3, 'elephant', 4]
```

- To iterate over the elements of the array you can use the 'for of loop'

```
for(const item of arr){
console.log(item)
}
```

- To add an element at the beginning of the array you can use the 'unshift' method

```
arr.unshift(0)

console.log(arr) --> [0, 1, 2, 3, 'elephant', 4]
```

- To remove an item at the end of the array use the 'pop' method

```
arr.pop()

console.log(arr) --> [0, 1, 2, 3, 'elephant']
```

- To remove an item at the beginning of the array use the 'shift' method

```
arr.shift()

console.log(arr) --> [1, 2, 3, 'elephant']
```

- We also have other methods like 'map', 'filter', 'reduce', 'concat', 'slice', and 'splice'

## Array - Big-O Time Complexity

- Insert / remove at end - O(1)
- Insert / remove at beginning - O(n)
- Access - O(1)
- Search - O(n)
- push / pop - O(1)
- shift / unshift / concat / slice / splice - O(n)
- forEach / map / filter / reduce - O(n)
