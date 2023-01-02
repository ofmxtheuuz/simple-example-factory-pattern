// factory add model person
function AddPerson(email, username){
    return {
        email: email,
        username: username
    }
}

let persons = []

// add new person (with factory)
persons.push(
    AddPerson("matheus@gmail.com", "Matheus")
)

// add new person (with factory)
persons.push(
    AddPerson("mariazinha@gmail.com", "Mariazinha")
)
console.log(persons)
