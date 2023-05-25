FROM node:lts-alpine

WORKDIR /usr/src/portfolio/website

COPY package.json ./
RUN yarn

COPY public ./
COPY server ./
COPY src ./

COPY app.vue ./
COPY nuxt.config.ts ./
COPY payload.config.ts ./
COPY tsconfig.json ./

CMD yarn dev