const orderStatusRepository = require('../repositories/orderStatusRepository');

const getAllOrderStatus = async () => {
    try {
        const orderStatus = await orderStatusRepository.getAllOrderStatus();
        return orderStatus;
    }
    catch (err) {
        return err;
    }
}

const getOrderStatusById = async (id) => {
    try {
        const orderStatus = await orderStatusRepository.getOrderStatusById(id);
        return orderStatus;
    }
    catch (err) {
        return err;
    }
}

const createOrderStatus = async (data) => {
    try {
        const orderStatus = await orderStatusRepository.createOrderStatus(data);
        return orderStatus;
    }
    catch (err) {
        return err;
    }
}

const updateOrderStatus = async (data, id) => {
    try {
        const orderStatus = await orderStatusRepository.updateOrderStatus(data, id);
        return orderStatus;
    }
    catch (err) {
        return err;
    }
}

const deleteOrderStatus = async (id) => {
    try {
        const orderStatus = await orderStatusRepository.deleteOrderStatus(id);
        return orderStatus;
    }
    catch (err) {
        return err;
    }
}

module.exports = {
    getAllOrderStatus,
    getOrderStatusById,
    createOrderStatus,
    updateOrderStatus,
    deleteOrderStatus
}
