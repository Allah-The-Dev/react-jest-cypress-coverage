# The Node version that we'll be running for our version of React.
# You may have to search the Node directory for a version that fits
# the version of React you're using.
FROM node:14.15.5-alpine3.10

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY src /app/src
COPY images /app/images
COPY buildScripts /app/buildScripts
COPY babel.config.js /app/babel.config.js
COPY public /app/public
COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
RUN npm install

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000

CMD ["npm", "start"]