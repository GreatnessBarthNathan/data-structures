const obj = {
  name: "Bruce",
  age: 25,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name)
  },
}
console.log(Object.entries(obj))
