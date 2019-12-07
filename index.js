document.addEventListener("DOMContentLoaded", () => {
    let url = "https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/jokes/general/ten";
    const fetchData = (url, callback) => {
        fetch(url).then(res => {
            if (!res.ok) {
                throw Error(res.statusText + " was the error")
            }
            return res.json()
        }).then(res => {
            callback(res)
        }).catch(err => {
            console.log(err);
        })
    }
    
    const displayJokes = (data) => {
        let ul = document.querySelector("#jokes")
        ul.innerHTML = "";
        data.forEach((joke) => {
            let li = document.createElement("li")
            li.innerText = joke.setup;
            let p = document.createElement("p");
            p.innerText = joke.punchline;
            p.style.display = "none";
            li.appendChild(p);  
            ul.appendChild(li);
        })

        document.body.appendChild(ul)
        document.body.appendChild(button);
    }

    let ul = document.querySelector("#jokes");
    ul.addEventListener("click", (e) => {
        let punchline = e.target.querySelector("p");
        if(punchline.style.display === "none"){
            punchline.style.display = "block";
        } else {
            punchline.style.display = "none";
        }
    })

    let button = document.createElement("button");
    button.innerHTML = "REFRESH"
    button.addEventListener("click", ()=> {
        window.location.reload();
    })

    let select = document.querySelector("#selector");
    select.addEventListener("change", (e) => {
        let target = e.currentTarget.value;
        let url = `https://official-joke-api.appspot.com/jokes/${target}/ten`;
        if(target === "random"){
            url = `https://official-joke-api.appspot.com/random_ten`;
        }
        fetchData(url, displayJokes)
    })

    fetchData(url, displayJokes)

})



