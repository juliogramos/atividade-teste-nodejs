const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3125;

let users = ["ismaelseidel"]
let contas = []

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/check-user', (req, res) => {    
    let username = req.body.username    
    if(users.indexOf(username) > -1) {
        res.status(200).json({userExists: true})
    } else {
        res.status(200).json({userExists: false})
    }
})

app.post('/new-account', (req, res) => {    
    let conta = req.body
    contas.push(conta)
    res.status(200).json({valido: true})
    console.log(contas)
})

app.post('/login', (req, res) => {    
    let email = req.body.email
    let password = req.body.senha

    let found = false
    let conta;

    for (let i = 0; i < contas.length; i++) {
        if (email == contas[i].email) {
            found = true;
            conta = contas[i]
            break
        }
    }

    if (found == false) {
        res.status(200).json({  valido: false, 
                                errorStatus: "Conta não existe!"})
        return
    }

    if (conta.password == password) {
        res.status(200).json({valido: true, userInfo: conta})
    } else {
        res.status(200).json({  valido: false, 
            errorStatus: "Senha incorreta!"})
    }
})

app.listen(port, ()=>console.log("Listening to " + port))