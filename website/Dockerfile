FROM node:lts-alpine

WORKDIR /usr/src/portfolio/website

COPY package.json ./
RUN yarn

COPY components ./components
COPY pages ./pages
COPY public ./public
COPY server ./server

COPY app.vue ./
COPY nuxt.config.ts ./
COPY tsconfig.json ./

CMD yarn dev