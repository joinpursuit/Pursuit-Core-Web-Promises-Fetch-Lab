document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded");
    getJokes()
    let button = document.querySelector("#refresh");
    button.addEventListener("click", getJokes);
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
    let pCheck = document.querySelector("p")
    if (!pCheck) {
        let jokeSetup1 = document.createElement("p");
        jokeSetup1.id = "joke-setup1"
        jokeSetup1.innerHTML = text[0].setup;
        let setup1 = document.querySelector("#setup1");
        setup1.append(jokeSetup1);
        let jokePunchline1 = document.createElement("p");
        jokePunchline1.id = "joke-punchline1"
        jokePunchline1.innerHTML = text[0].punchline
        let punchline1 = document.querySelector("#punchline1")
        punchline1.append(jokePunchline1)
        
        let jokeSetup2 = document.createElement("p");
        jokeSetup2.id = "joke-setup2"
        jokeSetup2.innerHTML = text[1].setup;
        let setup2 = document.querySelector("#setup2");
        setup2.append(jokeSetup2);
        let jokePunchline2 = document.createElement("p");
        jokePunchline2.id = "joke-punchline2"
        jokePunchline2.innerHTML = text[1].punchline
        let punchline2 = document.querySelector("#punchline2")
        punchline2.append(jokePunchline2)
    
        let jokeSetup3 = document.createElement("p");
        jokeSetup3.id = "joke-setup3"
        jokeSetup3.innerHTML = text[2].setup;
        let setup3 = document.querySelector("#setup3");
        setup3.append(jokeSetup3);
        let jokePunchline3 = document.createElement("p");
        jokePunchline3.id = "joke-punchline3"
        jokePunchline3.innerHTML = text[2].punchline
        let punchline3 = document.querySelector("#punchline3")
        punchline3.append(jokePunchline3)
    } else {
    let jokeSetup1 = document.querySelector("#joke-setup1");
    jokeSetup1.innerHTML = text[0].setup;
    let setup1 = document.querySelector("#setup1");
    setup1.append(jokeSetup1);
    let jokePunchline1 = document.querySelector("#joke-punchline1");
    jokePunchline1.innerHTML = text[0].punchline
    let punchline1 = document.querySelector("#punchline1")
    punchline1.append(jokePunchline1)
    
    let jokeSetup2 = document.querySelector("#joke-setup2");
    jokeSetup2.innerHTML = text[1].setup;
    let setup2 = document.querySelector("#setup2");
    setup2.append(jokeSetup2);
    let jokePunchline2 = document.querySelector("#joke-punchline2");
    jokePunchline2.innerHTML = text[1].punchline
    let punchline2 = document.querySelector("#punchline2")
    punchline2.append(jokePunchline2)

    let jokeSetup3 = document.querySelector("#joke-setup3");
    jokeSetup3.innerHTML = text[2].setup;
    let setup3 = document.querySelector("#setup3");
    setup3.append(jokeSetup3);
    let jokePunchline3 = document.querySelector("#joke-punchline3");
    jokePunchline3.innerHTML = text[2].punchline
    let punchline3 = document.querySelector("#punchline3")
    punchline3.append(jokePunchline3)
    }
}


console.log("JS Done")