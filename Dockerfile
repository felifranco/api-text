FROM node:12

LABEL maintainer="Feliciano Franco"

LABEL email="f64franco@gmail.com"

LABEL description = "Creación de la imagen api-text. NodeJS v12."

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]