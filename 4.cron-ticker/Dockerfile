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
# COPY app.js ./ # Copiar un solo archivo
# Copie todo del destino .  y lo peque al working directory ., este trae el problema que copia los modulos de node
COPY . . 

# Realizar testing
RUN npm run test

# ejecutar el comando run de la imagen, que indicamos a la imagen de docker que hacer cuando se empice a correr
CMD [ "node", "app.js" ]
