const botao = document.getElementById('verificar')
botao.addEventListener('click', verificar)
function verificar() {
    let inputInicio = document.getElementById('inicio')
    let inputFim = document.getElementById('fim')
    let inputPasso = document.getElementById('passo')
    let res = document.getElementById('res')

    if (Number(inputInicio.value.length) == 0 || Number(inputFim.value.length) == 0 || Number(inputPasso.value.length) == 0) {
        alert('[ERRO]Preencha os dados')
        return
    }
    res.innerHTML += 'Contando...<br>'

    let i = Number(inputInicio.value)
    let f = Number(inputFim.value)
    let p = Number(inputPasso.value)
    if (p <= 0) {
        alert('ERRO!Passo vai ser convertido para 1!')
        p = 1
    }
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c}\u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3F4}`
}