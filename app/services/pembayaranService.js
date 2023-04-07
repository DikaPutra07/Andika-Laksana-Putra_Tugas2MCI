const pembayaranRepository = require('../repositories/pembayaranRepository');

const getAllPembayaran = async () => {
    try {
        const pembayarans = await pembayaranRepository.getAllPembayaran();
        return pembayarans;
    }
    catch (err) {
        return err;
    }
}

const getPembayaranById = async (id) => {
    try {
        const pembayaran = await pembayaranRepository.getPembayaranById(id);
        return pembayaran;
    }
    catch (err) {
        return err;
    }
}

const getPembayaranBerhasil = async () => {
    try {
        const pembayaran = await pembayaranRepository.getPembayaranBerhasil();
        return pembayaran;
    }
    catch (err) {
        return err;
    }
}

const getPembayaranGagal = async () => {
    try {
        const pembayaran = await pembayaranRepository.getPembayaranGagal();
        return pembayaran;
    }
    catch (err) {
        return err;
    }
}

const createPembayaran = async (data) => {
    try {
        const pembayaran = await pembayaranRepository.createPembayaran(data);
        return pembayaran;
    }
    catch (err) {
        return err;
    }
}

const updatePembayaran = async (data, id) => {
    try {
        const pembayaran = await pembayaranRepository.updatePembayaran(data, id);
        return pembayaran;
    }
    catch (err) {
        return err;
    }
}

const deletePembayaran = async (id) => {
    try {
        const pembayaran = await pembayaranRepository.deletePembayaran(id);
        return pembayaran;
    }
    catch (err) {
        return err;
    }
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

