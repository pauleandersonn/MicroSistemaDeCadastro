

from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder="templates")

# Variáveis para armazenar totalCaminhoes e totalToneladas
total_caminhoes = 0
total_toneladas = 0
relatorio_entradas = []  # Lista para armazenar relatórios de entrada

def validar_placa(placa):
    # Expressão regular para o formato antigo AAA-1111 ou novo ABC1D23
    regex = r'^([A-Z]{3}-\d{4}|[A-Z]{3}\d[A-Z]\d{2})$'
    return re.match(regex, placa) is not None

@app.route('/')
def index():
    return render_template('index.html', relatorio_entradas=relatorio_entradas)

@app.route('/registrar', methods=['POST'])
def registrar():
    global total_caminhoes, total_toneladas, relatorio_entradas

    placa = request.form.get('placa', '').upper()
    peso_carga = float(request.form.get('peso_carga', 0))

    if not validar_placa(placa):
        return jsonify({'status': 'erro', 'mensagem': 'Placa inválida. Formato: AAA-1111 ou ABC1D23'})

    total_caminhoes += 1
    total_toneladas += peso_carga

    # Criar relatório de entrada
    entrada = {'placa': placa, 'peso_carga': peso_carga}
    relatorio_entradas.append(entrada)

    return jsonify({
        'status': 'sucesso',
        'mensagem': 'Carga registrada com sucesso!',
        'totalCaminhoes': total_caminhoes,
        'totalToneladas': total_toneladas,
        'relatorioEntrada': relatorio_entradas
    })

if __name__ == '__main__':
    app.run(debug=True)
