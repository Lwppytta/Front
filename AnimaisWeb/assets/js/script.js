var nome = window.document.getElementById('nome');
var nomeOk = false;

function validarNome(){
    let txtNome = document.querySelector('#TXTNome');
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

function enviar(){
    if(nomeOk == true){
        alert('Formulário enviando com sucesso!'+nome.value)
    } else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}