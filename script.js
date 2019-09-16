const makeCard = (jokes) => {
    const root = document.querySelector('#root');

    jokes.forEach(joke => {
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
    })
}

const fetchTenJokes = () => {
    fetch('https://fsw62-jokes-api.herokuapp.com/jokes/random/6')
        .then(data => {
            return data.json();
        })
        .then(jokes => {
            // console.log(jokes);
            makeCard(jokes);
        })
}

fetchTenJokes();

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
    fetchTenJokes();
})