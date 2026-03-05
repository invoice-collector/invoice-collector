const swaggerJsdoc = require('swagger-jsdoc');
const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const { SWAGGER_DEFINITION } = require('./swaggerConfig.js');

const spec = swaggerJsdoc(SWAGGER_DEFINITION);
const yamlStr = YAML.stringify(spec);
const outputPath = path.join(__dirname, 'openapi.yml');

fs.writeFileSync(outputPath, yamlStr, 'utf8');
console.log(`OpenAPI spec written to ${outputPath}`);
