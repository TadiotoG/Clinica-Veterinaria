# Usando a imagem oficial do Node.js
FROM node:16

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o arquivo HTML para dentro do container
COPY index.html .

# Instalar o http-server para servir os arquivos
RUN npm install -g http-server

# Expor a porta que o http-server vai usar
EXPOSE 80

# Comando para rodar o servidor HTTP na porta 80
CMD ["http-server", ".", "-p", "80"]
