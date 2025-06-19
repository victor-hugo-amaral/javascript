/*Um array e uma variavelque tem varios elementos 
cada elemento e composto por seu valor e por uma chave de indetificacao
*/
let num = [1, 2, 3, 5, 8, 7]
num.push(9)
console.log(`Nosso vetor e o ${num}`)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor  esta na posicao ${pos}`)
}
//A order entre o push e  o sort influencia na hora de colocar em ordem crecente
//ex:(se sort vim primero que o push nao vai colocar totalmente em onder crecente)
//console.log(`O vetor tem ${num.length}`) = ele fala o complimento do array ou vetor
//num.sort() = ele colocas numero em orde crecente
//num [3] = 6 isso significa que ele receber mais um indice queseria o '6'
//num.push(8) ele acrecenta o  numero na ultima posicao
//console.log(num[0]) = Esse so mostra o elemento que seria o numero '1'
//valor.indexOf() = ele procura o vlor que digitou