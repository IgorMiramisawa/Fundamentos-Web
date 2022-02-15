/*

Case Sensitive = reconhece letras maiusculas e minusculas
por Tag:getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/
let mapa = document.querySelector ('#mapa')
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width= "100%"

function  validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    } 
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = 'E-mail inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'E-mail válido'
        txt.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto () {
    let txt = document.querySelector ('#txtAssunto')
    if (assunto.value.length >= 100) {
        txt.innerHTML = 'O seu texto é muito grande digite menos que 100 caracteres'
        txt.style.color = 'red'
        txt.style.display = 'block'
    } else {
        txt.style.display = 'none'
        txt.style.color = 'green'
        assuntoOk = true
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso !!')
    } else {
        alert ('Favor preencha corretamente o formulário')
    }

}

function zoom () {
mapa.style.width = '800px'
mapa.style.height = '600px'
}

function mapaNormal () {
mapa.style.width = '500px'
mapa.style.height ='500px'
}

