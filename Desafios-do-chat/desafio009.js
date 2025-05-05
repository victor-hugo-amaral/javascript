function somarArray(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma = soma + arr[i]
    }
    return soma
}
console.log(somarArray([4, 5, 7, 4, 2]))