document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener("click", randomlyLoadedJokes )
})

const randomlyLoadedJokes = () => {
    //console.log("inside")
    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/3")
    .then(response => {
        return response.json()
    })  
    .then(data => {
        console.log(data)
        displayJokes(data.setup)
        
    })
   
} 

const displayJokes = (jokes) => {
    for (let joke of jokes)
    let ul = document.querySelector("#list-jokes")
    let firstList = document.createElement("li")
    // let prevJoke = document.querySelector("li")
        firstList.innerText = joke.setup
    // if (prevJoke === null) {
    //     let ul = document.querySelector("#list-jokes")
    //     let firstList = document.createElement("li")
    //     firstList.innerText = joke
        ul.appendChild(firstList)
    //     console.log(firstList)
    // } else  {
    //     let newJoke = document.createElement("li")
    //     newJoke.innerText = joke
    //     prevJoke.parentNode.replaceChild(newJoke, prevJoke)
    // }
}

// const displayPunchline = (answer) => {

// }