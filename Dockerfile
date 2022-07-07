FROM node:latest
# Preconfigurar el contenedor
WORKDIR /app

# Copiar los elementos necesarios
COPY package-lock.json .
COPY package.json .

# Construir las dependencias
RUN npm install

# Construir la aplicacion
COPY . .


# Ejecutar la aplicacion
CMD ["npm", "run", "start"]