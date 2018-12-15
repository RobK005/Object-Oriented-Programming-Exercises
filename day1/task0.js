function hello() {
    //console.log('hello world')
    console.log(this)
}

this.hello()

var person = {
    name: 'Zenek',
    say: hello,
}

console.log(person.say()) //?????

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
