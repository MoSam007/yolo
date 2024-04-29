# Stage 1: Build the client application
FROM node:14 as frontend-builder

#Author
LABEL maintainer="Sam Momanyi"

WORKDIR /client/app

COPY /client/package*.json ./
RUN npm install
COPY . /client/app/.
RUN npm run build

# Stage 2: Serve the client application using Nginx
FROM nginx:alpine

COPY --from=frontend-builder /client/app/build /usr/share/nginx/html

EXPOSE 80
