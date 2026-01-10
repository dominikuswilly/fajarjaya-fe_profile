# Build Stage
FROM node:20-alpine as build-stage

WORKDIR /app

# Install compatibility libraries for Tailwind v4 / Rollup on Alpine
RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production Stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
