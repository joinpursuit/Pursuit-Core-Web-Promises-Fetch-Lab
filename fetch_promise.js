document.addEventListener("DOMContentLoaded", () => {
    fetchJoke()
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
        let jokeDl = document.querySelector('#insert-jokes');
        for (let joke of jokes) {
            let jokeDt = document.createElement('dt')
            jokeDt.innerText = joke.setup
            jokeDl.appendChild(jokeDt)
            let punchlineDd = document.createElement('dd')
            punchlineDd.innerText = joke.punchline
            jokeDl.appendChild(punchlineDd)   
        }
            
    }

}






