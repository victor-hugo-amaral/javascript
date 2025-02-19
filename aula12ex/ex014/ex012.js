window.addEventListener('load', carregar)

function carregar() {
    let img = document.getElementById('imagem')
    let msg = document.getElementById('msg')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()

    if (hora >= 0 && hora < 12) {
        // Bom dia
        let horaExata = `Agora são ${hora}:${minuto} horas da manha.`
        msg.innerHTML = horaExata
        document.body.style.background = '#f3bc82'
        img.src = 'img/manha.png'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        let horaExata = `Agora são ${hora}:${minuto} horas da tarde.`
        msg.innerHTML = horaExata
        document.body.style.background = "#e9cba7"
        img.src = 'img/tarde.png'
    } else {
        // Boa noite
        let horaExata = `Agora são ${hora}:${minuto} horas da noite.`
        msg.innerHTML = horaExata
        document.body.style.background = '#0b1717'
        img.src = 'img/noite.png'
    }
}
