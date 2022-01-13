FROM node:alpine

WORKDIR /app

RUN npm i -g @adonisjs/cli nodemon
RUN npm i -g pm2@latest

RUN apk add --no-cache openssh

EXPOSE 8080
