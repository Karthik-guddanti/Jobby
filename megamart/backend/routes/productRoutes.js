const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  deleteProduct,
  getProductById,
} = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', getProductById);

module.exports = router;