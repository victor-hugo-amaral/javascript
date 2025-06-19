window.addEventListener("load", carregar)
function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes().toString().padStart(2, '0')
    msg.innerHTML = `Agoara sao ${horas}:${minutos} horas`

    if (horas >= 8 && horas < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (horas >= 12 && horas < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }
}