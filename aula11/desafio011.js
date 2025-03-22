const botao = document.getElementById('botao')
botao.addEventListener("click", verificar)
function verificar() {
    let paisinput = document.getElementById("txtpais")
    let res = document.getElementById("res")
    let pais = paisinput.value.trim().toLowerCase()

    if (!isNaN(pais) || pais === "") {
        alert('Digite um pais valido.')
        return
    }
    if (pais === 'brasil') {
        res.innerHTML = 'Voce e <strong>Brasileiro</strong>'
    } else {
        res.innerHTML = 'Voce e <strong>Estrageiro</strong>'
    }
}
