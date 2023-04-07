const orderStatusService = require('../services/orderStatusService');

const getAllOrderStatus = async (req, res) => {
    orderStatusService.getAllOrderStatus()
        .then(orderStatus => {
            if (!orderStatus) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data order status tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data order status berhasil ditemukan',
                    data: orderStatus
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

const getOrderStatusById = async (req, res) => {
    orderStatusService.getOrderStatusById(req.params.id)
        .then(orderStatus => {
            if (!orderStatus) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data order status tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data order status berhasil ditemukan',
                    data: orderStatus
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

const createOrderStatus = async (req, res) => {
    orderStatusService.createOrderStatus(req.body)
        .then(orderStatus => {
            res.status(200).send({
                status: 'success',
                message: 'Data order status berhasil ditambahkan',
                data: orderStatus
            });
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

const updateOrderStatus = async (req, res) => {
    const id = req.params.id;
    orderStatusService.updateOrderStatus(req.body, id)
        .then(orderStatus => {
            res.status(200).send({
                status: 'success',
                message: 'Data order status berhasil diubah',
                data: orderStatus
            });
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

const deleteOrderStatus = async (req, res) => {
    orderStatusService.deleteOrderStatus(req.params.id)
        .then(orderStatus => { 
            res.status(200).send({
                status: 'success',
                message: 'Data order status berhasil dihapus',
                data: orderStatus
            });
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

module.exports = {
    getAllOrderStatus,
    getOrderStatusById,
    createOrderStatus,
    updateOrderStatus,
    deleteOrderStatus
}