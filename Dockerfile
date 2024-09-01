# Use official `Node.js` image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app
COPY . .
# Install dependencies
RUN npm run install:all
RUN npm run build

COPY . .

# Copy rest of the application to container

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "start"]