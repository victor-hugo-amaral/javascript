let botao = document.getElementById('botao')
botao.addEventListener("click", resultado)
function resultado() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO!]Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img') //Cria o img
        img.setAttribute('id', 'foto') // Cria um id e coloca o nome foto no id
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'img/menino.png')
            } else if (idade <= 21) {
                //Joven
                img.setAttribute('src', 'img/jovenh.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/homem.png')
            } else {
                img.setAttribute('src', 'img/velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        } else if (idade < 50) {
            if (idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'img/menina.png')
            } else if (idade <= 21) {
                //Joven
                img.setAttribute('src', 'img/meninam.png')
                //adulto
                img.setAttribute('src', 'img/mulher.png')
            } else {
                img.setAttribute('src', 'img/velha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
        res.appendChild(img) //Aqui ele aplica a imagem no HTML
    }
}