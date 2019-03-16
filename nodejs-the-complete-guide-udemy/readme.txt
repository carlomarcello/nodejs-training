

// Inicialização do projeto
// Isso irá gerar o arquivo package.json
// Necessário para instalar pacotes
npm init

// Inicia a aplicação de acordo com o que está no script package.json da aplicação
// "start" pode estar configurado no script para executar "nodemon app.js"
npm start

// Instala o nodemon em modo dev localmente no projeto 
// nodemon serve para poder restartar a aplicação automaticamente a cada alteração
npm install nodemon --save-dev

// Instala o express.js em modo normal (vai para prod)
npm install express --save

// Instala os template engines EJS, Pug e Handlebars
npm install --save ejs pug express-handlebar

// Instala o driver do mongodb
npm install mongodb --save

// Para que o debug seja reiniciado a cada alteração, incluir no arquivo launch.json
// da pasta .vscode as seguintes propriedades (o arquivo é gerado com um template
// automático quando é acessado o menu "Debug -> Add Configuration..."):
    "restart": true,
    "runtimeExecutable": "nodemon",
    "console": "integratedTerminal"

    Para que o nodemon funcione nesse caso, ele tem que estar instalado globalmente:
    npm install nodemon -g

