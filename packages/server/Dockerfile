FROM node:18

WORKDIR /api-server
COPY package*.json /api-server/

RUN npm ci --legacy-peer-deps

COPY . /api-server/

#CMD [ "npm", "run", "start:dev"]