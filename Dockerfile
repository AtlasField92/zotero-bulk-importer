# ============================================================
# Dockerfile: Build + Run normal Vite (TanStack Start / SSR)
# Usage: docker build -t mysite:normal .
#        docker run -p 3000:3000 mysite:normal
# ============================================================

FROM node:20-alpine

WORKDIR /app

# 1. Dependencies
COPY package*.json ./
RUN npm install

# 2. Source code
COPY . .

# 3. Production build (SSR + client, via the normal Vite config)
RUN npm run build

# 4. Expose the Vite preview server port
EXPOSE 3000

# 5. Run the Vite preview server in production mode
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "3000"]
