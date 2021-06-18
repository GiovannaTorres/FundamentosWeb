
//inputs no HTML
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
//boolean para validar
let nomeOk = false
let emailOk = false
let assuntoOk = false
//mapa no HTML
let mapa = document.querySelector('#mapa')


function validaNome(){

    let msgNome = document.querySelector('#msgNome') //div reservada para função imprimir mensagem
    
    if(nome.value.length < 3) {
        msgNome.innerHTML='Nome inválido (digite um nome com mais de 3 caracteres)'
        msgNome.style.color='red'
    } else {
        msgNome.innerHTML="Nome válido"
        msgNome.style.color='green'

        nomeOk=true
    }

}

function validaEmail(){

    let msgEmail = document.querySelector('#msgEmail') //div reservada para função imprimir mensagem
    
    if(email.value.indexOf('@')==-1 || email.value.indexOf('.com')==-1 && email.value.indexOf('.org')==-1) {
        msgEmail.innerHTML='Email inválido'
        msgEmail.style.color='red'
    } else {
        msgEmail.innerHTML="Email válido"
        msgEmail.style.color='green'

        emailOk=true
    }

}

function validaAssunto(){

    let msgAssunto = document.querySelector('#msgAssunto') //div reservada para função imprimir mensagem
    
    if(assunto.value.length >= 200) {
        msgAssunto.innerHTML='Texto inválido (envie uma mensagem de até 200 caracteres)'
        msgAssunto.style.color='red'
    } else {
        msgAssunto.innerHTML="Texto válido"
        msgAssunto.style.color='green'

        assuntoOk=true
    }

}

function enviar(){

    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert("Formulário enviado com sucesso!")
    }else if(assunto.value.length <= 0){
        alert("Envie uma mensagem no campo Assunto")
    }else{
        alert("Preencha os campos corretamente antes de enviar")
    }
}

function mapaNormal(){

    mapa.style.height='200px'
    mapa.style.width='700px'

}

function mapaZoom(){

    mapa.style.height='500px'
    mapa.style.width='700px'

}