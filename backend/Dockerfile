# Stage 1: Install dependencies and build the backend application
FROM node:14 as backend-builder

WORKDIR /backend/app

COPY /package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Final image with only necessary files
FROM node:14-alpine

WORKDIR /backend/app

COPY --from=backend-builder /backend/app .

EXPOSE 3000

CMD ["npm", "start"]
