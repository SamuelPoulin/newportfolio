FROM node:lts-alpine as base

WORKDIR /usr/src/portfolio/cms

COPY package.json ./
RUN yarn

COPY src ./src

COPY nodemon.json ./
COPY payload.config.ts ./
COPY tsconfig.json ./

CMD yarn dev