let botao = document.querySelector('button#botao')
botao.addEventListener('click', calcular)
function calcular() {
    let vel = document.getElementById('vel')
    let res = document.getElementById('res')
    vel = Number(vel.value)
    if (vel == '') { // "!" Significa negacao entao caso o vel estiver vazio vai chamar o alert
        alert('Por favor, digite sua velocida')
    }
    res.innerHTML = `Sua velocidade e <strong>${vel}km/h</strong><br>`

    if (vel > 80) {
        res.innerHTML += '<p>Voce foi <strong>Multado</strong>!!'
    }
    res.innerHTML += 'Dirija sempre com cinto de seguranca'
}