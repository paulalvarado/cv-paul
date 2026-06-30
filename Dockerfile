# ============================================================
# STAGE 1: Build
# ============================================================
FROM node:22-alpine AS build

# Habilitar pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# ------------------------------------------------------------
# Capa 1: Dependencias (se cachea mientras lock no cambie)
# ------------------------------------------------------------
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# ------------------------------------------------------------
# Capa 2: Código fuente + build
# ------------------------------------------------------------
COPY . .
RUN pnpm run build

# ============================================================
# STAGE 2: Servir con Nginx
# ============================================================
FROM nginx:alpine AS runtime

# Copiar el build generado
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
