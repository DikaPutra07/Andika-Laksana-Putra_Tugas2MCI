const { pembayaran } = require('../models');

const getAllPembayaran = () => {
    return pembayaran.findAll();
}

const getPembayaranById = (id) => {
    return pembayaran.findOne({
        where: {
            id: id
        }
    })
}

const getPembayaranBerhasil = () => {
    return pembayaran.findAll({
        where: {
            id_status: 1
        },
        attributes: ['id', 'order_id']
    })
}

const getPembayaranGagal = () => {
    return pembayaran.findAll({
        where: {
            id_status: 2
        },
        attributes: ['id', 'order_id']
    })
}

const createPembayaran = (data) => {
    return pembayaran.create(data);
}

const updatePembayaran = (data, id) => {
    return pembayaran.update(data, {
        where: {
            id: id
        }
    })
}

const deletePembayaran = (id) => {
    return pembayaran.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllPembayaran,
    getPembayaranById,
    getPembayaranBerhasil,
    getPembayaranGagal,
    createPembayaran,
    updatePembayaran,
    deletePembayaran
}
