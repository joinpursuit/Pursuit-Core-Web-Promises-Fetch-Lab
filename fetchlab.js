document.addEventListener("DOMContentLoaded", () => {})

let jokeObject = {}; // holds value of joke object

const generateJoke = () => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
        .then((jokeReponse) => {
            return jokeReponse.json();
        })
        .then((jokeObj) => {
            jokeObject = jokeObj
            newListItem(jokeObj.setup)
            return(jokeObj)
        })
}
generateJoke(); // synchronous, generates a joke and sets my empty object to a Joke Object

const newListItem = (newItemContent) => {
    let newItem = document.querySelector("div")
    if(!newItem){
        newItem = document.createElement("div");
        newItem.innerText = newItemContent;
        document.body.appendChild(newItem)

        newItem.addEventListener("click", revealAnswer)
}   else {
        let newJoke = document.createElement("div");
        newJoke.innerText = newItemContent;
        newItem = document.body.replaceChild(newJoke, newItem)
        newJoke.addEventListener("click", revealAnswer)
}}

const getPunchline = () => {
    let punchline = jokeObject.punchline;
    return punchline
}
const revealAnswer = () => {
    let answer = getPunchline();
    document.querySelector("div").innerText += answer;
}
const hideAnswer = () => {
    
}