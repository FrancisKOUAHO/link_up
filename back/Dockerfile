FROM node:20.11.1

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD [ "yarn", "dev" ]
