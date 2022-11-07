function aplicarNaTela(tela, mostrar) {
    if (mostrar) {
        tela.classList.remove("oculto")
    } else {
        tela.classList.add("oculto")
    }
}

function aplicarNasQuatroTelas(home, login, conta, logado) {
    aplicarNaTela(document.getElementById("login-body"), login)
    aplicarNaTela(document.getElementById("novaConta"), conta)
    aplicarNaTela(document.getElementById("divHome"), home)
    aplicarNaTela(document.getElementById("areaUsuario"), logado)
}

function mostrarApenasHome() {
    aplicarNasQuatroTelas(true, false, false, false)
}

function mostrarApenasLogin() {
    aplicarNasQuatroTelas(false, true, false, false)
}

function mostrarApenasConta() {
    aplicarNasQuatroTelas(false, false, true, false)
}

function mostrarApenasLogado(userJson) {
    let nomeCompleto = "Seja bem vindo " + userJson.name + " " + userJson.lastName + "!"
    document.getElementById("displayNome").innerHTML = nomeCompleto
    aplicarNasQuatroTelas(false, false, false, true)
}

function mostrarTelaInicial() {
    switch (telaInicial) {
        case "Login": mostrarApenasLogin(); break;
        case "CriarConta": mostrarApenasConta(); break;
        case "Home":
        default: mostrarApenasHome()
    }
}

const telaInicial = "CriarConta"
mostrarTelaInicial()