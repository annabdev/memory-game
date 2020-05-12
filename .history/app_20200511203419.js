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

    const grid = document.querySelector('.grid')


    //create board

    function createBoard() {
        for (let i = 0; i <cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/skeleton.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches


    //flip


    createBoard()
})