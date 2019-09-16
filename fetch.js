document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector ("#loadJoke");
    button.addEventListener("click", fetchJoke);
})

function fetchJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.value)
    displayJoke(data.value)
})
.catch(err => {
    console.log("err: ", err)
}) 
}

const displayJoke = (jokes) => {
    let display = document.querySelector('ul')
    let list_item = document.querySelector('li')
    if(!list_item){
        firstJoke = document.createElement('li')
        firstJoke.innerText = jokes
        display.appendChild(firstJoke)
        console.log(firstJoke)
    } else{
        let newJoke = document.createElement('li')
        newJoke.innerText = jokes
        list_item.parentNode.replaceChild(newJoke, list_item)
    }
    }

