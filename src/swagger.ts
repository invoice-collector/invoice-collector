import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Invoice Collector API',
      version: '0.2.0',
      description: 'API for collecting invoices from various providers',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        tokenAuth: {
          type: 'apiKey',
          in: 'query',
          name: 'token',
        },
      },
    },
  },
  apis: ['./src/index.ts'], // Path to the API docs
};

export const swaggerSpec = swaggerJsdoc(options); 