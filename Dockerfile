FROM node:18-alpine AS build-stage

# set working directory
WORKDIR /app

# copy package.json and package-lock.json to workdir
COPY package*.json ./

# install app dependencies
RUN npm ci

# copy source code to the container
COPY . ./

# build production files
RUN npm run build

# Stage 2: Nginx serving the app
FROM nginx:1.25.0-alpine AS production-stage

# set working directory in Nginx container
WORKDIR /usr/share/nginx/html

# remove all default files from Nginx
RUN rm -rf ./*

# copy nginx.conf for custom config
COPY nginx.conf /etc/nginx/nginx.conf

# copy build output from the build stage
COPY --from=build-stage /app/dist ./ 

ENTRYPOINT ["nginx", "-g", "daemon off;"]