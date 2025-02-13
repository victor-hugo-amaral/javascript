let agora = new Date()
let horas = agora.getHours()
console.log(`Agora soa exatamente ${horas} horas.`)
if (horas < 12){
    console.log('Bom Dia!')
}else if (horas <= 18){
    console.log('Bom Tarde!')
}else{
    console.log('Boa Noite!')
}