document.addEventListener("DOMContentLoaded",()=> {
    fetch("https://official-joke-api.appspot.com/random_joke").then(response => {
        if(response.ok === false){
            throw Error(response.statusText + " was the error")
          }
          // fetch and catch to help catch errors
          return response.json();
        }).then(response => {
           let p =  document.querySelector("p")
           p.innerText = response.setup
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