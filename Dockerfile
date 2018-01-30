FROM node:boron
RUN npm install pm2 -g


# Create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source

COPY JuiceMarketplaceWebsite-app /usr/src/app

# Install app dependencies
RUN npm install
RUN npm install -g @angular/cli

RUN ng build


EXPOSE 3004

CMD [ "pm2-docker", "npm", "--", "start" ]
