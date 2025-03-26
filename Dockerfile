
FROM node:18.8.0-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json  .
COPY package-lock.json .

RUN apk add git

RUN npm install

COPY . .

RUN npm build

EXPOSE 4000
CMD [ "npm", "run", "serve" ]