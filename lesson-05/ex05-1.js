const items = [
    {n: 100},//[0]
    {a: {b:['abc','cde']}, c:{100:'foobar'}}, //[1]
]
console.log(items[0].n);
console.log(items[1].a.b[0]);
console.log(items[1].c['100']);