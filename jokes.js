document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#joker')
    button.addEventListener('click', getRandomJoke)

})

function getRandomJoke() {
    fetch(' https://fsw62-jokes-api.herokuapp.com/jokes/random/4')
        .then(response => {
            return response.json();
        })
        .then(response => {
            jokez(response)
        })
        .catch(err => {
            console.log('error', err);

        })
}

//creating global paragraph tags
let jokePara = document.createElement('p')
let punchLine = document.createElement('p')

function jokez(pun) {
    console.log(pun);
    for (let i = 0; i < pun.length; i++) {
        let container = document.querySelector('#container')

        //creating the elements
        let flipCard = document.createElement('div')
        let flipCard_inner = document.createElement('div')
        let flipCard_front = document.createElement('div')
        let flipCard_back = document.createElement('div')
        let joker = document.createElement('p')
        let punchLine = document.createElement('p')

        //class name declaration 
        flipCard.className = 'flipCard';
        flipCard_inner.className = 'flipCard_inner'
        flipCard_front.className = 'flipCard_front'
        flipCard_back.className = 'flipCard_back'

        // assigning the paragraph tags to equal the values
        joker.innerText = pun[i].setup
        console.log(joker.innerText);
        punchLine.innerText = pun[i].punchline
        console.log(punchLine.innerText);

        //appending flipCard container to the container
        container.appendChild(flipCard)

        //appending joke anf punchline to the front and back cards
        flipCard_front.appendChild(joker)
        flipCard_back.appendChild(punchLine)

        //appending the front and back to inner 
        flipCard_inner.appendChild(flipCard_front)
        flipCard_inner.appendChild(flipCard_back)

        //appending inner to the flipCard
        flipCard.appendChild(flipCard_inner)

    }
}


//old version of the code which no longer need
// let card1_front = document.querySelector('#card1-front')
// let card1_back = document.querySelector('#card1-back')

// jokePara.innerText = pun.setup
// punchLine.innerText = pun.punchline

// card1_front.appendChild(jokePara)
// card1_front.replaceChild(jokePara, jokePara)
// card1_back.appendChild(punchLine)
// let flipCard = document.createElement('div')
// function jokez(pun) {
//     // let cardFronts = document.querySelectorAll('.flipCard-front')
//     // let cardBacks = document.querySelectorAll('.flipCard-back')
//     const container = document.querySelector('#container')

//     const card = document.createElement('div')

//     let joke = document.createElement('p')
//     let punchLine = document.createElement('p')

//     joke.innerText = pun.setup
//     punchLine.innerText = pun.punchLine

//     container.appendChild(card)
//     card.appendChild(joke)
//     card.appendChild(punchLine)

//     console.log(pun);


//     // for (let i = 0; i < pun.length; i++) {
//     //     let jokePara = document.createElement('p')
//     //     let oldJ = cardFronts[i].querySelector('p')
//     //     jokePara.innerText = pun.setup
//     //     // console.log("jokes setup", pun.setup)
//     //     // console.log("card front", cardFronts[i])
//     //     cardFronts[i].appendChild(jokePara)
//     //     // console.log("jokes para", jokePara)
//     //     cardFronts[i].replaceChild(jokePara, oldJ)
//     // }

//     // for (let i = 0; i < cardBacks.length; i++) {
//     //     let punchLine = document.createElement('p')
//     //     let oldP = cardBacks[i].querySelector('p')
//     //     punchLine.innerText = pun.punchline
//     //     console.log('puncline', punchLine.innerText);
//     //     cardBacks[i].appendChild(punchLine)
//     //     cardBacks[i].replaceChild(punchLine, oldP)
//     // }


// }