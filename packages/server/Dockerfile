FROM node:12.16.2

RUN npm i -g @nestjs/cli

WORKDIR /api-server
COPY package*.json /api-server/

# my.cnf
RUN { \
        echo '[client]'; \
        echo 'default-character-set=utf8'; \
        echo '[mysql]'; \
        echo 'default-character-set=utf8'; \
        echo '[mysqldump]'; \
        echo 'default-character-set=utf8'; \
        echo '[mysqld]'; \
        echo 'character-set-server=utf8'; \
    } >> /etc/mysql/my.cnf
    
RUN npm i
CMD [ "npm", "run", "start:dev"]