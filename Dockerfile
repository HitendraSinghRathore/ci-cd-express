# Use the Node.js 18 base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the backend and frontend folders into the container
COPY backend ./backend
COPY frontend ./frontend

# Install backend dependencies
RUN cd backend && npm install

# Expose port 3000 for the app
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/index.js"]