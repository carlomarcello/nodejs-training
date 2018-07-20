O objetivo desse exemplo é mostrar como usar a biblioteca "require.js" 
para carregar as dependências de forma assíncrona (para uso no navegador),
uma vez que o Node, quando usa o "require", faz uma operação bloqueante,
algo que não é problemático para o código do servidor, mas que não é 
desejado quando o código está no navegador, pois pode causar uma aplicação
sem responsividade.

