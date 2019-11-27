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
                let li = document.createElement('li')
                li.innerText = jokes.setup
                ul.appendChild(li)
            // })
            // li.addEventListener("click", ()=>{
              
            }).then(punchline=>{
                let para = document.createElement("p")
                li.innerText = punchline.punchline
                ul.appendChild(para)
            })
        })
    // })
})