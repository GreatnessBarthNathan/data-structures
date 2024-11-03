# Map

- A map is an ordered collection of key-value pairs. Both keys and values can be of any data type

- To retrieve a value, you can use the corresponding key

- Maps are iterables. They can be used with a for of loop

A lot of these characteristics are similar to objects

- To create a new map we use the Map constructor. The constructor optionally accepts an array as its argument. The array should contain array of length 2 as elements

```
const map = new Map(['a', 1], ['b', 2])

console.log(map) --> { 'a' => 1, 'b' => 2 }
```

to iterate over the map, using for of loop:

```
for (const [key, value] of map) {
  console.log(`${key}: ${value}`)
}

 a: 1
 b: 2
```

here, a and b are the keys, while 1 and 2 are the values

- To add a new value we can use the 'set' method

```
map.set('c', 3)

console.log(map) --> { 'a' => 1, 'b' => 2, 'c' => 3 }
```

- If you want to check if a key exists in the map you can use the 'has' method

```
console.log(map.has('a')) --> true
```

- If you want to delete a key-value pair in the map you can make use of the 'delete' method

```
map.delete('c')

console.log(map) --> { 'a' => 1, 'b' => 2}
```

- If you want to check the number of key-value pairs in the map you can use the 'size' property

```
console.log(map.size)
```

- To delete all the key-value pairs in a map you can use the 'clear' method

```
map.clear()

console.log(map) --> {}
```

## Object vs Map

- Objects are unordered whereas maps are ordered

- Keys in objects can only be string or symbol type whereas in maps, they can be of any type

- An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careul. A map on the other hand does not contain any keys by default

- Objects are not iterables where as maps are iterables

- The number of items in an object must be determined manually where as it is readily available with the size property in a map

- Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data
