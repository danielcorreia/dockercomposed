FROM node:9-alpine

WORKDIR /code

# By dividing the copy of the application into 2 COPY instructions
# (one for the package*.json files and the other for the rest of the files)
# and running the npm install instruction before adding the actual code,
# any code change won't trigger the RUN npm install instruction, only
# changes of the package.json will trigger it.
# https://stackoverflow.com/a/35774741/576192
COPY package*.json /code/

RUN npm install --quiet

COPY . /code

EXPOSE 3000
