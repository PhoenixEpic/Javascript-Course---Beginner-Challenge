let users = [
    {
        username: "Tyler",
        email: "tyler@email.com",
        password: '1234'
    },
    {
        username: 'Eileen',
        email: 'eileen@email.com',
        password: '4321'
    }
]

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);
            if (users[i].password === password) {
                console.log('Login successful')
            }
            else {
                console.log('Login failed')
            }
            return;
        }
    }
    console.log('could not find valid email')
}

login('tyler@email.com', '1234')

// Quiz answer

function register(username, email, password, subscriptionStatus, discordId, lessonsCompleted)