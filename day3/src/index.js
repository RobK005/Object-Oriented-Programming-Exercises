//console.warn('hello world');

//-----
//--class ES6

class Animal {
    constructor(sound, food) {
        this.sound = sound
        this.food = food
    }

    makeSound() {
        console.log(this.sound)
    }
}

var cow1 = new Animal('Mooooooooooooo!', 'grass')

class Dog extends Animal {
    constructor() {
        super('Mooooooooooooo!', 'grass')
        this.name = 'Reksio'
    }

    sayName() {
        console.log(this.name)
    }
}

var dog1 = new Dog()

//--constructor ES5

// function AnimalCon() {
//     this.sound = 'Mooo!'
//     // this.makeSound = function() {
//     //     console.log(this.sound)
//     // }
// }

// AnimalCon.prototype.makeSound = function() {
//     console.log(this.sound)
// }

// var animal1 = new AnimalCon()

//-----