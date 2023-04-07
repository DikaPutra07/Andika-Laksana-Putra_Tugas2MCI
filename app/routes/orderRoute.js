const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.getAllOrder);
router.get('/:id', orderController.getOrderById);
router.get('/status/success', orderController.getSuccessOrder);
router.get('/status/waiting', orderController.getWaitingOrder);
router.get('/status/cancel', orderController.getCancelOrder);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
