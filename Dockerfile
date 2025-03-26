# Stage 1: Build the Next.js application
FROM node:20-bullseye AS builder

ENV NEXT_TELEMETRY_DISABLED 1
# Set the working directory inside the container
WORKDIR /app

# Copy the .npmrc file if you're using one for private registries or custom configs
# COPY .npmrc ./

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production and development dependencies
# RUN npm run verify

# Copy the rest of your application code
COPY . .

# Build the Next.js application
# RUN npm run build-prod

# # Stage 2: Create a lightweight production image
# FROM node:20-bullseye AS production

# # Set the working directory
# WORKDIR /app

# # Copy only the build output and necessary files from the builder stage
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/ecosystem.config.cjs ./
# COPY --from=builder /app/customServer.js ./
# COPY --from=builder /app/src ./src 

# Install pm2 globally
RUN npm install -g pm2@5.3.0
# Expose the port
EXPOSE 4000
# EXPOSE 4000 # Uncomment if you need to expose port 4000

# Command to start the application
# works CMD ["sh", "-c", "pm2 kill && pm2 reset all && pm2-runtime start ecosystem.config.cjs"]
CMD ["sh", "-c", "pm2 kill && pm2 reset all && pm2-runtime start ecosystem.config.cjs --env production"]