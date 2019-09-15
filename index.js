let jokeTracker = [];

document.addEventListener('DOMContentLoaded', () => {
	let jokeButton = document.getElementById('joke-generator');
	jokeButton.addEventListener('click', getSomeJokes);
	let jokeBoard = document.getElementById('main-content-container');
	jokeBoard.addEventListener('click', (e) => {
		togglePunchline(e.target);
	})
})




function getSomeJokes(){
	fetch('https://official-joke-api.appspot.com/random_ten').
	then(res => {
		if(res.status === 200){
			return res.json();
		}
		else{
			throw Error('This doesnt work!!!');
		}
	})
	.then(res => {
		let counter = 1;
		for(let i = 0; i < res.length; i++){
			if(counter < 4){
				if(jokeTracker.indexOf(res[i].id) === -1){
					let list = document.getElementById('joke-select');
					let jokeType = list.options[list.selectedIndex].text;
					let joke = document.createElement('p');
					let punchline = document.createElement('p');
					joke.innerText = res[i].setup;
					punchline.innerText = res[i].punchline;
					punchline.style.display = 'none';
					let jokeCard = document.querySelector(`.joke-${counter}`);
					while (jokeCard.firstChild) {
					   jokeCard.removeChild(jokeCard.firstChild);
					}
					jokeCard.appendChild(joke);
					jokeCard.appendChild(punchline);
					counter++;
					jokeTracker.push(res[i].id);
				}
				else{
					continue;
				}
			}
			else{
				break;
			}
		
	}
	})
}


function togglePunchline(jokeBox){
	let punchline = jokeBox.lastChild;
	if(punchline.style.display === 'none'){
		punchline.style.display = 'block';
	}
	else{
		punchline.style.display = 'none';
	}

}

