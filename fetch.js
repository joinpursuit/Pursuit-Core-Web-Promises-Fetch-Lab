document.addEventListener("DOMContentLoaded", () => {
  displayRandom();

  let button = document.querySelector("button");
  button.addEventListener("click", fetchRandomThing);

})

const fetchRandomThing = () => {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(response => {

      // Receives HTTP response and initiates parsing of response body (data)
      console.log(response)
      //turns the data into js so it can be used
      return response.json();
    })
    .then(dataObj => {

      //need to check the keys of the API to see what we will be keying into, rather than message use setup.
      console.log(dataObj)
      // Receives the parsed data after successful extractions/conversion
      displayRandom(dataObj.setup)
    })
    .catch(err => {
    })

}

const displayRandom = (url) => {
  let prevItem = document.querySelector('li');
  if (!prevItem) { // No image in DOM. First time clicking
    let firstItem = document.createElement('li');
    firstItem.innerText = url;
    document.body.appendChild(firstItem);
  } else {
    let newItem = document.createElement('li')
    newItem.innerText = url
    prevItem.parentNode.replaceChild(newItem, prevItem)
  }
}
