document.addEventListener("DOMContentLoaded", () => {
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten").then(res => {
        if (!res.ok) {
            throw Error(res.statusText + " was the error")
        }
        return res.json()
    }).then(res => {
        let ul = document.createElement("ul")
        res.forEach((joke) => {
            let li = document.createElement("li")
            let p = document.createElement("p")
            li.addEventListener("click", () => {
                p.innerText = joke.punchline
                li.appendChild(p)
                li.addEventListener("dblclick", () => {
                    p.innerText = ""
                })
            })
            li.innerText = joke.setup
            ul.appendChild(li)
        })
        let button = document.createElement("button")
        button.innerHTML = "REFRESH"
        button.addEventListener("click", ()=> {
            window.location.reload();
        })
        let select = document.querySelector("#selector")

        document.body.appendChild(ul)
        document.body.appendChild(button);
    }).catch(err => {
        debugger
    })
})

// createSelect = function(){
//     let selectDiv = document.querySelector("#select");
//     let form = document.createElement("form");
//     form.id = "selectForm";
//     let select = document.createElement("select");
//     select.name = "joketype"
//     select.form = "selectForm"
//     let option1 = document.createElement("option");
//     option1.value = "general"
//     option1.innerText = "General";
//     let option2 = document.createElement("option");
//     option2.value = "random"
//     option2.innerText = "Random";
//     let option3 = document.createElement("option");
//     option3.value = "programming"
//     option3.innerText = "Programming";
//     select.appendChild(option1);
//     select.appendChild(option2);
//     select.appendChild(option3);
//     selectDiv.appendChild(form);
//     selectDiv.appendChild(select);
// }
