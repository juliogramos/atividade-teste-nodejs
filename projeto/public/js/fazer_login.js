let statusLogin = document.getElementById("statusLogin")
let loginEmail = document.getElementById("login-email")
let loginSenha = document.getElementById("login-password")

function checaVazio() {
    if (loginEmail.value == "" || loginSenha.value == "") {
        statusLogin.innerHTML = "Campos não devem estar vazios!"
        return false
    }
    return true
}

async function fazLogin() {
    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: loginEmail.value,
            senha: loginSenha.value
        })
    }

    const result = await fetch("http://testeservidor.julio.g.r.vms.ufsc.br:3125/login", options);
    const serverResponse = await result.json();
    if (serverResponse.valido) {
        statusLogin.innerHTML = ""
        console.log("Logado")
        mostrarApenasLogado(serverResponse.userInfo)
    } else {
        statusLogin.innerHTML = serverResponse.errorStatus
    }
}