// ("https://jsonplaceholder.typicode.com/users/1")   

// 1. Then promise
fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
    })
})
