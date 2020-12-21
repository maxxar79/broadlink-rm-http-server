FROM alpine:3.12

RUN mkdir -p /app
WORKDIR /app

COPY config.sample.js /app/config.js
COPY package.json /app/package.json
COPY index.js /app/index.js

RUN apk add --update nodejs npm
RUN apk add --no-cache bash

RUN npm install

EXPOSE 1880

CMD [ "node", "/app/index.js" ]