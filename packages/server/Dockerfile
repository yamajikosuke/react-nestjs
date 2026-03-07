FROM node:12.16.2

WORKDIR /api-server
COPY package*.json /api-server/

RUN npm install --legacy-peer-deps

COPY . /api-server/

CMD [ "npm", "run", "start:dev"]