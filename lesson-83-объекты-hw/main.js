const userDescription = {
    name: 'amir',
    age: 17,
}
console.log(userDescription)

console.log('------------------')

const user = {
    username: {
        age: 17,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}
user.username.sayHello('User')

console.log('------------------')

const users = [
    {
        name: 'alex',
        age: 22,
        isAdmin: true
    },
    {
        name: 'jessie',
        age: 32,
        isAdmin: false
    },
    {
        name: 'tom',
        age: 19,
        isAdmin: false
    },
    {
        name: 'sarah',
        age: 27,
        isAdmin: false
    },
    {
        name: 'john',
        age: 45,
        isAdmin: true
    },
]

let regularUsers = 0

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        regularUsers = regularUsers + 1
    }
}
console.log(regularUsers)