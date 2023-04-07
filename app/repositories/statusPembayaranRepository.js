const { status_pembayaran } = require('../models');

const getAllStatusPembayaran = () => {
    return status_pembayaran.findAll();
}

const getStatusPembayaranById = (id) => {
    return status_pembayaran.findOne({
        where: {
            id: id
        }
    })
}

const createStatusPembayaran = (data) => {
    return status_pembayaran.create(data);
}

const updateStatusPembayaran = (data, id) => {
    return status_pembayaran.update(data, {
        where: {
            id: id
        }
    })
}

const deleteStatusPembayaran = (id) => {
    return status_pembayaran.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllStatusPembayaran,
    getStatusPembayaranById,
    createStatusPembayaran,
    updateStatusPembayaran,
    deleteStatusPembayaran
}