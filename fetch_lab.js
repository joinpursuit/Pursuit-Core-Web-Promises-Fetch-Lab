document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('button');
    button.addEventListener('click', fetchJoke);
})

const fetchJoke = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke')
    .then(response => {
        return response.json();
    })
    .then(dataObj => {
    displayJoke(dataObj.setup);
    })
     .catch(err => {
        console.log("err: ", err)
    })
}

const displayJoke = (joke) => {
    let prevJoke = document.querySelector('p');
    if (!prevJoke) {
        let tellJoke = document.createElement('p');
        tellJoke.innerHTML = joke;
        document.body.appendChild(tellJoke);
    } else {
        let newJoke = document.createElement('p');
        newJoke.innerText = joke;
        prevJoke.parentNode.replaceChild(newJoke, prevJoke);
    }
}
 