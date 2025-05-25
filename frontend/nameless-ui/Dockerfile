FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.25-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/. /usr/share/nginx/html/

# Expõe a porta 80, onde o Nginx roda por padrão.
EXPOSE 80

# O comando para iniciar o Nginx e mantê-lo rodando em primeiro plano.
CMD ["nginx", "-g", "daemon off;"]