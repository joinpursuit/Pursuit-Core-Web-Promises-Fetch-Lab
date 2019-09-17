document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    //fetchJokes(); //for MVP
    console.log("DOMContentLoaded listener is done")
    let refreshJokesButton = document.querySelector("#refreshJokes");
    fetchJokes();
    refreshJokesButton.addEventListener('click', () => {
        window.location.reload();
    })
    // document.getElementById('selectID').addEventListener('change', function (e) {
    //     if (e.target.value === "programming") {
    //         fetchProgrammingJokes();
    //     } else if(e.target.value === "general") {
    //         fetchGeneralJokes();
    //     } else if(e.target.value === "random") {
    //         fetchRandomJokes();
    //     }
    //   });
})

const fetchJokes = () => { //this code is for the MVP
    console.log("fetchJokes started");
    fetch("https://official-joke-api.appspot.com/random_ten")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(dataObj => {
            console.log("dataObj: ", dataObj);
            renderJokes(dataObj);
        })
        .catch(err => {
            console.log("err: ", err);
        })
    console.log("fetchJokes finished");
} 

// const fetchProgrammingJokes = () => {
//     console.log("fetchProgrammingJokes started");
//     fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .then(dataObj => {
//             console.log("dataObj: ", dataObj);
//             renderJokes(dataObj);
//         })
//         .catch(err => {
//             console.log("err: ", err);
//         })
//     console.log("fetchProgrammingJokes finished");
// } 

// const fetchGeneralJokes = () => {
//     console.log("fetchGeneralJokes started");
//     fetch("https://official-joke-api.appspot.com/jokes/general/ten")
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .then(dataObj => {
//             console.log("dataObj: ", dataObj);
//             renderJokes(dataObj);
//         })
//         .catch(err => {
//             console.log("err: ", err);
//         })
//     console.log("fetchGeneralJokes finished");
// } 

// const fetchRandomJokes = () => {
//     console.log("fetchRandomJokes started");
//     fetch("https://official-joke-api.appspot.com/random_ten")
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .then(dataObj => {
//             console.log("dataObj: ", dataObj);
//             renderJokes(dataObj);
//         })
//         .catch(err => {
//             console.log("err: ", err);
//         })
//     console.log("fetchRandomJokes finished");
// } 

const renderJokes = (jokes) => {
    let ul = document.querySelector("#unorderedList");
    let jokeID = 0;
    let punchLineID = 0;
    for(let i = 0; i < jokes.length; i++) {
        let jokeLi = document.createElement("li");
        let punchLineParagraph = document.createElement("p");
        jokeLi.id = `joke${jokeID}`;
        punchLineParagraph.id = `punchLine${punchLineID}`;
        jokeLi.innerText = jokes[i].setup;
        punchLineParagraph.innerText = jokes[i].punchline;
        ul.appendChild(jokeLi);
        ul.appendChild(punchLineParagraph);
        jokeID++;
        punchLineID++;
    }
    jokeID = 0;
    punchLineID = 0;

    let punchLineCount = 0;
    for(let i = 0; i < jokes.length; i++) {
        document.getElementById(`punchLine${punchLineCount}`).style.visibility = "hidden";
        punchLineCount++;
    }
    punchLineCount = 0;

    joke0.addEventListener('click', () => {
        document.getElementById("punchLine0").style.visibility = "visible";
    });

    joke1.addEventListener('click', () => {
        document.getElementById("punchLine1").style.visibility = "visible";
    });

    joke2.addEventListener('click', () => {
        document.getElementById("punchLine2").style.visibility = "visible";
    });

    joke3.addEventListener('click', () => {
        document.getElementById("punchLine3").style.visibility = "visible";
    });

    joke4.addEventListener('click', () => {
        document.getElementById("punchLine4").style.visibility = "visible";
    });

    joke5.addEventListener('click', () => {
        document.getElementById("punchLine5").style.visibility = "visible";
    });

    joke6.addEventListener('click', () => {
        document.getElementById("punchLine6").style.visibility = "visible";
    });

    joke7.addEventListener('click', () => {
        document.getElementById("punchLine7").style.visibility = "visible";
    });

    joke8.addEventListener('click', () => {
        document.getElementById("punchLine8").style.visibility = "visible";
    });

    joke9.addEventListener('click', () => {
        document.getElementById("punchLine9").style.visibility = "visible";
    });
}