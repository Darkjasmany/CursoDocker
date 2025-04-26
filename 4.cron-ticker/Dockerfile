# Imagen inicial alpine version ligera de linux con node instalado y tiene la carpeta de directorio 
# /app /usr /lib /opt ...
FROM node:19.2-alpine3.16

# es como hacer un cd /app -> Especifica el directorio activo en el cual voy a estar trabajando
WORKDIR /app

# source: archivos y dest: lugar donde los voy a colocar al working directory
COPY package.json ./

# Instalar las dependecias
RUN npm install

# dest /app
# COPY app.js ./ # Copiar un solo archivo
# Copie todo del destino .  y lo peque al working directory ., este trae el problema que copia los modulos de node no es recomendable
# copia todo lo que esta en mi proyecto en el pack realtivo del Dockerfile y lo pega en el workingdirectory
COPY . . 

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en PRODUCCIÓN
RUN rm -rf tests && rm -rf node_modules 

# Instalar las dependencias de Producción 
RUN npm install --prod

# ejecutar el comando run de la imagen, que indicamos a la imagen de docker que hacer cuando se empice a correr
CMD [ "node", "app.js" ]
