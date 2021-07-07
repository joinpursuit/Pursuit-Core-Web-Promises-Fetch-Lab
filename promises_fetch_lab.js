document.addEventListener("DOMContentLoaded", () => {
    fetchJokes()
})


const fetchJokes = () => {
  fetch("https://official-joke-api.appspot.com/jokes/random")//creates promise that will try to obtain data
    .then((response)=> {
    jokeObject = response.json()
    return jokeObject
    })
    .then((obj) => {
      jokeObject = obj
      appendJoke(obj.setup)
    })
}

const appendJoke = ((joke) => {
    div = document.querySelector("#div");
    setup = document.createElement("p");
    setup.innerText = joke;
    div.appendChild(setup);
    setup.addEventListener("click", showAnswerOnce)
})

const showAnswerOnce = () => {
        answer = jokeObject.punchline;
        punchline = document.createElement("p");
        punchline.innerText = answer;
        div.appendChild(punchline);

        setup.removeEventListener("click", showAnswerOnce)
        setup.addEventListener("click", hideAnswer)

  }

  const hideAnswer = () => {
  //  punchline.div.removeChild(punchline)
   punchline.innerText = ""
  }

  
