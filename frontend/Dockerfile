# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Start the app using the built static files
CMD ["serve", "-s", "build", "-l", "3000"]
