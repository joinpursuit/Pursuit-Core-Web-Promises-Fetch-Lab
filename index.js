document.addEventListener("DOMContentLoaded", () => {

    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten").then(res =>{
        return res.json();
    }).then(jokesList => {
            let ul = document.querySelector("#jokeUl")
            jokesList.forEach(joke =>{
            let setupLi = document.createElement("li")
            setupLi.innerText = joke.setup;
            let punchlineLi = document.createElement("li")
            punchlineLi.innerText = joke.punchline;
            setupLi.appendChild(punchlineLi);
            ul.appendChild(setupLi);
            
        })
        document.body.appendChild(ul)
        
    })
    let ul = document.querySelector("#jokeUl")
    ul.addEventListener("click", (e) => {
        e.target.children
    })





    let button = document.createElement("button")
    button.innerText = "Get New Jokes"
    document.body.appendChild(button)
    button.addEventListener("click", getJokes())
})