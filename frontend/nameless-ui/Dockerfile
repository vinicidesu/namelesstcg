# namelesstcg/frontend/tcg-portal-ui/Dockerfile

# --- Estágio 1: Build (O Construtor) ---
# Usamos uma imagem do Node.js para construir o projeto. 'alpine' é uma base Linux muito leve.
# Damos um nome a este estágio, "builder", para que possamos referenciá-lo mais tarde.
FROM node:20-alpine AS builder

# Define o diretório de trabalho.
WORKDIR /app

# Copia os arquivos de dependência e instala, aproveitando o cache de camadas do Docker.
# (Se usar npm, seria: COPY package.json package-lock.json ./)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copia todo o resto do código-fonte do frontend para o contêiner.
COPY . .

# Executa o script de build do React. Isso gera os arquivos estáticos
# otimizados para produção na pasta /app/build (ou /app/dist).
RUN yarn build

# --- Estágio 2: Production (O Servidor Final) ---
# Agora, começamos uma nova imagem, limpa e leve, baseada no Nginx.
# Esta será a nossa imagem final.
FROM nginx:1.25-alpine

# Remove a configuração padrão do Nginx.
RUN rm /etc/nginx/conf.d/default.conf

# Copia nossa configuração customizada do Nginx para o contêiner.
# (Veja o arquivo nginx.conf abaixo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# O passo mágico do multi-stage build:
# Copia APENAS a pasta 'build' (com os arquivos estáticos) do estágio "builder"
# para o diretório padrão onde o Nginx serve arquivos.
# Todo o ambiente Node.js, node_modules e código-fonte são descartados!
COPY --from=builder /app /usr/share/nginx/html

# Expõe a porta 80, onde o Nginx roda por padrão.
EXPOSE 80

# O comando para iniciar o Nginx e mantê-lo rodando em primeiro plano.
CMD ["nginx", "-g", "daemon off;"]