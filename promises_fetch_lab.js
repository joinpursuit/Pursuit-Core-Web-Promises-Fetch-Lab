document.addEventListener("DOMContentLoaded", () => {
    fetchJokes()
})

let jokeObject = {};
const fetchJokes = () => {
  fetch("https://official-joke-api.appspot.com/jokes/random")//creates promise that will try to obtain data
    .then((response)=> {
      return response.json()
    })
    .then((obj) => {
      jokeObject = obj
      appendJoke(obj.setup)
      return obj
    })
}

const appendJoke = ((text) => {
    let div = document.querySelector("#joke");
    paragraph = document.createElement("p");
    paragraph.innerText = text;
    div.appendChild(paragraph);
    paragraph.addEventListener("click", showAnswer)
})

const showAnswer = () => {
        let answer = jokeObject.punchline;
        // let para = document.querySelector("p")
        // para.innerText += answer
        let div = document.querySelector("#joke");
        punchline = document.createElement("p");
        punchline.innerText = answer;
        div.appendChild(punchline);
  }
