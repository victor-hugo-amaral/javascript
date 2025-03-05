// console.log('Inicio do códego')
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} numero é par `)
//     } else {
//         console.log(`${i} numero é impar `)
//     }
// } console.log(`Fim do códego`)
let botao = document.getElementById('botao')
botao.addEventListener("click", verificar)
function verificar() {
    let res = document.querySelector("div#res")
    let numero = Number(window.prompt('Digite um numero'))
    if (numero == "") {
        alert('Digite um numero valido')
    } else {
        for (let i = 1; i <= 10; i++) {
            res.innerHTML += `${numero} x ${i} = ${numero * i}<br>`
        }
    }
}