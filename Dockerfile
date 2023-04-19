FROM node


WORKDIR /usr/app

COPY package.json ./

VOLUME /usr/app

RUN npm install

COPY . .

EXPOSE 3333


CMD [ "npm", "run", "dev" ]