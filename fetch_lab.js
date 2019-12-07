document.addEventListener('DOMContentLoaded', () =>{
    displayJoke()
    let btn = document.querySelector("#clear")
    btn.addEventListener("click", refresh)
 })
 ​
 const displayJoke = () => {
 ​
    let url = "https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke"
    fetch(url).then(res=> { 
       if(!res.ok) {
          throw Error(`${res.statusText} was the error`)
    }
    return res.json()
    }).then(joke=>{
       let jokeSetup = document.createElement('p')
       jokeSetup.innerText = joke.setup 
       let setup = document.querySelector(".setup")
       setup.appendChild(jokeSetup)
       let punchline = document.createElement('p')
       punchline.innerText = joke.punchline
       let seePunchline = document.querySelector(".punchline")
       seePunchline.appendChild(punchline)
    }).catch(err=>console.log(err))
 }
 ​
 const refresh = () => {
    let joke = document.querySelector(".setup")
    joke.parentNode.removeChild(joke)
    displayJoke()
 ​
 }