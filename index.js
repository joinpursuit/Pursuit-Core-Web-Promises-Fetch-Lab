document.addEventListener("DOMContentLoaded", () => {
    let button = document.createElement("button");
    let ul = document.createElement("ul");
    button.id = "jokes";
    button.innerText = "Click for punchline";
    document.body.appendChild(button);
    console.log(ul)
    
    button.addEventListener("click", () => {
        fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke").then(res => {
            if(res.ok === false){
                throw Error(res.statusText);
            }
            return res.json();
        }).then(res => {
            debugger;
            
                let li = document.createElement("li");
                li.innerText = res.setup;
                ul.appendChild(li);
                document.body.appendChild(ul)
            })
        })
        ul.addEventListener("click", (e)=>{
           let target = e.target;
           target.innerText = e.setup;
        //    debugger;
        })
        
        
        


})
