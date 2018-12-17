const express = require('express');

const {
  products
} = require('../controllers');

const router = express.Router();

router.post('/', products.addProduct);
router.get('/', products.getAllProducts);
router.get('/:productId', products.getProduct);
router.put('/:productId', products.updateProduct);
router.delete('/:productId', products.removeProduct);

module.exports = router;