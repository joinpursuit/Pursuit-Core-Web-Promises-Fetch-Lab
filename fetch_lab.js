document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    let jokeList = document.querySelector("li")
    button.addEventListener("click", randomlyLoadedJokes)
    
})

const randomlyLoadedJokes = () => {
    //console.log("inside")
    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/3")
    .then(response => {
        return response.json()
    })  
    .then(jokes => {
         console.log('jokessssss', jokes)
         
        displayJokes(jokes)    
    })
    // .then(answer => {
        
    // })
    .catch(err => {
        console.log("err:" , err)
    })
   
} 

const displayJokes = (jokes) => {
    let oldUl = document.querySelector("ul")
    let newUl = document.createElement("ul")
    for (let joke of jokes) {
        let jokeList = document.createElement("li")
        jokeList.innerText = joke.setup
        let p = document.createElement("p")
        p.innerText = joke.punchline
        p.classList.add('invisible')
        jokeList.addEventListener("click", togglePunchline)
        console.log(jokeList.innerText)
        newUl.appendChild(jokeList)
        newUl.appendChild(p)
        console.log(jokeList.nextElementSibling);
    }  
        oldUl.parentNode.replaceChild(newUl, oldUl)
}

const togglePunchline = (e) => {
    console.log("event", e.target)
    console.log("next sibling", e.target.nextElementSibling)

    // let p = document.querySelector("p")
    // console.log("p", p)
    e.target.nextElementSibling.classList.toggle("invisible")
    // console.log("class", p.classList )
    
}


