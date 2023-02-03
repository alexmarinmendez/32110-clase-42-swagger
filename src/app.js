const express = require('express')
const routes = require('./routes')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My awasome e-commerce API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8080"
            },
            {
                url: "http://coderhouse.com"
            }
        ]
    },
    apis: ["./src/docs/schemas/*.yaml", "./src/docs/routes/*.yaml"]
}

const app = express()

app.use(express.json())
app.use(routes)
app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

module.exports = app