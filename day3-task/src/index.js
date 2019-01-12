// var accordion = document.querySelectorAll('.accordion')
// // console.warn(accordion);

// for (var i = 0; i<accordion.length; i++) {
//     //console.log(accordion[i])

//     accordion[i].addEventListener('click', function(e) {

//         for (var j = 0; j<accordion.length; j++) {
//             if (e.currentTarget != accordion[j]) {
//             accordion[j].classList.remove('is-open')
//             }
//         }

//         this.classList.toggle('is-open') //przelacznik -dodaj i usuwa nazwe klasy w HTML
//     })
// }

// //---
// // accordion.addEventListener('click', function() {
// //     accordion.classList.toggle('is-open') //przelacznik -dodaj i usuwa nazwe klasy w HTML
// // })

//-----
// ES5 - factory functions

// var accordionFactory = function (accordionGroup) {
//     // console.log(accordionGroup)
//     // console.log(accordionGroup.querySelectorAll('.accordion'))

//     var accordionGroupElements = accordionGroup.querySelectorAll('.accordion')

//     var init = function () {
//         attachEvents()

//     }

//     var toggle = function (currentAccordion) {
//         for (var i = 0; i < accordionGroupElements.length; i++) {
//             if (currentAccordion != accordionGroupElements[i]) {
//                 accordionGroupElements[i].classList.remove('is-open')
//             }
//         }

//         currentAccordion.classList.toggle('is-open')
//     }

//     var attachEvents = function () {
//         for (var i = 0; i < accordionGroupElements.length; i++) {
//             accordionGroupElements[i].addEventListener('click', function (e) {
//                 //console.log('acc click', this)

//                 // toggle(this)
//                 toggle(e.currentTarget)
//             })
//         }
//     }

//     return {
//         init: init

//     }
// }

// var accGroup1 = accordionFactory(document.querySelectorAll('.accordion-group')[0])
// accGroup1.init()

// var accGroup1 = accordionFactory(document.querySelectorAll('.accordion-group')[1])
// accGroup1.init()

//-----
//powyzszy zapis przerobiony na ES6 - class


class AccordionGroup {
    constructor(accordionGroup) {
        this.accordionGroupElements = accordionGroup.querySelectorAll('.accordion')
    }

    init() {
        this.attachEvents()
    }

    toggle(currentAccordion) {
        for (var i = 0; i < this.accordionGroupElements.length; i++) {
            if (currentAccordion != this.accordionGroupElements[i]) {
                this.accordionGroupElements[i].classList.remove('is-open')
            }
        }

        currentAccordion.classList.toggle('is-open')
    }

    attachEvents() {
        for (var i = 0; i < this.accordionGroupElements.length; i++) {
            this.accordionGroupElements[i].addEventListener('click', function (e) {
                //console.log('acc click', this)

                this.toggle(e.currentTarget)
            }.bind(this))
        }
    }
}

var accGroup1 = new AccordionGroup(document.querySelectorAll('.accordion-group')[0])
accGroup1.init()

var accGroup1 = new AccordionGroup(document.querySelectorAll('.accordion-group')[1])
accGroup1.init()