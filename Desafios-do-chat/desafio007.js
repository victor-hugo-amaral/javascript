const botao = document.getElementById('geral')
botao.addEventListener('click', gerarperfil)
function gerarperfil() {
    let nacimento = document.getElementById('datadenacimento')
    let data = new Date()
    let dataatual = data.getFullYear()
    let res = document.getElementById('res')

    if (nacimento.value == '' || nacimento.value > dataatual) {
        window.alert('Data Invalida')
    }
    let idade = dataatual - Number(nacimento.value)
    let aventuras = document.getElementsByName('aventura')
}