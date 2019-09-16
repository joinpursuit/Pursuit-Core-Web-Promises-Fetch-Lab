document.addEventListener("DOMContentLoaded", () => {
    getGeneralJokes();
    getProgrammingJokes();
    getRandomJokes();
    selectedJokes();
    let resetJoke = document.querySelector('#newJokes')
    resetJoke.addEventListener('click', getGeneralJokes)
    resetJoke.addEventListener('click', getProgrammingJokes)
    resetJoke.addEventListener('click', getRandomJokes)
    resetJoke.addEventListener('click', selectedJokes)
    let hideGeneral = document.getElementById("generalJokes")
    hideGeneral.addEventListener('click', hideGeneralPunchline)
    let hideProgramming = document.getElementById("programmingJokes")
    hideProgramming.addEventListener('click', hideProgrammingPunchline)
    let hideRandom = document.getElementById("randomJokes")
    hideRandom.addEventListener('click', hideRandomPunchline)

})

//Current Select Item List
//Lets hide id generalJokes, programmingJokes, and randomJokes
// document.querySelector('#select-list').value

function selectedJokes () {
    let generalJoke = document.getElementById("generalJokes");
    let programmingJoke = document.getElementById("programmingJokes");
    let randomJoke = document.getElementById("randomJokes");
    let selectedJoke = document.getElementById('select-list').value

    if (selectedJoke === "General Jokes"){
        generalJoke.style.display = "block";
        programmingJoke.style.display = "none"
        randomJoke.style.display = "none"
    } else if (selectedJoke === "Programming Jokes") {
        generalJoke.style.display = "none";
        programmingJoke.style.display = "block";
        randomJoke.style.display = "none";
    } else if (selectedJoke === "Random Jokes") {
        generalJoke.style.display = "none";
        programmingJoke.style.display = "none";
        randomJoke.style.display = "block";
    } else {
        generalJoke.style.display = "block";
        programmingJoke.style.display = "block";
        randomJoke.style.display = "block";
    }
}

function hideProgrammingJoke () {
    let joke = document.getElementById("programmingJokes");
    if (joke.style.display === "none") {
        joke.style.display = "block";
    } else {
        joke.style.display = "none"
    }
}

function hideRandomJoke () {
    let joke = document.getElementById("randomJokes");
    if (joke.style.display === "none") {
        joke.style.display = "block";
    } else {
        joke.style.display = "none"
    }
}

function getGeneralJokes () {

    console.log('Started')
    fetch("https://official-joke-api.appspot.com/jokes/general/random")
    // fetch("https://fsw62-todos-api.herokuapp.com/api/todos/")
    .then((response) => {
        //receieves HTTP response and initiates parsing of response body (data)
        return response.json();
    })
    .then(data => {
        if(typeof data === "object") {
            console.log(data[0].punchline)
            printGeneralJoke(data[0].setup)
            printGeneralPunchline(data[0].punchline)
        } else {
            console.log(data.punchline)
            printGeneralJoke(data.setup)
        }
        // let ranNum = Math.floor(Math.random() * 10);
        // console.log(data.payload[ranNum].text)
        // printGeneralJoke(data.payload[ranNum].text)

    })
}

function getProgrammingJokes () {

    console.log('Started')
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    // fetch("https://fsw62-todos-api.herokuapp.com/api/todos/")
    .then((response) => {
        //receieves HTTP response and initiates parsing of response body (data)
        return response.json();
    })
    .then(data => {
        //jokes api was limited to 100 requests per ip address so I used ToDos
        if(typeof data === "object") {
            console.log(data[0].punchline)
            printProgrammingJoke(data[0].setup)
            printProgrammingPunchline(data[0].punchline)

        } else {
            console.log(data.punchline)
            printProgrammingJoke(data.setup)
        }
        // let ranNum = Math.floor(Math.random() * 10);
        // console.log(data.payload[ranNum].text)
        // printProgrammingJoke(data.payload[ranNum].text)
    })
}

function getRandomJokes () {

    console.log('Started')
    fetch("https://official-joke-api.appspot.com/jokes/random")
    // fetch("https://fsw62-todos-api.herokuapp.com/api/todos/")
    .then((response) => {
        //receieves HTTP response and initiates parsing of response body (data)
        return response.json();
    })
    .then(data => {
            console.log(data.punchline)
            printRandomJoke(data.setup)
            printRandomPunchline(data.punchline)

        // let ranNum = Math.floor(Math.random() * 10);
        // console.log(data.payload[ranNum].text)
        // printRandomJoke(data.payload[ranNum].text)

    })
}

function printGeneralJoke(jokeSrc) {
    let jokeHolder = document.querySelector('#general-joke-list');

    let newJoke = document.createElement('ul')

    newJoke.innerText = jokeSrc;
    newJoke.id = 'general-joke-list';

    // jokeHolder.appendChild(newJoke);
    jokeHolder.parentNode.replaceChild(newJoke, jokeHolder)

}

function printGeneralPunchline(punchlineSrc) {
    let punchlineHolder = document.querySelector('#general-punchline');

    let newPunchline = document.createElement('ul')

    newPunchline.innerText = punchlineSrc;
    newPunchline.id = 'general-punchline';

    punchlineHolder.parentNode.replaceChild(newPunchline, punchlineHolder)
    hideGeneralPunchline();
}

function printProgrammingJoke(jokeSrc) {
    let jokeHolder = document.querySelector('#programming-joke-list');

    let newJoke = document.createElement('ul')

    newJoke.innerText = jokeSrc;
    newJoke.id = 'programming-joke-list';

    jokeHolder.parentNode.replaceChild(newJoke, jokeHolder)

}

function printProgrammingPunchline(punchlineSrc) {
    let punchlineHolder = document.querySelector('#programming-punchline');

    let newPunchline = document.createElement('ul')

    newPunchline.innerText = punchlineSrc;
    newPunchline.id = 'programming-punchline';

    punchlineHolder.parentNode.replaceChild(newPunchline, punchlineHolder)
    hideProgrammingPunchline();
}

function printRandomJoke(jokeSrc) {
    let jokeHolder = document.querySelector('#random-joke-list');

    let newJoke = document.createElement('ul')

    newJoke.innerText = jokeSrc;
    newJoke.id = 'random-joke-list';

    jokeHolder.parentNode.replaceChild(newJoke, jokeHolder)

}

function printRandomPunchline(punchlineSrc) {
    let punchlineHolder = document.querySelector('#random-punchline');

    let newPunchline = document.createElement('ul')

    newPunchline.innerText = punchlineSrc;
    newPunchline.id = 'random-punchline';

    punchlineHolder.parentNode.replaceChild(newPunchline, punchlineHolder)
    hideRandomPunchline();
}

function hideGeneralPunchline() {
    let punchline = document.getElementById("general-punchline");
    if (punchline.style.display === "none") {
        punchline.style.display = "block";
    } else {
        punchline.style.display = "none"
    }
}

function hideProgrammingPunchline() {
    let punchline = document.getElementById("programming-punchline");
    if (punchline.style.display === "none") {
        punchline.style.display = "block";
    } else {
        punchline.style.display = "none"
    }
}

function hideRandomPunchline() {
    let punchline = document.getElementById("random-punchline");
    if (punchline.style.display === "none") {
        punchline.style.display = "block";
    } else {
        punchline.style.display = "none"
    }
}

// https://official-joke-api.appspot.com/jokes/general/random
// https://official-joke-api.appspot.com/jokes/programming/random
// https://official-joke-api.appspot.com/jokes/random