const express = require('express');
const { fileHandler } = require('../../utils')

const {
  products
} = require('../controllers');

const router = express.Router();

router.post('/', products.addProduct);
router.get('/', products.getAllProducts);
router.get('/:productId', products.getProduct);
router.put('/:productId', products.updateProduct);
router.delete('/:productId', products.removeProduct);
router.put('/updateImage/:productId', fileHandler, products.updateImage );

module.exports = router;