document.addEventListener("DOMContentLoaded", () => {
    let joke1 = document.querySelector("#jokes")
    let joke2 = document.querySelector("#punchline")
    let random = document.querySelector("#type2");
    let program = document.querySelector("#type3");
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke").then(res=>{
        if(!res.ok){
            throw Error(res.statusText="its Not Ok")
        }
        return res.json()
    }).then(res =>{
        joke1.innerText = res.setup
        joke2.addEventListener("click", () => {
        if(joke2.innerText !== "Joke Card"){
            return joke2.innerText = "Joke Card"
        } else{
        joke2.innerText = res.punchline
        }
    })
    }).catch(err =>{
        debugger
    })
    random.addEventListener("click",randomJoke);
    program.addEventListener("click",programJoke);
})

let refresh = document.querySelector("#refresh")
const refreshPage=()=>{
    window.location.reload();   
}

const generalJoke = ()=>{
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/jokes/general/ten").then(res=>{
        if(!res.ok){
            throw Error(res.statusText="its Not Ok")
        }
        // debugger
        return res.json()
    }).then(res=>{
        res.forEach(element => {
            // debugger;
            let li =document.createElement("li");
            li.innerText=element.setup;
            let jokeCard2= document.createElement("button");
            jokeCard2.innerText="Joke Card";
            jokeCard2.addEventListener("click", () => {
                if(jokeCard2.innerText !== "Joke Card"){
                    jokeCard2.innerText = "Joke Card"
                } else{
                jokeCard2.innerText = element.punchline
                }
            });
            document.body.appendChild(li)
            document.body.appendChild(jokeCard2)
    
        });
    }).catch(err =>{
        debugger
    })
    }

const randomJoke =()=>{
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten").then(res=>{
        if(!res.ok){
            throw Error(res.statusText="its Not Ok")
        }
        // debugger
        return res.json()
}).then(res=>{
    res.forEach(element => {
        // debugger;
        let li =document.createElement("li");
        li.innerText=element.setup;
        let jokeCard2= document.createElement("button");
        jokeCard2.innerText="Joke Card";
        jokeCard2.addEventListener("click", () => {
            if(jokeCard2.innerText !== "Joke Card"){
                jokeCard2.innerText = "Joke Card"
            } else{
            jokeCard2.innerText = element.punchline
            }
        });
        document.body.appendChild(li)
        document.body.appendChild(jokeCard2)

    });
}).catch(err =>{
    debugger
})
}

const programJoke =()=>{
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/jokes/programming/ten").then(res=>{
        if(!res.ok){
            throw Error(res.statusText="its Not Ok")
        }
        // debugger
        return res.json()
}).then(res=>{
    res.forEach(element => {
        // debugger;
        let li =document.createElement("li");
        li.innerText=element.setup;
        let jokeCard2= document.createElement("button");
        jokeCard2.innerText="Joke Card";
        jokeCard2.addEventListener("click", () => {
            if(jokeCard2.innerText !== "Joke Card"){
                jokeCard2.innerText = "Joke Card"
            } else{
            jokeCard2.innerText = element.punchline
            }
        });
        document.body.appendChild(li)
        document.body.appendChild(jokeCard2)

    });
}).catch(err =>{
    debugger
})
}


