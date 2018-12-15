var cat = {
    sound: 'Miauu!',
    makeSound: function() {
        // console.log(this.sound)
        return this.sound
    }
}

console.log(cat)
console.log(cat.makeSound())

console.log('//------------------------')

var cat2 = Object.create(cat)

console.log(cat2)
console.log(cat2.makeSound())

console.log('//------------------------')

cat2.sound = 'Hauu!'
console.log(cat2)
console.log(cat2.makeSound())