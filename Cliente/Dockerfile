FROM node:16

WORKDIR /usr/src/app

COPY index.html .

RUN npm install -g http-server

EXPOSE 80

CMD ["http-server", ".", "-p", "80"]
