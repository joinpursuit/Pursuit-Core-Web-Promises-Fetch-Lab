let currJoke = {};


document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector ("#loadJoke");
    button.addEventListener("click", fetchJoke);
    let punchButton = document.querySelector("#demo");
    punchButton.addEventListener("click", getAnswer);
})

// function fetchJoke() {
//     fetch("https://api.chucknorris.io/jokes/random")
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data.value)
//     displayJoke(data.value)
// })
// .catch(err => {
//     console.log("err: ", err)
// }) 
// }

// const displayJoke = (jokes) => {
//     let display = document.querySelector('ul')
//     let list_item = document.querySelector('li')
//     if(!list_item){
//         firstJoke = document.createElement('li')
//         firstJoke.innerText = jokes
//         display.appendChild(firstJoke)
//         console.log(firstJoke)
//     } else{
//         let newJoke = document.createElement('li')
//         newJoke.innerText = jokes
//         list_item.parentNode.replaceChild(newJoke, list_item)
//     }
//     }

function fetchJoke() {
    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/1")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        displayJoke(data)
    })
    
    .catch(err => {
    console.log("err: ", err)
})
}

const displayJoke = (arr) => {
    // let firstJoke = document.querySelector('#randomJoke')
    let display = document.querySelector('#demo')
    for(let i = 0; i < arr.length; i++){
        currJoke = arr[i];
        // if(!display){
        // let display = document.createElement('p')
        display.innerText = arr[i].setup;
        // document.body.appendChild(display);
        // display.addEventListener("click", getAnswer(currJoke))
        // console.log(firstJoke)
        // } else{
            // let newDisplay = document.createElement('p')
            // newDisplay.innerText = arr[i].setup;
            // display.parentNode.replaceChild(newDisplay, display)
            // console.log(newDisplay)
        // }
    }
}

function getAnswer(elem){
    let p = document.querySelector("#demo")
    console.log(currJoke)
    // let answer = elem.punchline
    p.innerText += "\n" + "\n" + currJoke.punchline
    // console.log(answer)
    // document.getElementById("demo").innerHTML = arr[i].punchline
}

