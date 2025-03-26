
FROM node:18.8.0-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json  .
COPY yarn.lock .

RUN apk add git

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4000
CMD [ "yarn", "run", "serve" ]