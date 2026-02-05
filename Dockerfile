# ------------------------------
# Base image with Chrome + system deps
# ------------------------------
FROM node:22 AS base

RUN npm config set registry https://registry.npmjs.org/ \
 && npm cache clean --force

# Install necessary dependencies for running Chrome
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    apt-transport-https \
    xvfb \
 && rm -rf /var/lib/apt/lists/*

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
 && echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
 && apt-get update \
 && apt-get install -y google-chrome-stable \
 && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /usr/app/

# ------------------------------
# Dependencies stage
# ------------------------------
FROM base AS deps
ARG BUILD_ENV=production
ENV BUILD_ENV=$BUILD_ENV

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm update \
 && if [ "$BUILD_ENV" = "development" ]; then \
      npm ci ; \
    else \
      npm ci --omit=dev ; \
    fi

# ------------------------------
# Development image
# ------------------------------
FROM deps AS dev
ENV BUILD_ENV=development

COPY --from=deps /usr/app/package*.json ./

# Copy the rest of the application code
COPY tsconfig.json ./tsconfig.json
COPY src/ ./src/
COPY views/ ./views/
COPY data/ ./data/
COPY test/ ./test/
COPY locales/ ./locales/
COPY media/ ./media/

# Change ownership so node user can write
RUN chown -R node:node media/

# Switch to node user
USER node

# Expose the port your app runs on
EXPOSE 8080

# Run the application in debug mode
CMD ["npm", "run", "debug"]

# ------------------------------
# Production image
# ------------------------------
FROM base AS prod
ENV BUILD_ENV=production

# Copy the dependencies from the deps stage
COPY --from=deps /usr/app/package*.json ./
COPY --from=deps /usr/app/node_modules ./node_modules

COPY tsconfig.json ./tsconfig.json
COPY src/ ./src/
COPY views/ ./views/
COPY data/ ./data/
COPY locales/ ./locales/
COPY media/ ./media/

# Change ownership so node user can write
RUN chown -R node:node media/

# Switch to node user
USER node

# Expose the port your app runs on
EXPOSE 8080

# Run the application in production mode
CMD ["npm", "run", "start"]
