document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#button');
    button.addEventListener('click', getRandomJoke);
})

const getRandomJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => {
            return response.json();
        })
        .then(dataObj => {
            renderJoke(dataObj.setup)
            renderAnswer(dataObj.punchline)
        })
        .catch(err => {
            console.log("Not found", err)
        })

    renderJoke = (joke) => {
        let prevJoke = document.querySelector('p')
        
        if (!prevJoke) {
            let tellJoke = document.createElement(tellJoke);
            tellJoke.innerHTML = joke
            document.body.appendChild(tellJoke);
        } else {
            let newJoke = document.createElement('p')
            newJoke.innerHTML = joke
            prevJoke.parentNode.replaceChild(newJoke, prevJoke)
        }
    }

    renderAnswer = (answer) => {
        // let answer = document.createElement("button");
        // answer.id = "answer";
        // answer.innerText = "Punchline";
        // document.body.appendChild(answer);
        // document.addEventListener
        let jokeAnswer = document.createElement('p');
        jokeAnswer.innerText = answer;
        document.body.appendChild(jokeAnswer)

    }
    // createAnswer = () => {
    //     let answer = document.createElement("button");
    //     answer.id = "answer";
    //     answer.innerText = "Punchline";
    //     document.body.appendChild(answer);
    // }
    // createAnswer()

    

    
    
}
