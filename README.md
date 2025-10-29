# Meu Projeto Fullstack

Landing page para empresa de confecção de móveis planejados utilizando React + Flask para formulario contato

## Tecnologias Utilizadas

### Frontend
- React
- Vite
- Axios
- CSS / HTML

### Backend
- Flask
- Flask-CORS
- python-dotenv
- smtplib (nativo do Python)

## Como Rodar o Projeto Localmente

### 1. Clonar o repositório
git clone https://github.com/DevAndradeGuilherme/Institucional-Moveis-Planejados.git
cd Institucional-Moveis-Planejados

### 2. Configurar o Backend

Entre na pasta do backend:
cd backend

Crie o arquivo `.env` (baseado no `.env.example`):
FRONTEND_ORIGIN=http://localhost:5173
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=SEU_EMAIL@gmail.com
SMTP_PASSWORD=SUA_SENHA_OU_TOKEN
EMAIL_DESTINO=EMAIL_QUE_RECEBERA_MENSAGENS

Instale as dependências:
pip install -r requirements.txt

Inicie o servidor Flask:
python app.py

O backend rodará em:
http://localhost:5000

### 3. Configurar o Frontend

Abra outro terminal e vá até a pasta do frontend:
cd frontend

Instale as dependências:
npm install

Rode o projeto:
npm run dev

O frontend rodará em:
http://localhost:5173

## Variáveis de Ambiente

Arquivo: `.env`

| Variável | Descrição |
|-----------|------------|
| FRONTEND_ORIGIN | URL do frontend autorizado a fazer requisições |
| SMTP_SERVER | Servidor SMTP usado para envio de e-mails |
| SMTP_PORT | Porta do servidor SMTP |
| SMTP_USERNAME | Usuário (e-mail remetente) |
| SMTP_PASSWORD | Senha ou token de aplicativo do e-mail |
| EMAIL_DESTINO | E-mail que receberá as mensagens |

## Autor

Desenvolvido por Guilherme Andrade  
Email: dev.guilhermeandrade@gmail.com  
LinkedIn: www.linkedin.com/in/guilherme-mendes-b6000b384  
GitHub: https://github.com/DevAndradeGuilherme

## Licença

Sinta-se livre para usar, modificar e distribuir conforme desejar.
