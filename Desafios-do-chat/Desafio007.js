// console.log('Inicio do códego')
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} numero é par `)
//     } else {
//         console.log(`${i} numero é impar `)
//     }
// } console.log(`Fim do códego`)const botao = document.getElementById("botao")
botao.addEventListener('click', tabuada)
function tabuada() {
    let numero = window.prompt('Digite um numero ?')
    let res = document.getElementById('res')
    if (numero === "") {
        alert('Numero digitado invalido!')
    }
    numero = Number(numero)
    res.innerHTML = ''
    for (let i = 1; i <= 10; i++) {
        res.innerHTML += `${numero} x ${i} = ${numero * i}<br> `

    }
}
/*
const botao = document.getElementById("botao")
botao.addEventListener('click', tabuada)

function tabuada() {
    let numero = window.prompt('Digite um número:')
    let res = document.getElementById('res')

    if (numero === "" || isNaN(numero)) {
        alert('Número digitado inválido!')
        return
    }

    numero = Number(numero)
    res.innerHTML = '' // limpa antes de mostrar nova tabuada

    for (let i = 1; i <= 10; i++) {
        res.innerHTML += `${numero} x ${i} = ${numero * i} <br>`
    }
}
*/