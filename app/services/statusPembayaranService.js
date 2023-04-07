const statusPembayaranRepository = require('../repositories/statusPembayaranRepository');

const getAllStatusPembayaran = async () => {
    try {
        const statusPembayaran = await statusPembayaranRepository.getAllStatusPembayaran();
        return statusPembayaran;
    }
    catch (err) {
        return err;
    }
}

const getStatusPembayaranById = async (id) => {
    try {
        const statusPembayaran = await statusPembayaranRepository.getStatusPembayaranById(id);
        return statusPembayaran;
    }
    catch (err) {
        return err;
    }
}

const createStatusPembayaran = async (data) => {
    try {
        const statusPembayaran = await statusPembayaranRepository.createStatusPembayaran(data);
        return statusPembayaran;
    }
    catch (err) {
        return err;
    }
}

const updateStatusPembayaran = async (data, id) => {
    try {
        const statusPembayaran = await statusPembayaranRepository.updateStatusPembayaran(data, id);
        return statusPembayaran;
    }
    catch (err) {
        return err;
    }
}

const deleteStatusPembayaran = async (id) => {
    try {
        const statusPembayaran = await statusPembayaranRepository.deleteStatusPembayaran(id);
        return statusPembayaran;
    }
    catch (err) {
        return err;
    }
}

module.exports = {
    getAllStatusPembayaran,
    getStatusPembayaranById,
    createStatusPembayaran,
    updateStatusPembayaran,
    deleteStatusPembayaran
}
