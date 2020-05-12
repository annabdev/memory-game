document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'bat',
            img:'images/bat.png'
        },
        {
            name: 'bat',
            img:'images/bat.png'
        },
        {
            name: 'cat',
            img:'images/cat.png'
        },
        {
            name: 'cat',
            img:'images/cat.png'
        },
        {
            name: 'devil',
            img:'images/devil.png'
        },
        {
            name: 'devil',
            img:'images/devil.png'
        },
        {
            name: 'owl',
            img:'images/owl.png'
        },
        {
            name: 'owl',
            img:'images/owl.png'
        },
        {
            name: 'axe',
            img:'images/axe.png'
        },
        {
            name: 'axe',
            img:'images/axe.png'
        },
        {
            name: 'witch',
            img:'images/witch.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/skeleton.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/skeleton.png')
            cards[optionTwoId].setAttribute(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/graves.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/skeleton.png')
            cards[optionTwoId].setAttribute('src', 'images/skeleton.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()
})