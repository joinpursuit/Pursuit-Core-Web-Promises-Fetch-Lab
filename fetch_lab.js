fetchJoke();

function fetchJoke () {
    fetch('https://fsw62-jokes-api.herokuapp.com/jokes/random/3') //https://official-joke-api.appspot.com/random_ten
    .then(response => {
        return response.json();
    })
    .then(dataObj => {
        renderJokeList(dataObj);
    })
     .catch(err => {
        console.log("err: ", err);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('#jokeButton');
    button.addEventListener('click', fetchJoke);
    let button2 = document.querySelector('#removeAllJokes');
    button2.addEventListener('click', deleteJokes);
})

const renderJokeList = (jokes) => {
     let jokeUl = document.querySelector('#jokeList');
     for (let i = 0; i < jokes.length;i++){
        var tellJoke = document.createElement('h3');
        tellJoke.setAttribute('class', 'joke');
        tellJoke.setAttribute('id', `joke${i}`);
        tellJoke.setAttribute('tabindex', `${i}`);
        tellJoke.innerHTML = jokes[i].setup;
        jokeUl.appendChild(tellJoke);
        let punchLine = document.createElement('p');
        punchLine.setAttribute('class', 'punch');
        punchLine.setAttribute('id', `punch${i}`);
        punchLine.innerHTML = jokes[i].punchline;
        jokeUl.appendChild(punchLine);
    }
   
    
}
function deleteJokes() {
        let jokeUl = document.querySelector('#jokeList');
        let punchLine = document.querySelectorAll('p');
        let tellJoke = document.querySelectorAll('h3');

        for(let i = 0; i < punchLine.length; i++) {
            let punchLineElement = punchLine[i]
            let jokeElement = tellJoke[i]
            jokeUl.removeChild(punchLineElement);
            jokeUl.removeChild(jokeElement);
        }
      
} 
