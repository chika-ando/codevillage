////////////////
//Array.from()//
////////////////
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set));
// [ "foo", "bar", "baz" ]

////////////
//concat()//
////////////
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, 2, 3);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// num1 の最初の要素を変更します
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]

////////////////
//copyWithin()//
////////////////
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

