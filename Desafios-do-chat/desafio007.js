const botao = document.getElementById('geral')
botao.addEventListener('click', gerarperfil)
function gerarperfil() {
    let nacimento = document.getElementById('datadenacimento')
    let data = new Date()
    let dataatual = data.getFullYear()
    let res = document.getElementById('res')

    if (nacimento.valeu || nacimento.value > dataatual) {
        alert('Data Invalida')
    }
    let idade = dataatual - Number(nacimento.value)
    let aventuras = document.getElementsByName('aventura')
}