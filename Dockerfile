# syntax=docker/dockerfile:1

FROM node:18-alpine AS builder
WORKDIR /app

# Install deps (including devDependencies needed for build)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy the standalone build
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER 1001
EXPOSE 3000
CMD ["node", "server.js"]