# Micro Sistema de Cadastro

Este é um micro sistema de cadastro desenvolvido em Python com o framework Flask. Ele permite o registro de cargas de caminhões, validando a placa do veículo e mantendo um relatório de entrada.

## Instalação

Para executar o sistema localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/micro-sistema-cadastro.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd micro-sistema-cadastro
   ```

3. Crie e ative um ambiente virtual (opcional, mas recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate   # No Windows: venv\Scripts\activate
   ```

4. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

5. Execute o aplicativo Flask:
   ```bash
   python app.py
   ```

6. Acesse o sistema no navegador em (http://127.0.0.1:5000).

## Funcionalidades

- **Cadastro de Cargas:** Permite registrar cargas de caminhões, validando a placa do veículo.
- **Relatório de Entrada:** Exibe um relatório de todas as cargas registradas, incluindo placas e pesos.

## Uso

1. **Cadastro de Cargas:**
   - Preencha o formulário com a placa do caminhão (no formato AAA-1111 ou ABC1D23) e o peso da carga kilos.
   - Clique em "Registrar Caminhão" para salvar a carga.

2. **Cadastrar Novo Caminhão na Entrada:**
   - Utilize o formulário adicional para cadastrar novos caminhões na entrada.

3. **Relatório de Entrada:**
   - Visualize o relatório de todas as cargas registradas na seção correspondente.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo (LICENSE) para detalhes.

---

**Desenvolvido por Pauleanderson Souza - Cursando Engenharia de Software**

[Link para a Documentação Completa](docs/DOCUMENTACAO.md)
