# create base imagae
FROM node:20-alpine
# make working directory
# set system access right
RUN addgroup app && adduser -S -G app app 

USER app

WORKDIR /app

COPY ./package*.json ./
# set previlege
USER root
# set access right for app user
RUN chown -R app:app ./
# change back to app user
USER app
# install necessary dependancies
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000
# execute commands
CMD ["npm","run","build"] 
 