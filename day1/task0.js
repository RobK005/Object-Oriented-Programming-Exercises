this.name = "Ala"

function hello() {
    console.log(this.name + " mówi cześć!");
}

var person = {name: "Zenek", say: hello}

hello() // Ala mówi cześć!
person.say() // Zenek mówi cześć!

console.log('//---------------------------------------')

function returnX () {
    return this.x;
    }

var obj = { x: 42 }
var newReturnX = returnX;

console.log(newReturnX())

var boundReturnX = newReturnX.bind(obj)
console.log(boundReturnX())

console.log('//---------------------------------------')
