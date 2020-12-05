//ex03-3//
const array = [1, 2, 3]

// ここに回答のプログラムを書く

// console.log(array) //=> [2, 3]
array.splice(0, 1)
console.log(array)

// console.log(array) //=> [2, 3, 5]
array.push(5)
console.log(array)

// console.log(array) //=> [2]
array.splice(1, 2)
console.log(array)

// console.log(array) //=> [100]
array.splice(0, 1)
array.push(100)
console.log(array)