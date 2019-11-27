document.addEventListener("DOMContentLoaded", () => {
    let joke1 = document.querySelector("#jokes")
    let joke2 = document.querySelector("#punchline")
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
  })
})
let refresh = document.querySelector("#refresh")
function refreshPage(){
    window.location.reload();   
}

