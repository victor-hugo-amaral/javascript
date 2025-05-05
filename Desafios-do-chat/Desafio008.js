function agruparPorParidade(arr) {//é o parâmetro. Nesse caso, a função espera receber um array, e você está dando o nome de
    let impar = []
    let par = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]

        if (num % 2 === 0) {
            par.push(num)
        } else {
            impar.push(num)
        }
    }
    return par.concat(impar)
}
console.log(agruparPorParidade([5, 3, 6, 8, 4, 1]));