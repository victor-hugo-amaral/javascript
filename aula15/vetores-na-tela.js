let valor = [2, 6, 9, 7, 3]
/*
console.log(valor)
console.log(valor[0])
console.log(valor[1])
console.log(valor[2])
console.log(valor[3])
console.log(valor[4])
*/
/*
for (let pos = 0; pos < valor.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valor.sort()[pos]} `)
}
*/
for (let pos in valor) {
    console.log(`A posicao ${pos} tem o valor ${valor.sort()[pos]} `)
}
//para cada posicao em valor
//valor.indexOf() = ele procura o vlor que digitou
console.log()