FROM node:14.15.1

WORKDIR /backend
COPY . /backend
RUN npm i
EXPOSE 8080
ENTRYPOINT [ "npm", "run", "dev" ]