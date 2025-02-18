function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let horas = data.getHours()
    msg = `Agors são ${horas} horas.`
    if (horas >= 0 && horas < 12) {
        //Bom Dia
        // img.src = manha.png
    } else if (horas >= 12 && horas < 18) {
        // Boa tarde
        // img.src = "tarde.png"
    } else {
        //Boa noite 
        // img.src = noite.png
    }
}