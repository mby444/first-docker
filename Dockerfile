FROM node:22

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5000

CMD ["node", "index.js"]