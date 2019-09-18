
document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom Loaded");


  let button = document.querySelector("button");
  let parentList = document.createElement("ul");
  document.body.appendChild(parentList);

  console.log("button grabbed");
  console.log("domCont listner is done");

  const fetchRandomJoke = () => {
    console.log("fetchJoke started");
    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/3")
      .then(response => {
        return response.json();
        console.log(response.json);
      })
      .then(jokes => {
        console.log(jokes);
        displayJokes(jokes);
      })
      .catch(err => {
        console.log("err:", err);
      });
    console.log("fetchRandomJock");
  };

  const showPunchline = (e) =>{
    console.log("e target", e.target.nextSibling)
    let punchline = e.target.nextSibling
    if(punchline.style.display === "none") {
      punchline.style.display = "block"
    } else {
      punchline.style.display = "none"

    }
    // console.log('joke was clicked') 
  };

  const displayJokes = (jokes) => {
    console.log("child nodes?", parentList.hasChildNodes())
    if (!parentList.hasChildNodes()) {
      console.log("running first")
      for (let joke of jokes) {
        let jokeLi = document.createElement("li");
        let setup = document.createElement("p")
        let punchline = document.createElement("p");
        punchline.style.display = "none"
        setup.innerText = joke.setup;
        punchline.innerText = joke.punchline

        jokeLi.appendChild(setup)
        jokeLi.appendChild(punchline)

        parentList.appendChild(jokeLi);

        jokeLi.addEventListener("click", showPunchline)
        console.log(setup);
      }
    } else {
      console.log("running second")

      for (let i = 0; i < jokes.length; i++) {
        console.log("jokeLi", parentList)
        // console.log("joke LIIII", jokeLi)
        let newJoke = document.createElement("li");
        let newPunchline = document.createElement("p")
        let newSetup = document.createElement("p")
        newJoke.appendChild(newSetup)
        newJoke.appendChild(newPunchline)
        // newJoke.innerText = jokes[i].setup;
        newPunchline.innerText = jokes[i].punchline;
        newPunchline.style.display = "none"
        newSetup.innerText = jokes[i].setup;
        let li = parentList.childNodes[i]
        console.log("parent child node", li.childNodes[1])
        newJoke.addEventListener("click", showPunchline)
     
        parentList.replaceChild(newJoke, li)
        console.log(jokes[i]);
      }

    }
  button.addEventListener("click", fetchRandomJoke);
  }
  fetchRandomJoke();
});