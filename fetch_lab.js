document.addEventListener("DOMContentLoaded", ()=>{

let button = document.querySelector("#button")
button.addEventListener("click", listOfJokes)
// let punchline = document.querySelector("#punchline_button")
// punchline.addEventListener("click", punchLine)






function listOfJokes(){
  console.log("ListOfJokes Started")
  let responsePromise = fetch("https://official-joke-api.appspot.com/random_joke")
// let responsePromise = fetch("http://api.icndb.com/jokes/random/3")
console.log(responsePromise)

const handlePromiseSuccess = (response) => {
  console.log("promise fufilled", response)
  return response.json()
}

const handleParsedResponseData = (data) =>{
  console.log("data converted", data)

  displayJokes(data.setup)
}

let parsingPromise = responsePromise.then(handlePromiseSuccess)
parsingPromise.then(handleParsedResponseData)



}
const displayJokes = (jokes) => {
  let prevJoke = document.querySelector('#setup');
  if (!prevJoke) {
    // let firstJoke = document.createElement('p');
    prevJoke.innerText = jokes
    // document.body.appendChild(firstJoke);
  } else {
    // let newDogImg = document.createElement('p')
    prevJoke.innerText = jokes
    // console.log(jokes)
    // console.log(newDogImg.innerText)
    // prevJoke.parentNode.replaceChild(newDogImg, prevJoke)
  }
}






//
//
// function punchLine(){
//   // console.log("ListOfJokes Started")
//   let responsePromise = fetch("https://official-joke-api.appspot.com/random_joke")
// // let responsePromise = fetch("http://api.icndb.com/jokes/random/3")
// console.log(responsePromise)
//
// const handlePromiseSuccess = (response) => {
//   console.log("promise fufilled", response)
//   return response.json()
// }
//
// const handleParsedResponseData = (data) =>{
//   console.log("data converted", data)
//
//   displayPunchLine(data.punchline)
// }
//
// let parsingPromise = responsePromise.then(handlePromiseSuccess)
// parsingPromise.then(handleParsedResponseData)
//
//
//
// }
// const displayPunchLine = (jokes) => {
//   let prevline = document.querySelector('#punchline');
//
//     // let firstJoke = document.createElement('p');
//     prevline.innerText = jokes
//     document.getElementById("#punchline_button").style.visibility = 'hidden';
//     // document.body.appendChild(firstJoke);
//
//     // let prevJoke = document.createElement('p')
//
//     // console.log(jokes)
//     // console.log(newDogImg.innerText)
//     // prevJoke.parentNode.replaceChild(newDogImg, prevJoke)
//
// }
//
//













} )
