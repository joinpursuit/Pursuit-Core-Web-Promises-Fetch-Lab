document.addEventListener("DOMContentLoaded",()=> {
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke").then(response => {
        if(response.ok === false){
            throw Error(response.statusText + " was the error")
          }
          // fetch and catch to help catch errors
          return response.json();
        }).then(response => {
            let p =  document.querySelector("p");
            let general = document.querySelector("#general");
            general.addEventListener("click", () => {
                if(response.type === "general") {
                    p.innerText = response.setup;
                } else {
                    
                }
            })
            let random = document.querySelector("#random");
            random.addEventListener("click", () => {
                if(response.type === "random") {
                    p.innerText = response.setup;
                }
            })
            let programming = document.querySelector("#programming");
            programming.addEventListener("click", () => {
                if(response.type === "programming") {
                    p.innerText = response.setup;
                }
            })
        

        //    p.innerText = response.setup
        p.addEventListener("click", ()=> {
            let p2 = document.querySelector("#p2")
            p2.innerText = response.punchline
            p.addEventListener("click",() => {
                p2.innerText = ""
            })
        })
        let button = document.createElement("button")
        button.innerHTML = "Click me"
        document.body.appendChild(button)
        button.addEventListener("click",()=> {
            window.location.reload();
        })
})
})