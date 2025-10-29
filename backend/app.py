from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

FRONTEND_ORIGIN = os.getenv('FRONTEND_ORIGIN', 'http://localhost:5173')
CORS(app, resources={r"/enviar-contato": {"origins": FRONTEND_ORIGIN}})

SMTP_SERVER = os.getenv('SMTP_SERVER')
SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
SMTP_USERNAME = os.getenv('SMTP_USERNAME')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD')
EMAIL_DESTINO = os.getenv('EMAIL_DESTINO')

@app.route('/enviar-contato', methods=['POST'])
def enviar_contato():
    try:
        dados = request.get_json()

        campos_obrigatorios = ['nome', 'email', 'mensagem']
        if not all(campo in dados for campo in campos_obrigatorios):
            return jsonify({'erro': 'Dados incompletos. Faltam campos obrigatórios (nome, email, mensagem).'}), 400

        nome = dados.get('nome')
        email_remetente = dados.get('email')
        telefone = dados.get('telefone', 'Não informado')
        mensagem = dados.get('mensagem')

        corpo_email = f"""
        ===========================================
        NOVO CONTATO RECEBIDO PELO SITE!
        ===========================================

        👤 Nome: {nome}
        📧 E-mail: {email_remetente}
        📞 Telefone: {telefone}

        💬 Mensagem:
        {mensagem}
        
        ===========================================
        """

        msg = MIMEText(corpo_email, 'plain', 'utf-8')
        msg['Subject'] = f'[SITE] Novo Contato de {nome}'
        msg['From'] = SMTP_USERNAME
        msg['To'] = EMAIL_DESTINO

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.sendmail(SMTP_USERNAME, EMAIL_DESTINO, msg.as_string())

        return jsonify({'mensagem': 'Mensagem enviada com sucesso!'}), 200

    except Exception as e:
        print(f"Erro ao processar ou enviar email: {e}")
        return jsonify({'erro': 'Falha interna ao processar a mensagem.'}), 500


if __name__ == '__main__':
    app.run(debug=True)
