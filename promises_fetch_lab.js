document.addEventListener('DOMContentLoaded', () => {
    let button1 = document.querySelector('#newjokes')
    fetchJokes()
    button1.addEventListener('click',fetchJokes) 
})

let toggle = false

function fetchJokes() {
    console.log("running")
    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/5")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        displayJokes(data)
    })
    .catch((err) => {
        console.log('Error :', err)
    })
}

function displayJokes(arr) {
    let jokeTing = document.querySelector('#joke-holder')    
    let newJokeTing = document.createElement('div')
    newJokeTing.id = jokeTing.id

    if (jokeTing) {
        jokeTing.parentNode.replaceChild(newJokeTing, jokeTing)
    }

    for (let i = 0; i < arr.length; i++) {
        let jokeSetup = document.createElement('h3')
        let jokePunch = document.createElement('p')
        let jokeDiv = document.createElement('div')

        jokeSetup.innerText = arr[i].setup
        jokePunch.innerText = arr[i].punchline
        jokeDiv.appendChild(jokeSetup)
        jokeDiv.appendChild(jokePunch)
        newJokeTing.appendChild(jokeDiv)
        jokeSetup.addEventListener('click', revealPunchline)
        jokePunch.style.visibility = 'hidden'
    } 
    
}
    
function revealPunchline(event) {
    // console.log("event target", event.target)
    // console.log("sibling", event.target.nextSibling)
    let siblingP = event.target.nextSibling
    // console.log(event.target.nextSibling.style.visibility)
    if (siblingP.style.visibility === "hidden") {
        siblingP.style.visibility = "visible "
    } else {
        siblingP.style.visibility = "hidden "
    }
}