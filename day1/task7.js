// function cat(name, age) {
//     this.name = name,
//     this.age = age,
//     this.sound = 'Miauu'
// }

// cat.prototype.makeSound = function() {
//     console.log(this.sound)
// }

// cat.prototype.speak = function() {
//     console.log('Sorry, cats can`t speak')
// }

//-------

var cat = (function() { //taki zapis od razu wywołuje funkcję
    function cat (name, age) {
        this.name = name,
        this.age = age,
        this.sound = 'Miauu'
    }

    cat.prototype.makeSound = function() {
        console.log(this.sound)
    }

    cat.prototype.speak = function() {
        console.log('Sorry, cats can`t speak')
    }

    return cat
})();

var puszek = new cat('puszek', 10)
var bonifacy = new cat('bonifacy', 47)

console.log(puszek)
console.log(bonifacy)