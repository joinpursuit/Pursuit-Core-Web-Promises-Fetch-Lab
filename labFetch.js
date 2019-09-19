document.addEventListener("DOMContentLoaded", () => {
    expandRevealJoke(); // calling the function
    let button = document.querySelector("button"); // calling or grabbing the button 
    button.addEventListener("click", expandRevealJoke); //adding an event listener to the button

})

function expandRevealJoke() { // the function that will be executed when the button is pressed
    // console.log("running fetch")
    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/5") // grabbing data from this url - specifically 5 random jokes 
        .then(response => { // 
            return response.json(); // converting the raw data -json into javascript
        }).then(jokesArr => { // returning a response of the request, in this case a promise in a function
            displayJokes(jokesArr) // 

            // console.log(jokesArr)
        })
        .catch(err => { // if promise is not met it will return a error as a response 
            console.log("err:", err)
        })
}

function displayJokes(jokes) {
    let originalList = document.querySelector("#originalList") // grabbing the ol from the html
    if (originalList.hasChildNodes()) { // checking to see if ol has li as a child
        console.log("child node is here")
        for (let i = 0; i < jokes.length; i++) { // repeating the creation of li and p tags 5 times 
            let newSetup = document.createElement("li") // creating in js the a new child, new jokes
            let newPunchline = document.createElement("p"); // creating in js the new child, new punchline

            newSetup.innerText = jokes[i].setup //the setup property of jokes, containing array of objects its passed down to a new var.
            newPunchline.innerText = jokes[i].punchline //the punchline property of jokes, containing array is an array of object. 
            newPunchline.style.display = "none" // setting the newPunchline to none hide it 
            newSetup.addEventListener("click", showPunchline)

            newSetup.appendChild(newPunchline)

            let oldLi = originalList.childNodes[i]
            originalList.replaceChild(newSetup, oldLi)
        }
    } else {
        for (let i = 0; i < jokes.length; i++) {

            let jokeLi = document.createElement("li");
            jokeLi.innerText = jokes[i].setup
            jokeLi.addEventListener("click", showPunchline)


            let punchline = document.createElement('p'); // creating a p tag 
            punchline.innerText = jokes[i].punchline // 
            punchline.style.display = "none" //

            jokeLi.appendChild(punchline) // placing p tag to be a child of the li
            originalList.appendChild(jokeLi) // placing li to be a child of the ol
        }
    }
}

const showPunchline = (event) => {
    // console.log("event", event.target)
    let li = event.target
    // console.log("child node p", li.childNodes[1])
    if (li.childNodes[1].style.display === "block") {
        li.childNodes[1].style.display = "none"
    } else {
        li.childNodes[1].style.display = "block"
    }
}