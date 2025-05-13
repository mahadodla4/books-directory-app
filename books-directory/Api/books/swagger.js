// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books API',
      version: '1.0.0',
      description: 'A simple Express Books API',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./index.js'], // path to your main file where routes are defined
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
