document.addEventListener("DOMContentLoaded", () => {
    let joke1 = document.querySelector("#jokes")

    fetch("https://official-joke-api.appspot.com/random_joke").then(res=>{
        if(!res.ok){
            throw Error(res.statusText="its Not Ok")
        }
        
        return res.json()
    }).then(res =>{
        joke1.innerText = res.setup
    }).catch(err =>{
        
    })

})

//     let joke2 = document.querySelector("#punchline")
//     joke2.addEventListener("click", () => {
//     fetch(("https://official-joke-api.appspot.com/random_joke").then(res=>{
//         if(!res.ok){
//             throw Error(res.statusText ="it's not ok")
//         }
//         debugger
//         return res.json()
//     }).then(res =>{
//         joke2.innerText = res.punchline
//     }).catch(err =>{
//         debugger
//     }))
// })
