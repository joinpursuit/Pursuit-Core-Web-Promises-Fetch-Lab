document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button")
    button.addEventListener("click", fetchJokes)
})

function fetchJokes() {

    console.log("fetching jokes")
    fetch("https://fsw62-jokes-api.herokuapp.com/jokes/random/3") 
    .then(response => {
        return response.json();
        
    })
    .then(response => {
        let toggle = false;
        for (let i = 0; i < response.length; i++) {
            let divs = document.getElementById(`joke${i + 1}`);
            divs.innerHTML = "";
            let joke = document.createElement("p");
            joke.innerText = response[i].setup;
            divs.appendChild(joke);
            let punchline = document.createElement("p");
            punchline.innerText = response[i].punchline;
            divs.appendChild(punchline);
            punchline.style.display = "none";
                divs.addEventListener("click", getThePunch);
                    function getThePunch() {
                        if (toggle === false) {
                            console.log("toggle is false")
                            joke.style.display = "none";
                            punchline.style.display = "block";
                            
                            toggle = true;
                            console.log("toggle is true")
                        } else {
                            console.log("toggle is true")
                            punchline.style.display = "none";
                            joke.style.display = "block";
                            toggle = false;
                            console.log("toggle is false")
                        }
                }
            }
    })
}





