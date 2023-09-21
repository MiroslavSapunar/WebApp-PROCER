FROM node:18.18-alpine3.17
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache --virtual build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev && rm -rf /var/cache/apk/*
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json ./
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN ["yarn", "build"]
EXPOSE 1337
CMD ["yarn", "develop"]
