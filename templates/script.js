document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário
    registrarCarga(); // Chama a função de registro
});

function registrarCarga() {
    // Limpar mensagens de erro
    document.getElementById('placaErro').style.display = 'none';
    document.getElementById('pesoCargaErro').style.display = 'none';
    document.getElementById('erroGeral').style.display = 'none';

    // Obter valores do formulário
    var placa = document.getElementById('placa').value;
    var peso_carga = document.getElementById('peso_carga').value;

    // Validar a placa do carro (formato AAA-1111 ou novo formato ABC1D23)
    if (!/^([A-Z]{3}-\d{4}|[A-Z]{3}\d[A-Z]\d{2})$/.test(placa)) {
        document.getElementById('placaErro').innerText = 'Placa inválida. Formato: AAA-1111 ou ABC1D23';
        document.getElementById('placaErro').style.display = 'block';
        return false; // Impede a submissão do formulário
    }

    // Validar o peso da carga
    if (isNaN(peso_carga) || parseFloat(peso_carga) <= 0) {
        document.getElementById('pesoCargaErro').innerText = 'O peso deve ser um número maior que zero.';
        document.getElementById('pesoCargaErro').style.display = 'block';
        return false; // Impede a submissão do formulário
    }

    // Enviar dados para o back-end
    fetch('/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `placa=${encodeURIComponent(placa)}&peso_carga=${encodeURIComponent(peso_carga)}`,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'sucesso') {
            alert('Carga registrada com sucesso!');
            // Limpar campos após o sucesso, se necessário
            document.getElementById('placa').value = '';
            document.getElementById('peso_carga').value = '';

            // Chamar função para exibir relatório diário
            exibirRelatorioDiario(data.totalCaminhoes, data.totalToneladas);
        } else {
            document.getElementById('erroGeral').innerText = data.mensagem;
            document.getElementById('erroGeral').style.display = 'block';
        }
    })
    .catch(error => console.error('Erro:', error));

    return false; // Impede a submissão do formulário
}

function exibirRelatorioDiario(totalCaminhoes, totalToneladas) {
    document.getElementById('relatorio').style.display = 'block';
    document.getElementById('totalCaminhoes').innerText = `Caminhões Registrados: ${totalCaminhoes}`;
    document.getElementById('totalToneladas').innerText = `Toneladas de Peixe: ${totalToneladas}`;
}
