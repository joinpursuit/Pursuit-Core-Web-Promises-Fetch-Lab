document.addEventListener("DOMContentLoaded", () => {

    const getJokes = () => {
        fetch("https://official-joke-api.appspot.com/random_ten").then(res => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.json()
        }).then(res => {


            let ul = document.querySelector("ul");
            res.forEach(joke => {
                let li = document.createElement("li")
                li.innerText = joke.setup
                ul.appendChild(li)
            })


        })
    }

})