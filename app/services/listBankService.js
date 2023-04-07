const listBankRepository = require('../repositories/listBankRepository');

const getAllListBank = async () => {
    try {
        const listBank = await listBankRepository.getAllListBank();
        return listBank;
    }
    catch (err) {
        return err;
    }
}

const getListBankById = async (id) => {
    try {
        const listBank = await listBankRepository.getListBankById(id);
        return listBank;
    }
    catch (err) {
        return err;
    }
}

const createListBank = async (data) => {
    try {
        const listBank = await listBankRepository.createListBank(data);
        return listBank;
    }
    catch (err) {
        return err;
    }
}

const updateListBank = async (data, id) => {
    try {
        const listBank = await listBankRepository.updateListBank(data, id);
        return listBank;
    }
    catch (err) {
        return err;
    }
}

const deleteListBank = async (id) => {
    try {
        const listBank = await listBankRepository.deleteListBank(id);
        return listBank;
    }
    catch (err) {
        return err;
    }
}

module.exports = {
    getAllListBank,
    getListBankById,
    createListBank,
    updateListBank,
    deleteListBank
}