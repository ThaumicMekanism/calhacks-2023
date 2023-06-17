FROM node:20-alpine

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
# COPY package.json /usr/src/app/package.json
COPY . /usr/src/app/

RUN npm install


EXPOSE 3000
CMD ["npm", "run", "dev"]
