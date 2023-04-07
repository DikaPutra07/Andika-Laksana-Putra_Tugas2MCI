const { list_bank } = require('../models');

const getAllListBank = () => {
    return list_bank.findAll();
}

const getListBankById = (id) => {
    return list_bank.findOne({
        where: {
            id: id
        }
    })
}

const createListBank = (data) => {
    return list_bank.create(data);
}

const updateListBank = (data, id) => {
    return list_bank.update(data, {
        where: {
            id: id
        }
    })
}

const deleteListBank = (id) => {
    return list_bank.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllListBank,
    getListBankById,
    createListBank,
    updateListBank,
    deleteListBank
}