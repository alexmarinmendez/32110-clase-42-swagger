const { Router } = require('express')
const ProductController = require('./controllers/ProductController')

const routes = Router()

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: 'Server is on... '})
})

/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *                  description: The product's name
 *              description:
 *                  type: string
 *                  description: The description of the product
 *              price:
 *                  type: integer
 *                  description: The product's price
 *          required:
 *              - title
 *              - description
 *              - price
 *          example:
 *              title: "Laptop"
 *              description: "A gamer laptop"
 *              price: 1900
 */


/**
 * @swagger
 * /products:
 *  post:
 *      summary: Crea un nuevo producto en la base de datos
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          200:
 *              description: Se creó un nuevo producto
 */
routes.post('/products', ProductController.store)
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)

module.exports = routes