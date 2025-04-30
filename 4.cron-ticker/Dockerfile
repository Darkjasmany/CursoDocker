# Dependencias de desarrollo
FROM node:19.2-alpine3.16 as dependecias
# cd app
WORKDIR /app
# Dest / app 
COPY package.json ./
# Instalar las dependecias
RUN npm install

# Build y Tests
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
# Indicamos que nos copiemos del stage anterior "dependencias" el direcctorio /app/node_modules a nuestro destino ./ => nuestro working directory
COPY --from=dependecias /app/node_modules ./node_modules
COPY . . 
RUN npm run test

# Dependencias de producción
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
# Instalar las dependencias de Producción 
RUN npm install --prod

# Ejecutar la APP
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
# ejecutar el comando run de la imagen, que indicamos a la imagen de docker que hacer cuando se empice a correr
CMD [ "node", "app.js" ]
