document.addEventListener("DOMContentLoaded", ()=>{
    let button = document.createElement("button")
    button.innerText = "click"
    document.body.appendChild(button)
    let ul = document.createElement("ul")
    document.body.appendChild(ul)
    button.addEventListener("click", ()=>{
        fetch("https://official-joke-api.appspot.com/random_joke").then(res=>{
            if(res.ok === false){
                throw Error(res.statusText)
            }
            return res.json()
        }).then(jokes=>{
            // debugger
            // jokes.forEach(joke=>{
                
                
                let joke = document.createElement("li")
                joke.innerText = jokes.setup
                debugger
                let punchline = document.createElement("li")
                punchline.innerText = jokes.punchline;
                punchline.style = "display:none"
                joke.appendChild(punchline)
                ul.appendChild(joke)
                // })
                // li.addEventListener("click", ()=>{
                    ul.addEventListener("click", ()=>{
        
                        punchline.style = ""
                })
              
            })
        })
    // })
})