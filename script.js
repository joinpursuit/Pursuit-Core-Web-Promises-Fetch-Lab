let jokeHistory = [];

const addCard = (jokes) => {
    // console.log(jokes);
    // console.log(jokes.length);
    // console.log(typeof jokes);
    makeCard(jokes);
}

const makeCard = (joke) => {
    const root = document.querySelector('#root');
    const container = document.createElement('div');
    const setup = document.createElement('p');
    const punchline = document.createElement('p');

    // console.log(joke);
    setup.innerText = joke.setup;
    setup.classList.add('card');
    // setup.hidden = true;
    punchline.innerText = joke.punchline;
    // punchline.hidden = true;
    punchline.classList.add('punchline');
    container.dataset.toggle = true;

    container.appendChild(setup);
    container.appendChild(punchline);
    container.classList.add('card');
    root.appendChild(container);
}


const fetchTenJokes = (type = 'random', num = 3) => {
    // console.log(num);
    // if (jokeHistory.length === 372) {
    //     document.querySelector('#random-btn').innerText = 'NO MORE JOKES';
    //     break;
    // }
    if (type === 'random') {
        fetch(`https://fsw62-jokes-api.herokuapp.com/jokes/random/${num}`)
            .then(data => {
                return data.json();
            })
            .then(jokes => {
                // console.log(jokes);
                let counter = 0;
                for (let i = 0; i < jokes.length; i++) {
                    if (jokeHistory.includes(jokes[i].id)) {
                        continue;
                    } else {
                        addCard(jokes[i]);
                        jokeHistory.push(jokes[i].id);
                    }
                }

                if (counter > 0) {
                    fetchTenJokes(type, counter);
                }
            })
            .catch(error => {
                console.log(error);
            })
    } else {
        fetch(`https://fsw62-jokes-api.herokuapp.com/jokes/${type}/random/`)
            .then(data => {
                return data.json();
            })
            .then(jokes => {
                // console.log(jokes);

                if (jokeHistory.includes(jokes[0].id)) {
                    num = num + 1;
                    // continue;
                } else {
                    addCard(jokes[0]);
                    jokeHistory.push(jokes[0].id);
                }

                if (num == 1) {
                    return;
                } else {
                    return fetchTenJokes(type, num - 1);
                }

            })
            .catch(error => {
                console.log(error);
            })
    }

}

fetchTenJokes('random', 3);

window.addEventListener('click', event => {
    // console.dir(event.target.parentNode);
    // console.log(event.target.parentNode.dataset.toggle);
    if (event.target.tagName === 'P') {
        if (event.target.parentNode.dataset.toggle == 'false') {
            // event.target.parentNode.childNodes[1].hidden = true;
            event.target.parentNode.style.transition = '1s ease all';
            event.target.parentNode.style.height = '150px';
            event.target.parentNode.style.marginBottom = '150px';
            event.target.parentNode.style.top = '0px';
            event.target.parentNode.style.boxShadow = 'none';
            event.target.parentNode.dataset.toggle = 'true';
            // console.log('Inside', event.target.parentNode.dataset.toggle);
        } else {
            // event.target.parentNode.childNodes[1].hidden = false;
            event.target.parentNode.style.transition = '1s ease all';
            event.target.parentNode.style.height = '250px';
            event.target.parentNode.style.marginBottom = '50px';
            event.target.parentNode.style.top = '0px';
            event.target.parentNode.style.boxShadow = '0px 12px 5px -10px white';
            event.target.parentNode.dataset.toggle = 'false';
            // console.log('Inside', event.target.parentNode.dataset.toggle);
        }

    } else if (event.target.className === 'card') {
        if (event.target.dataset.toggle == 'false') {
            // event.target.childNodes[1].hidden = true;
            event.target.style.transition = '1s ease all';
            event.target.style.height = '150px';
            event.target.style.marginBottom = '150px';
            event.target.childNodes[1].style.top = '0px';
            event.target.style.boxShadow = 'none';
            event.target.dataset.toggle = 'true';
            // console.log('Inside', event.target.parentNode.dataset.toggle);
        } else {
            // event.target.childNodes[1].hidden = false;
            event.target.style.transition = '1s ease all';
            event.target.style.height = '250px';
            event.target.style.marginBottom = '50px';
            event.target.childNodes[1].style.top = '0px';
            event.target.style.boxShadow = '0px 12px 5px -10px white';
            event.target.dataset.toggle = 'false';
            // console.log('Inside', event.target.parentNode.dataset.toggle);
        }
    }
    // console.log(event.target.parentNode.dataset.toggle);
})

document.querySelector('#random-btn').addEventListener('click', () => {
    document.querySelector('#root').innerHTML = '';
    const selectValue = document.querySelector('#type').value;
    const numOfJokes = document.querySelector('#numOfJokes').value;

    // console.log(selectValue)
    // console.log(numOfJokes)

    fetchTenJokes(selectValue, numOfJokes);
})
