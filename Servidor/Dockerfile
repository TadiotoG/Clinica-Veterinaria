FROM node

ENV NODE_ENV=production

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY index.js index.js

COPY package.json package-lock.json ./
RUN npm install

EXPOSE 8080

CMD ["node","index.js"]