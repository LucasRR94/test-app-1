FROM node:18-alpine

WORKDIR /App

EXPOSE 5173

#uprade and install packages of OS and other necessary packages
RUN apk update && \
    apk upgrade && \
    apk add --no-cache openssl curl nano

#install all the dependencies of the app
COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]

