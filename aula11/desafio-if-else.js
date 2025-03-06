const botao = document.querySelector('button#botao');
botao.addEventListener("click", verificar);

function verificar() {
    let nacionalidade = document.getElementById('txtna'); // Corrigido nome da variável
    let res = document.getElementById('res');

    let valor = nacionalidade.value.trim().toLowerCase(); // Pega o valor, remove espaços e padroniza para minúsculas

    if (valor == "") {
        alert('Digite sua nacionalidade');
        return; // Interrompe a execução da função se o campo estiver vazio
    }
    res.innerHTML = `sua nacionalidade e ${nacionalidade}`
    if (valor == "brasil") {
        res.textContent = "Você é brasileiro"; // Usando textContent para evitar problemas de segurança
    } else {
        res.textContent = 'Você é estrangeiro'; // Usando textContent para evitar problemas de segurança
    }
}