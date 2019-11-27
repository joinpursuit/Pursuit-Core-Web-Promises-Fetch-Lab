document.addEventListener("DOMContentLoaded", () => {

    const getJokes = () => {
            fetch("https://official-joke-api.appspot.com/random_ten").then(response => {
                return response.json()
            }).then(jokes => {


                let ul = document.querySelector("ul");
                jokes.forEach(jokes => {
                    let li = document.createElement("li")
                    li.innerText = jokes.id
                    ul.appendChild(li)
                })


            })
        }
        .catch(error => {
            console.log(error)
        })
})