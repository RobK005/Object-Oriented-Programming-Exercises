//przyjmuje się nazwy z dużych liter dla funkcji konstruujących
var Game = (function() {
    function Game(gameContainer) {
        this.gameContainer = gameContainer
        this.deckOfCards = [{
            id: 0,
            front: 'A',
            complete: false,
            visible: false
        }, {
            id: 1,
            front: 'A',
            complete: false,
            visible: false
        }, {
            id: 2,
            front: 'B',
            complete: false,
            visible: false
        }, {
            id: 3,
            front: 'B',
            complete: false,
            visible: false
        }, {
            id: 4,
            front: 'C',
            complete: false,
            visible: false
        }, {
            id: 5,
            front: 'C',
            complete: false,
            visible: false
        }]

    }

    Game.prototype.render = function() {
        this.gameContainer.innerHtml = '' //czyścimy wnętrze kontenera

        this.deckOfCards.forEach(function(card) {
            //console.log(card)
            var cardElement = document.createElement('div'); //tworzy div w dokumencie i przypisuje do zmiennej

            cardElement.innerHTML = card.front //przepisuje wartosc z front do HTML

            cardElement.classList.add('card') //dodanie klasy card do naszego div

            this.gameContainer.appendChild(cardElement) // dodanie cardElement do naszego kontenera

            cardElement.addEventListener('click', function(){
                //console.log(this)
                console.log(card) //wyswietla daną karte w consoli
            // })
            }.bind(this))

        }, this) //parametr dla forEach() wskazujący miejsce Game (bez tego odwoluje sie do Window)
    }

    Game.prototype.init = function() {
        this.render()
    }

    return Game
})()

var newGame = new Game(document.querySelector('#game-container'))

newGame.init()

console.log(newGame)