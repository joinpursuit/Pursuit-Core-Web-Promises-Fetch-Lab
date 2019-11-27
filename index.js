let rightUsername; 

document.addEventListener("DOMContentLoaded", () => {
    let loginUsername = document.querySelector("#log");
    let loginDiv = document.querySelector("#loginDiv");
    let logedinDiv = document.querySelector("#logedinAs");

    logedinDiv.style.display = "none"
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let login = document.querySelector("#login");
    login.addEventListener("click", () => {
        let username = loginUsername.value;
        if(username === "") {
            window.alert("PLEASE ENTER A USERNAME");
        } else {
            fetch(`https://fsw62-todos-api.herokuapp.com/api/users/${username}`)
                .then(response => {
                    if (!response.ok) {
                      throw Error(response.statusText);
                    }
                    return response.json();
                  })
                  .then(res => {
                        rightUsername = res.payload.username;
                        loginDiv.style.display = "none";
                        logedinDiv.style.display = "block";
                        logedinDiv.innerText = `WELCOME ${rightUsername.toUpperCase()}`;
                        loadAllTodos();
                  })
                  .catch(err => {
                    window.alert(`USERNAME: ${err}`);
                  });
        }
    })
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let signin = document.querySelector("#signin");
    signin.addEventListener("click", () => {
        let usrname = loginUsername.value;
        if(usrname === "") {
            window.alert("PLEASE ENTER A USERNAME");
        } else {
            let reqObject = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'username': `${usrname}`})
            }
            fetch(`https://fsw62-todos-api.herokuapp.com/api/users/signup`, reqObject)
                .then(response => {
                    if (!response.ok) {
                      throw Error(response.statusText);
                    }
                    return response.json();
                  })
                  .then(res => {
                        rightUsername = usrname;
                        loginDiv.style.display = "none";
                        logedinDiv.style.display = "block";
                        logedinDiv.innerText = `WELCOME ${rightUsername.toUpperCase()}`;
                        loadAllTodos();
                  })
                  .catch(err => {
                    window.alert(`USERNAME: ${err}`);
                  });
        }
    })
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let myForm = document.querySelector("#submitInput");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let todoItem = document.querySelector("#item");
        let todoTask = todoItem.value;
        if (todoTask === "") {
            window.alert("Invalid Input, PLEASE ENTER A TODO");
        } else {
            let todoRequest = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'owner': `${rightUsername}`, 'text': `${todoTask}`, 'completed': false})
            }
            fetch(`https://fsw62-todos-api.herokuapp.com/api/todos/`, todoRequest)
                .then(response => {
                    if (!response.ok) {
                      throw Error(response.statusText);
                    }
                    return response.json();
                  })
                  .then(res => {
                        loadAllTodos();
                  })
                  .catch(err => {
                    window.alert(`ISSUE WITH THE REQUEST: ${err}`);
                  });
        }
        todoItem.value = ""
    })
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let selectionDiv = document.querySelector("#selections");
    selectionDiv.addEventListener("change", () => {
        loadAllTodos()
    })
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let myList = document.querySelector("#myList");
    myList.addEventListener("change", (event) => {
        let todoId = event.target.id;
        let todoCompleted = event.target.checked;
        
        let link = `https://fsw62-todos-api.herokuapp.com/api/todos/${todoId}`;
        let patchRequest = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'completed': todoCompleted})
        }

        fetch(link, patchRequest)
                .then(response => {
                    if (!response.ok) {
                      throw Error(response.statusText);
                    }
                    return response.json();
                  })
                  .then(res => {
                        loadAllTodos();
                  })
                  .catch(err => {
                    window.alert(`COULD NOT UPDATE: ${err}`);
                  });
    })
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    myList.addEventListener("click", (event) => {
        if (event.target.type === "submit") {
            let todoId = event.target.id;
            todoId = todoId.slice(4);
            
            let link = `https://fsw62-todos-api.herokuapp.com/api/todos/${todoId}`;
            let patchRequest = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
    
            fetch(link, patchRequest)
                    .then(response => {
                        if (!response.ok) {
                          throw Error(response.statusText);
                        }
                        return response.json();
                      })
                      .then(res => {
                            loadAllTodos();
                      })
                      .catch(err => {
                        window.alert(`COULD NOT UPDATE: ${err}`);
                      });
        }
    })
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}) ///////////// END OF DOMContentLoaded


const loadAllTodos = () => {
    let allMyTodos;
    let link = `https://fsw62-todos-api.herokuapp.com/api/todos?owner=${rightUsername}`

    let allChoices = document.querySelectorAll("input[type='radio']");
    let showSelect;
    for (let i = 0; i < allChoices.length; i++) {
        if (allChoices[i].checked) {
            showSelect = allChoices[i].value;
        }
    }
    if (showSelect === "done") {
        link = `https://fsw62-todos-api.herokuapp.com/api/todos?owner=${rightUsername}&completed=true`
    }
    if (showSelect === "pending") {
        link = `https://fsw62-todos-api.herokuapp.com/api/todos?owner=${rightUsername}&completed=false`
    }

    fetch(link).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
        .then(res => {
            allMyTodos = res.payload
            displayTodos(allMyTodos);
        })
        .catch(err => {
            window.alert(`ERROR: ${err}`);
        });
};

const displayTodos = (array) => {
    let toDoList = document.querySelector("#myList");

    let oldToDoList = toDoList.querySelector("input");
    if (oldToDoList) {
        toDoList.innerHTML = "";
    }

    for (let element of array) {
        let newDiv = document.createElement("div")
        toDoList.appendChild(newDiv)

        let todoItem = document.createElement("input");
        todoItem.type = "checkbox";
        todoItem.id = element.id;

        let label = document.createElement('label')
        label.htmlFor = element.id;
        label.innerText = element.text;
        if (element.completed) {
            label.style.textDecoration = "line-through";
            todoItem.checked = true;
        }

        let deleteTask = document.createElement("button");
        deleteTask.id = `dlt-${element.id}`;
        deleteTask.innerText = "x"

        newDiv.appendChild(todoItem);
        newDiv.appendChild(label);
        newDiv.appendChild(deleteTask)
    }
}

// const myFetch = (requestObject) => {
//     //requestObject{URL, method:"method"....}
//     fetch(requestObject)
//       .then(response => {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .then(res => {
//         return res;
//       })
//       .catch(err => {
//         window.alert(`ERROR: ${err}`);
//       });
// }

// const fetchUsers = (username) => {
//     let request = new Request(`https://fsw62-todos-api.herokuapp.com/api/users/${username}`, {method: "GET"});
//     let user = myFetch(request);

//     console.log(user);
//     if (user) {
//         rightUsername = user;
//     } else {
//         console.log("NOP")
//         // window.alert("Invalid User Name, Please try again");
//     }
// }