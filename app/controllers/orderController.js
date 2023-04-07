const orderService = require('../services/orderService');

const getAllOrder = async (req, res) => {
    orderService.getAllOrders()
        .then(orders => {
            if (!orders) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data order tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data order berhasil ditemukan',
                    data: orders
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

const getOrderById = async (req, res) => {
    const id = req.params.id;
    orderService.getOrderById(id)
        .then(order => {
            if (!order) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data order tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data order berhasil ditemukan',
                    data: order
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

const getSuccessOrder = async (req, res) => {
    orderService.getSuccessOrder()
        .then(order => {
            if (!order) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data order tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data order berhasil ditemukan',
                    data: order
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

const getWaitingOrder = async (req, res) => {
    orderService.getWaitingOrder()
        .then(order => {
            if (!order) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data order tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data order berhasil ditemukan',
                    data: order
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

const getCancelOrder = async (req, res) => {
    orderService.getCanceledOrder()
        .then(order => {
            if (!order) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data order tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data order berhasil ditemukan',
                    data: order
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

const createOrder = async (req, res) => {
    console.log(req.body)
    const data = {
        unique_payment_code: req.body.unique_payment_code,
        total_biaya: req.body.total_biaya,
        user_id: req.body.user_id,
        order_status_id: req.body.order_status_id
    }
    orderService.createOrder(data)
        .then(order => {
            res.status(200).send({
                status: 'success',
                message: 'Data order berhasil ditambahkan',
                data: order
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

const updateOrder = async (req, res) => {
    const id = req.params.id;
    orderService.updateOrder(req.body, id)
        .then(order => {
            res.status(200).send({
                status: 'success',
                message: 'Data order berhasil diubah',
                data: order
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

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    orderService.deleteOrder(id)
        .then(order => {
            res.status(200).send({
                status: 'success',
                message: 'Data order berhasil dihapus',
                data: order
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
    getAllOrder,
    getOrderById,
    getSuccessOrder,
    getWaitingOrder,
    getCancelOrder,
    createOrder,
    updateOrder,
    deleteOrder
}