document.addEventListener("DOMContentLoaded", () => {
    fetch("https://official-joke-api.appspot.com/random_ten").then(res => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    }).then(jokes => {
        let ul = document.querySelector("ul");
        jokes.forEach(joke => {
            let li = document.createElement("li")
            li.innerText= joke.setup + " " + joke.punchline;
            ul.appendChild(li)
        })
        const hidePunch = () =>{
            
        }
        
    }).catch(err => console.log(err))
})