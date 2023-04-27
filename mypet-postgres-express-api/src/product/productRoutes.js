const { Router } = require('express');
const router = Router();
const productController = require('./productController');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.addProduct);
router.delete('/:id', productController.deleteProduct);
router.patch('/:id', productController.updateProduct);

module.exports = router;