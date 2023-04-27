const { Router } = require('express');
const router = Router();
const ServiceController = require('./serviceController');

router.get('/', ServiceController.getServices);
router.get('/:id', ServiceController.getServiceById);
router.post('/', ServiceController.addService);
router.delete('/:id', ServiceController.deleteService);
router.patch('/:id', ServiceController.updateService);

module.exports = router;