document.addEventListener("DOMContentLoaded", () => {
})
const jokebutton=()=>{
    fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke").then(res => {
        if (res.ok === false){
            throw Error(res.statusText + "was the error ")
        }
        return res.json();
    }).then(res => {
        let jokester = document.querySelector("button");
        jokester.innerText = res.setup;
    }).catch(err => {
    })
  }




// document.addEventListener("DOMContentLoaded", () => {
//     // fetch("https://official-joke-api.appspot.com/random_joke").then(res => {
//     //     if (res.ok === false){
//     //         throw Error(res.statusText + "was the error ")
//     //     }
//     //     return res.json();
//     // }).then(res => {
//     //     let header = document.createElement("h2");
//     //     header.innerText = res.setup;
//     //     document.body.appendChild(header);
//     // }).catch(err => {
//     // })
    

//     const getJoke = () => {
//         fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_joke").then(res => {
//             if(!res.ok) {
//                 throw Error(res.statusText)
//             }
//             return res.json()
//         }).then(joke => {
//             joke1.innerText = joke.setup
//         })
//     }
    
//     let joke1 = document.querySelector("#joke1")
//     joke1.addEventListener("click", getJoke())
// })