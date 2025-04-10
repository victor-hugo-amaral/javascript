const botao = document.getElementById('verificar')
botao.addEventListener('click', tabuada)
function tabuada() {
    // sempre fazer o if primeiro e depois converter o texto para o numero
    let num = document.getElementById('txtnum')
    let tabua = document.getElementById('tabu')
    if (num.value == "") {
        alert('Digite um numero valido')
    } else {
        tabua.innerHTML = '' //Esta servindo para limpar o conteudo HTML para nao acumular o texto
        num = Number(num.value)
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tabua.appendChild(item)
        }
    }
}
/*
const botao = document.getElementById('verificar')
botao.addEventListener("click", tabuada)
function tabuada() {
    let numInput = document.getElementById('txtnum')
    let tabua = document.getElementById('tabu')

    if (numInput.value === "") {
        alert('Digite um numero correto')
        return
    }
    tabua.innerHTML = ""
    let num = Number(numInput.value)
    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${num}x${c} = ${num * c} `
        tabua.appendChild(item)//apricamos o item no select que e o option

    }
}
*/