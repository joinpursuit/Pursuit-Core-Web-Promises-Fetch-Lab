document.addEventListener("DOMContentLoaded", () => {
    console.log("runningggg")
    generateJokes()
    // let opened = false 
})
const generateJokes = () => {
    let list = document.querySelector("ul");
    fetch("https://api.chucknorris.io/jokes/random")
        .then((jokeReponse) => {
            console.log(`JOKE RESPONSE: ${jokeReponse}`)
            return jokeReponse.json();
        })
        .then((jokeObj) => {
            console.log(`JOKE OBJECT: ${jokeObj}`);
            newListItem(jokeObj.value)
        })
}
const newListItem = (newItemContent) => {
    // let list = document.querySelector("ul");
    let newItem = document.querySelector("div")
    if(!newItem){
        newItem = document.createElement("div");
        console.log(newItem)
        newItem.innerText = newItemContent;
        document.body.appendChild(newItem)
}   else {
        let newJoke = document.createElement("div");
        newJoke.innerText = newItemContent;
        newItem = document.body.replaceChild(newJoke, newItem)
}
}
