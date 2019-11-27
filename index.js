document.addEventListener("DOMContentLoaded", () => {
  listOfJokes();

})

function listOfJokes() {
  console.log("runningggg")
  let val = document.querySelector('select').value
  let link = `https://official-joke-api.appspot.com/jokes/${val}/ten`
  if (val === "random") {
    link = 'https://official-joke-api.appspot.com/jokes/ten'
  }
  fetch(link)
    .then(response => {
      console.log("inside fetch")
      return response.json()
    })
    .then(response => {
      loadJokes(response)
    })
    .catch(err => {
      console.log("err: ", err)
    })
}
let bool = true;
let saidJokes = [];

function expandJoke(evt) {

  if (bool) {
    evt.currentTarget.style.height = "90px";
    evt.currentTarget.childNodes[1].style.display = "block"
    bool = false;
  }
  else {
    evt.currentTarget.style.height = "50px";
    evt.currentTarget.childNodes[1].style.display = "none"
    bool = true;
  }

}

function loadJokes(jokeList) {

  let list = document.querySelector("ul")
  console.log("first child", list.firstChild)

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    list.appendChild(div);
  }

  console.log(saidJokes)

  let divs = document.querySelectorAll("div");
  for (let i = 0; i < divs.length; i++) {
    let set = document.createElement("p");
    let punch = document.createElement("p");
    if (saidJokes.includes(jokeList[i].id)) {
      fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
          //Which joke are we trying to replace
          return response.json();
        })
        .then(response => {
          jokeList[i] = response
          console.log("jokelist[0", jokeList[i])
        })
    }
    set.innerText = jokeList[i].setup
    punch.innerText = jokeList[i].punchline
    punch.setAttribute("class", "punch")
    divs[i].addEventListener("click", expandJoke)
    divs[i].appendChild(set)
    divs[i].appendChild(punch)
  }
  for (let i = 0; i < 10; i++) {
    saidJokes.push(jokeList[i].id);
  }
}




