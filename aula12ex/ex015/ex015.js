const botao = document.getElementById("botao")
botao.addEventListener("click", verificar)

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let anoInput = document.getElementById('txtano')
    let res = document.getElementById('res')

    //length ele retonar o numeros de caracteris dentro do input
    if (anoInput.value == 0 || Number(anoInput.value) >= ano) {
        alert('Ano invalido por favor verificar o ano!!')
        return
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(anoInput.value)
        let genero = ''
        let img = document.createElement('img')
        // checked == Marcado ou checado
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 1 && idade < 10) {
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovenh.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem.png')
            } else {
                img.setAttribute('src', 'img/velho.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 1 && idade < 10) {
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovenm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.png')
            } else {
                img.setAttribute('src', 'img/velha.png')
            }
        } else {
            alert('Escolha um genero')
        }
        //appendChild = Adiciona o elemento dentro dos corchetes
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
