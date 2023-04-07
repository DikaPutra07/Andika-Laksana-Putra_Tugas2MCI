const route = require('express').Router()
const statusPembayaranController = require('../controllers/statusPembayaranController')

route.get('/', statusPembayaranController.getAllStatusPembayaran)
route.get('/:id', statusPembayaranController.getStatusPembayaranById)
route.post('/', statusPembayaranController.createStatusPembayaran)
route.put('/:id', statusPembayaranController.updateStatusPembayaran)
route.delete('/:id', statusPembayaranController.deleteStatusPembayaran)

module.exports = route
