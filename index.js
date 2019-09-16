document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded");
    getJokes()
    let button = document.querySelector("#refresh");
    button.addEventListener("click", function(){location.reload()});
})

const getJokes = () => {
    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/3")
    .then(response => {
        return response.json()
    })
    .then(dataObj => {
        displayJokes(dataObj)
    })
    .catch(err => {
        console.log("Here's that error for ya: ", err)
    })
}

const displayJokes = (text) => {

    let jokeSetup1 = document.createElement("p");
    jokeSetup1.innerHTML = text[0].setup;
    let div1 = document.querySelector("#joke1");
    div1.append(jokeSetup1);
    let jokePunchline1 = document.createElement("p");
    jokePunchline1.innerHTML = text[0].punchline
    div1.append(jokePunchline1)
    
    let jokeSetup2 = document.createElement("p");
    jokeSetup2.innerHTML = text[1].setup;
    let div2 = document.querySelector("#joke2");
    div2.append(jokeSetup2);
    let jokePunchline2 = document.createElement("p");
    jokePunchline2.innerHTML = text[1].punchline
    div2.append(jokePunchline2)

    let jokeSetup3 = document.createElement("p");
    jokeSetup3.innerHTML = text[2].setup;
    let div3 = document.querySelector("#joke3");
    div3.append(jokeSetup3);
    let jokePunchline3 = document.createElement("p");
    jokePunchline3.innerHTML = text[2].punchline
    div3.append(jokePunchline3)
}


console.log("JS Done")