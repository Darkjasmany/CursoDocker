docker container run \
--name world-db \
-dp 3306:3306 \
-e MARIADB_USER=example-user \
-e MARIADB_PASSWORD=user-password \
-e MARIADB_ROOT_PASSWORD=root-secret-password \
-e MARIADB_DATABASE=world-db \
--volume world-db:/var/lib/mysql \
--network world-app \
mariadb:jammy

# Este comando a veces pide login
# docker login && docker container run \
docker container run \
--name phpmyadmin \
-d \
-e PMA_ARBITRARY=1 \
-p 8080:80 \
--network world-app \
phpmyadmin:5.2-apache

# Ejercicio de Blind Volumes
# -w Working Directory indica que haga un cd a un directorio
# me daba problema con los dns se definio una bandera --dns
# asi mismo me daba problema con yarn uso npm
docker container run \
--name nest-app \
-w /app \
-p 80:3000 \
-v "$(pwd)":/app \
node:18-alpine3.21 \
sh -c "yarn install && yarn start:dev"

# Corregido para mi Linux
docker container run \
--name nest-app \
--rm \
--dns=8.8.8.8 \
-w /app \
-p 80:3000 \
-v "$(pwd)":/app \
node:18-alpine3.21 \
sh -c "npm install && npm run start:dev"

# asi lo ejecute
docker container run \
--name nest-app \
-w /app \
-dp 80:3000 \
-v "$(pwd)":/app \
node:18-alpine3.21 \
sh -c "npm install && npm run start:dev"

# Para revisar los log del contenedor <nombreContenedor> o <idContenedor>
# se envia la bander -f para que haga el follow
docker container logs -f nest-app

# Comando Docker para ejecutar mi portainer.io
docker run -d \
--name portainer \
-p 9000:9000 \
-p 8000:8000 \
-p 9443:9443 \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data \
portainer/portainer-ce
