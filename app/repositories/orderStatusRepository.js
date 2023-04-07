const { order_status } = require('../models');

const getAllOrderStatus = () => {
    return order_status.findAll();
}

const getOrderStatusById = (id) => {
    return order_status.findOne({
        where: {
            id: id
        }
    })
}

const createOrderStatus = (data) => {
    return order_status.create(data);
}

const updateOrderStatus = (data, id) => {
    return order_status.update(data, {
        where: {
            id: id
        }
    })
}

const deleteOrderStatus = (id) => {
    return order_status.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllOrderStatus,
    getOrderStatusById,
    createOrderStatus,
    updateOrderStatus,
    deleteOrderStatus
}