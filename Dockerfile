FROM node:20-alpine

WORKDIR /app

# Install API dependencies
COPY api/package*.json api/
RUN npm install --prefix api

# Copy app files
COPY . .

EXPOSE 3000

ENV PORT=3000
CMD ["node", "api/server.js"]
