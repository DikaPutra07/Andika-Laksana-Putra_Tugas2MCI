const orderRepository = require('../repositories/orderRepository');

const getAllOrders = async () => {
    try {
        const orders = await orderRepository.getAllOrders();
        return orders;
    }
    catch (err) {
        return err;
    }
}

const getOrderById = async (id) => {
    try {
        const order = await orderRepository.getOrderById(id);
        return order;
    }
    catch (err) {
        return err;
    }
}

const getCanceledOrder = async () => {
    try {
        const order = await orderRepository.getCanceledOrder();
        return order;
    }
    catch (err) {
        return err;
    }
}

const getSuccessOrder = async () => {
    try {
        const order = await orderRepository.getSuccessOrder();
        return order;
    }
    catch (err) {
        return err;
    }
}

const getWaitingOrder = async () => {
    try {
        const order = await orderRepository.getWaitingOrder();
        return order;
    }
    catch (err) {
        return err;
    }
}

const createOrder = async (data) => {
    try {
        const order = await orderRepository.createOrder(data);
        return order;
    }
    catch (err) {
        return err;
    }
}

const updateOrder = async (data, id) => {
    try {
        const order = await orderRepository.updateOrder(data, id);
        return order;
    }
    catch (err) {
        return err;
    }
}

const deleteOrder = async (id) => {
    try {
        const order = await orderRepository.deleteOrder(id);
        return order;
    }
    catch (err) {
        return err;
    }
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

