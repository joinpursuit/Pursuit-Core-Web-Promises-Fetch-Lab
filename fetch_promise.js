document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener("click", fetchJoke)
})
const fetchJoke = () => {

    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/3")
        .then(response => {
            return response.json();
        })
        .then(jokes => {
            displayJoke(jokes)
        })
        .catch(err => {
            console.log("Not found", err)
        })

    displayJoke = (jokes) => {
        let jokeUl = document.querySelector('#joke-list');
        for (let joke of jokes) {
            let jokeLi = document.createElement('li')
            jokeLi.innerText = joke.setup
            jokeUl.appendChild(jokeLi)
        }
    }
}


