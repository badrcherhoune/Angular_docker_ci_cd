# Étape 1 : Build de l'application Angular + SSR
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./
COPY tsconfig*.json ./
COPY angular.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Build SSR (Angular Universal)
RUN npm run build

# Étape 2 : Image finale
FROM node:20-alpine AS runner

WORKDIR /app

# Copier uniquement le build et dépendances nécessaires
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Installer seulement les dépendances de production
RUN npm install --only=production

# Exposer le port
EXPOSE 4200

# Lancer l'application SSR
CMD ["node", "dist/application-ci/server/server.mjs"]