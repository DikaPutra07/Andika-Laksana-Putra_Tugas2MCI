const listBankService = require('../services/listBankService');

const getAllListBank = async (req, res) => {
    listBankService.getAllListBank()
        .then(listBanks => {
            if (!listBanks) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data list bank tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data list bank berhasil ditemukan',
                    data: listBanks
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

const getListBankById = async (req, res) => {
    listBankService.getListBankById(req.params.id)
        .then(listBank => {
            if (!listBank) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data list bank tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data list bank berhasil ditemukan',
                    data: listBank
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

const createListBank = async (req, res) => {
    listBankService.createListBank(req.body)
        .then(listBank => {
            res.status(200).send({
                status: 'success',
                message: 'Data list bank berhasil ditambahkan',
                data: listBank
            });
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

const updateListBank = async (req, res) => {
    const id = req.params.id;
    listBankService.updateListBank(req.body, id)
        .then(listBank => {
            res.status(200).send({
                status: 'success',
                message: 'Data list bank berhasil diubah',
                data: listBank
            });
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

const deleteListBank = async (req, res) => {
    listBankService.deleteListBank(req.params.id)
        .then(listBank => {
            res.status(200).send({
                status: 'success',
                message: 'Data list bank berhasil dihapus',
                data: listBank
            });
        })
        .catch(err => {
            res.status(500).send({
                status: 'error',
                message: err.message,
                data: {}
            });
        }
    )
}

module.exports = {
    getAllListBank,
    getListBankById,
    createListBank,
    updateListBank,
    deleteListBank
}