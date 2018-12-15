var cat = { //tworzenie zwykłe, object literal
    name: 'Fluffy',
    age: 1,
    sound: 'Meeeeow!',
    makeSound: function() {
        console.log(this.sound);
    },

    speak: function() {
        console.log('Sorry cats can’t speak');
    }
};

function catFactoryBasic(name) { //funkcja tworząca objekt, faktory function
    return {
        name: name,
        sound: 'Meeeeow!',
        speak: function(){
            console.log('Sorry cats can’t speak')
        }
    }
}

function catFactory(name, sound) { //funkcja tworząca objekt, faktory function
    return {
        name: name,
        sound: sound,
        speak: function(){
            console.log('Sorry cats can’t speak')
        },
        makeSound: function() {
            console.log(this.sound)
        }
    }
}

var cat1 = catFactory('puszek', 'miauuu')
var cat2 = catFactory('bonifacy', 'hauuu')

console.log(cat1)
console.log(cat2)