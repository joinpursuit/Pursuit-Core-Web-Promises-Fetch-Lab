document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom Loaded");
  fetchRandomJoke();

  let button = document.querySelector("button");
  console.log("button grabbed");
  button.addEventListener("click", fetchRandomJoke);
  console.log("domCont listner is done");
});

const fetchRandomJoke = () => {
  console.log(" fetchJoke started");
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then(response => {
      return response.json();
      console.log(response.json);
    })
    .then(jokes => {
      console.log(jokes)
      displayJokes(jokes)

      // const { randomJoke, randomTen } = require("./handler");
      // console.log("randomJoke", randomJoke());
      // console.log("randomTen", randomTen());
    })
    .catch(err => {
      console.log("err:", err)
    })
    console.log('fetchRandomJock')
}
  const displayJokes =(jokes)=> {
    let parentList = document.createElement("ul")
    for(let joke of jokes ){
      let jokeLi = document.createElement("li")
      jokeLi.innerText = joke.setup
      parentList.appendChild(jokeLi)
      console.log(joke)
    }
    document.body.appendChild(parentList)
    console.log(parentList)
    // firstJoke.innerText= joke
    // parentList.appendChild(firstJoke) 
  }
console.log("this is a js")
