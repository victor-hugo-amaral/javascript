/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
/*
let agora = new Date()
let diasem = agora.getDay()

switch (diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    }*/
/*Peça ao usuário para inserir uma nota(de 0 a 10).
 
Use a estrutura switch para classificar a nota nos seguintes conceitos:
 Objetivo: Escreva um programa que classifique a nota de um aluno em conceitos (A, B, C, D ou F) com base em uma escala de 0 a 10.
A: 9 a 10
 
B: 7 a 8.9
 
C: 5 a 6.9
 
D: 3 a 4.9
 
F: 0 a 2.9
 
Exiba o conceito correspondente à nota inserida.*/
let nota = 1
// Arredonda a nota para baixo (floor) para usar no switch
let conceito = Math.floor(nota);
switch (conceito) {
    case 10:
    case 9:
        console.log("A");
        break;
    case 8:
    case 7:
        console.log('B');
        break;
    case 6:
    case 5:
        console.log('C');
        break;
    case 4:
    case 3:
        console.log('D');
        break;
    case 2:
    case 1:
    case 0:
        console.log('F');
        break;
    default:
        console.log("Nota invalida a nota tem que esta entre 0 a 10");
        break
    //  ; = FINALISA CADA BREAK E O CONSOLE.LOG
}