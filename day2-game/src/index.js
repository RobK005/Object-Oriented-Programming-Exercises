//przyjmuje się nazwy z dużych liter dla funkcji konstruujących
var Game = (function() {
    function Game(gameContainer) {
        this.gameContainer = gameContainer;
        this.deckOfCards = [{
            id: 0,
            front: 'A',
            complete: false,
            visible: false,
        }, {
            id: 1,
            front: 'A',
            complete: false,
            visible: false,
        },
        {
            id: 2,
            front: 'B',
            complete: false,
            visible: false,
        },
        {
            id: 3,
            front: 'B',
            complete: false,
            visible: false,
        },
        {
            id: 4,
            front: 'C',
            complete: false,
            visible: false,
        },
        {
            id: 5,
            front: 'C',
            complete: false,
            visible: false,
        }
    ];
    }

    Game.prototype.init = function() {
        this.render();
    }

    Game.prototype.render = function() {
        this.gameContainer.innerHTML = ''; //czyścimy wnętrze kontenera

        this.deckOfCards.forEach(function(card) {
            //console.log(card)
            var cardElement = document.createElement('div'); //tworzy div w dokumencie i przypisuje do zmiennej

            cardElement.innerHTML = card.front; //przepisuje wartosc z front do HTML

            cardElement.classList.add('card'); //dodanie klasy card do naszego div

            if (!card.visible && !card.complete) {
                cardElement.classList.add('is-invisible');
            }

            if(card.complete) {
                cardElement.classList.add('is-complete');
            }

            this.gameContainer.appendChild(cardElement); //dodanie cardElement do naszego kontenera

            cardElement.addEventListener('click', function() {
                //console.log(this)
                //console.log(card) //wyswietla daną karte w consoli
                this.flipCard(card);
                this.checkGameState();
            }.bind(this))

        }, this); //parametr dla forEach() wskazujący miejsce Game (bez tego odwoluje sie do Window)
    }

    Game.prototype.flipCard = function(card) {
        this.deckOfCards = this.deckOfCards.map(function(element) {
            if (element.id === card.id) {
                return Object.assign({}, card, {visible: true})
            } else {
                return element;
            }

            // return element.id === card.id ? Object.assign({}, card, {visible: true}) : element;
        });

        this.render();
    };

    Game.prototype.checkGameState = function() {
        var visibleCards = this.deckOfCards.filter(function(card) {
            return card.complete === false && card.visible === true;
        });

        if (visibleCards.length === 2) {
            if (this.isEqual(visibleCards)) {
                this.completeVisible();
            } else {
                this.hideVisible();
            }
        }

        if (this.isGameComplete()) {
            setTimeout(function() {
                alert('win');
            }, 1000);
        }
    };

    Game.prototype.isEqual = function(visibleCards) {
        return visibleCards.reduce(function(firstCard, secondCard) {
            return firstCard.front === secondCard.front;
        })
    }

    Game.prototype.completeVisible = function() {
        this.deckOfCards = this.deckOfCards.map(function(card) {
            // if (card.visible) {
            //     return  Object.assign({}, card, {complete: true});
            // } else {
            //     return card;
            // }
            //to samo jest ponizej ale w krotszej formie
            return card.visible ? Object.assign({}, card, {complete: true}) : card;
        })

        this.render();
    }

    Game.prototype.hideVisible = function() {
        this.deckOfCards = this.deckOfCards.map(function(card) {
            return card.visible ? Object.assign({}, card, {visible: false}) : card;
        })

        setTimeout(function() {
            this.render();
        }.bind(this), 1000)
    }

    Game.prototype.isGameComplete = function() {
        var uncompletedCard = this.deckOfCards.filter(function(card) {
            return card.complete === false;
        });

        return uncompletedCard.length === 0;
    }


    return Game;
})();

var newGame = new Game(document.querySelector('#game-container'));

newGame.init();

// console.log(newGame);