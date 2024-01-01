FROM node:21.5-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD node server.js
