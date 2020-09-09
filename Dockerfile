FROM node:14.7.0-slim
WORKDIR /app
EXPOSE 3000
COPY package*.json ./
RUN npm ci
COPY src ./src
CMD [ "node", "src/index.js" ]