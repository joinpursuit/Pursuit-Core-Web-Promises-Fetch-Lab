// Joseph P. Pasaoa
//





document.addEventListener("DOMContentLoaded", () => {
  drawTen();

  let buttonDrawTen = document.querySelector("#button-draw10");
  buttonDrawTen.addEventListener("click", drawTen);

  let cardsFlex = document.querySelector("#cards-flex");
  cardsFlex.addEventListener('click', (e) => {
    console.dir(e.target.parentNode);
      if (e.target.parentNode.className === "joke-card") {
        // e.target.parentNode.childNodes[1].className
        if (e.target.parentNode.childNodes[1].className === "card-punchline") {
          e.target.parentNode.childNodes[1].className = "card-punchline showing";
        } else {
          e.target.parentNode.childNodes[1].className = "card-punchline";
        }
      }
  });

});

function drawTen() {
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then(response => {
        if (response.status !== 200) {
          return alert(`Error: ${response.status}. Please try again later.`);
        } else {
          return response.json();
        }
    })
    .then(jokesArr => {
        jokesArr.forEach(jokeObj => {
            makeCard(jokeObj);
        });
    })
    // TODO MAKE CATCH 
}

const makeCard = (jokeObj) => {
  let cardsFlex = document.querySelector("#cards-flex");

  let buildingCard = document.createElement("div");
  buildingCard.className = "joke-card";
  let buildingCardSetup = document.createElement("div");
  buildingCardSetup.className = "card-setup";
  buildingCardSetup.innerText = jokeObj.setup;
  let buildingCardPunch = document.createElement("div");
  buildingCardPunch.className = "card-punchline";
  buildingCardPunch.innerText = jokeObj.punchline;
      
  buildingCard.appendChild(buildingCardSetup);
  buildingCard.appendChild(buildingCardPunch);
  cardsFlex.appendChild(buildingCard);

}