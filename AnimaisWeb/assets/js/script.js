let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

var nomeOk = false

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