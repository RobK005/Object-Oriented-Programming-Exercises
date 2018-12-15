var obj1 = { a: 1, b: 2, c: 3 }

var obj2 = Object.assign({c: 4, d: 5}, obj1)
//kolejnosc jest ważna!
var obj3 = Object.assign(obj1, {c: 4, d: 5})

var c = {
    test: 'garfield'
}

var obj4 = Object.assign(obj3, {c: c} )

console.log(obj2) // {c: 3, d: 5, a: 1, b: 2}
console.log(obj3) // {a: 1, b: 2, c: 4, d: 5}
console.log(obj4) // {a: 1, b: 2, c: {…}, d: 5}
console.log(obj4.c.test) // garfield