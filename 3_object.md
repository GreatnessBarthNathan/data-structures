# Object

- An object is an unordered collection of key-value pairs. The key must eiher be a string or symbol data type where as the value can be of any data type

- To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation

- An object is not an iterable. You cannot use it with a for loop

- The simplest way to create an object is to use a pair of curly braces

```
const obj = {
    name: 'Bruce',
    age: 25
}
```

- To access an element we can use the dot notation or the bracket notation

```
console.log(obj.name) --> 'Bruce'
console.log(obj['age']) --> 25
```

- The bracket notation is primarily used when the object key has spaces or hyphen

```
const obj = {
    name: 'Bruce',
    age: 25,
    'key-three': true
}

console.log(obj['key-three']) --> true
```

- The dot or bracket notation can also be used to add key-value pairs to an object

```
obj.hobby = 'football'

console.log(obj) -->
{
    name: 'Bruce',
    age: 25,
    'key-three': true,
    hobby: 'football'
}
```

- You can delete a key-value pair with the help of the 'delete' operation

```
delete obj.hobby

console.log(obj) -->
{
    name: 'Bruce',
    age: 25,
    'key-three': true,
}
```

- It is possible to add functions as values

```
const obj =   {
    name: 'Bruce',
    age: 25,
    'key-three': true,
    sayMyName : function(){
        console.log(this.name)
    }
}

obj.sayMyName() --> 'Bruce'
```

## Object Methods

- Object.keys() which returns an array of all the keys has a "Linear" time complexity

- Object.values() which returns an array of all the objects has a "Linear" time complexity

- The Object.entries() which returns an array of a given object's own enumerable string-keyed property key-value pairs has a "Linear" time complexity

## Object - Big-O Time Complexity

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search - O(n)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)
