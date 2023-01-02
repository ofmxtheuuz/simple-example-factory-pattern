// factory add model person
function AddPerson(email, username){
    return {
        email: email,
        username: username
    }
}

let persons = []

persons.push(
    AddPerson("matheus@gmail.com", "Matheus")
)

persons.push(
    AddPerson("mariazinha@gmail.com", "Mariazinha")
)
console.log(persons)
