# Imagen inicial alpine version ligera de linux con node instalado y tiene la carpeta de directorio 
# /app /usr /lib /opt ...
FROM node:19.2-alpine3.16

# es como hacer un cd /app
WORKDIR /app

# source: archivos y dest: lugar donde los voy a colocar
COPY package.json ./

# Instalar las dependecias
RUN npm install

# dest /app
COPY app.js ./

# ejecutar el comando run de la imagen, que indicamos a la imagen de docker que hacer cuando se empice a correr
CMD [ "node", "app.js" ]
