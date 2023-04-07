const { order } = require('../models');

const getAllOrders = () => {
    return order.findAll();
}

const getOrderById = (id) => {
    return order.findOne({
        where: {
            id: id
        }
    })
}

const getCanceledOrder = () => {
    return order.findAll({
        where: {
            order_status_id: 3
        },
        attributes: ['id', 'user_id']
    })
}

const getSuccessOrder = () => {
    return order.findAll({
        where: {
            order_status_id: 2
        },
        attributes: ['id', 'user_id']
    })
}

const getWaitingOrder = () => {
    return order.findAll({
        where: {
            order_status_id: 1
        },
        attributes: ['id', 'user_id']
    })
}

const createOrder = (data) => {
    return order.create(data);
}

const updateOrder = (data, id) => {
    return order.update(data, {
        where: {
            id: id
        }
    })
}

const deleteOrder = (id) => {
    return order.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    getCanceledOrder,
    getSuccessOrder,
    getWaitingOrder
}
