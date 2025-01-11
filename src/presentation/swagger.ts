import { serverConfig } from "@config";

export const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'URL Shortener API',
    version: '1.0.0',
    description: 'API для сокращения длинных URL-адресов.',
  },
  servers: [
    {
      url: `http://localhost:${serverConfig.port}/api`,
    },
  ],
};