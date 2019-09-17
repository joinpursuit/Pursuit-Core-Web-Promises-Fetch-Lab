addEventListener('DOMContentLoaded', () => {
document.querySelector('button').addEventListener('click', () => {
  let oldJokes = document.getElementById('jokesDiv')
  console.log(oldJokes)
  document.body.removeChild(oldJokes)
  let category = document.getElementById('category')
  let url = ''
  console.log(category.selectedIndex)
  switch (category.selectedIndex) {
    case 0:
      url = "https://official-joke-api.appspot.com/general/ten"
    case 1:
      url = "https://official-joke-api.appspot.com/programmin/ten"
    case 2:
      url = "https://official-joke-api.appspot.com/random_ten"
  }
  let jokesDiv = document.createElement('div')
  jokesDiv.id = 'jokesDiv'
  document.body.appendChild(jokesDiv)
  let result = fetch(url)
    .then(response => {
        return response.json()
    })
    .then(jokes => {
      for (let joke of jokes) {
        let newParagraph = document.createElement("p")
        newParagraph.innerText = joke.setup
        jokesDiv.appendChild(newParagraph)

        let newButton = document.createElement("button")
        newButton.class = "accordion"
        newButton.innerText = "show/hide punchline"
        newButton.addEventListener("click", function() {
          let panel = this.nextElementSibling
          if (panel.style.display === "none") {
            panel.style.display = "block"
          } else {
            panel.style.display = "none"
          }
        })

        jokesDiv.appendChild(newButton)
        let newDiv = document.createElement('div')
        newDiv.class = 'panel'
        newDiv.style.display = 'none'

        let newPunchline = document.createElement('p')
        newPunchline.innerText = joke.punchline
        jokesDiv.appendChild(newDiv).appendChild(newPunchline)
      }
    })
  })
})
