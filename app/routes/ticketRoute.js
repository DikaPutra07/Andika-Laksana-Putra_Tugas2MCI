const router = require('express').Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.getAllTickets);
router.get('/:id', ticketController.getTicketById);
router.get('/status/used', ticketController.getTicketIsUsed);
router.get('/status/notused', ticketController.getTicketIsNotUsed);
router.get('/order/:order_id', ticketController.getTicketByOrderId);
router.post('/', ticketController.createTicket);
router.put('/:id', ticketController.updateTicket);
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;