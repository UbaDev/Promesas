let user = {
    name: "Ubaldo",
    age: 25
}

fetch('https://regres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        "Content-type": "application/json"
    }
})
.then(res => res.json())
.then(data => console.log)
.catch(err => console.log("Error: ", err))