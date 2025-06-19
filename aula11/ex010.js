let botao = document.querySelector('button#botao');
botao.addEventListener('click', calcular);

function calcular() {
    let velInput = document.getElementById('vel')
    let res = document.getElementById('res')
    if (isNaN(velInput)) {
        alert('Por favor, digite um numero valido a velocidade')
        return // return ele corta a funcao
    }
    let vel = Number(velInput.value)
    res.innerHTML = `<p>Sua velocidade e de ${vel}km/h  `
    if (vel > 80) {
        res.innerHTML += ' <p>Voce foi <strong>Multado</strong> por excesso de velocidade</p>'
    }
    res.innerHTML += 'Digija sempre com cinto de seguranca'
}