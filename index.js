document.addEventListener("DOMContentLoaded", () => {
  fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/jokes/ten").then(res => {
    return res.json();
}).then(jokes => {
  let ul = document.querySelector('ul');
  jokes.forEach(joke => {
   let li = document.querySelector('li');
   li.innerText = joke.li;
   let punchline = document.createElement('li')
   punchline.innerText = joke.punchline;
            punchline.style.display = "none";
            punchline.id = 'punchline' 
            let ulPunchline = document.createElement('ul');
            ulPunchline.appendChild(punchline);
            li.appendChild(ulPunchline);
            ul.appendChild(li)
  })
  document.body.appendChild(ul)
})