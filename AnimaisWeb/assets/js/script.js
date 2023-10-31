let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML= "Nome inválido."
        txtNome.style.color = 'red'
        nomeOk= false
    } else{
        txtNome.innerHTML= "Nome válido!"
        txtNome.style.color = 'green'
        nomeOk= true
    }
}

let emailOk = false
function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML= "Email inválido."
        txtEmail.style.color = 'red'
        emailOk= false
    } else{
        txtEmail.innerHTML= "Email válido!"
        txtEmail.style.color = 'green'
        emailOk= true
    }
}

let mensagemOk = false
function validarMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if(mensagem.value.length >= 100){
        txtMensagem.innerHTML= "Texto muito grande, digite no maximo 100 caracteres."
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
        mensagemOk= false
    } else{
        txtMensagem.style.display = 'none'
        mensagemOk= true
    }
}