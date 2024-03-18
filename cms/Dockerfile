FROM node:20-alpine
RUN apk add nano bash

# Set the working directory in the container
WORKDIR /srv/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# List the contents of package.json to check for 'pg'
RUN cat package.json

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 1337

# Start the application
CMD ["npm", "run", "develop"]
