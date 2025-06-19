const botao = document.querySelector('button#botao')
botao.addEventListener("click", verificar)

function verificar() {
    let nainput = document.getElementById('txtna')
    let res = document.getElementById('res')
    let nacio = nainput.value.trim().toLowerCase()
    if (nacio == "") {
        alert('Digite sua nacionalidade')
        return
    }
    res.innerHTML = `Voce mora em ${nainput}`
    if (nacio == 'brasil') {
        res.innerHTML = 'Voce e brasileiro'
    } else {
        res.innerHTML = 'Voce e estrangeiro'
    }

}