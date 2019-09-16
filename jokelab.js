document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener("click", fetchJoke);
})
const fetchJoke = () => {


    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => {
            return response.json();
        })
        .then(dataObj => {
            displayJoke(dataObj.setup)
        })
        .catch(err => {
            console.log("Not found", err)
        })
    
    displayJoke = (joke) => {
        let prevJoke = document.querySelector('p')
        if (!prevJoke) {
            let tellJoke = document.createElement(tellJoke);
            tellJoke.innerHTML = joke
            document.body.appednChild(tellJoke);
        } else {
            let newJoke = document.createElement('p')
            newJoke.innerHTML = joke
            prevJoke.parentNode.replaceChild(newJoke, prevJoke)
        }
    }
}