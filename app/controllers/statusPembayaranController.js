const statusPembayaranService = require('../services/statusPembayaranService');

const getAllStatusPembayaran = async (req, res) => {
    statusPembayaranService.getAllStatusPembayaran()
        .then(statusPembayarans => {
            if (!statusPembayarans) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data status pembayaran tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data status pembayaran berhasil ditemukan',
                    data: statusPembayarans
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

const getStatusPembayaranById = async (req, res) => {
    statusPembayaranService.getStatusPembayaranById(req.params.id)
        .then(statusPembayaran => {
            if (!statusPembayaran) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data status pembayaran tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data status pembayaran berhasil ditemukan',
                    data: statusPembayaran
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

const createStatusPembayaran = async (req, res) => {
    statusPembayaranService.createStatusPembayaran(req.body)
        .then(statusPembayaran => {
            res.status(200).send({
                status: 'success',
                message: 'Data status pembayaran berhasil ditambahkan',
                data: statusPembayaran
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

const updateStatusPembayaran = async (req, res) => {
    const id = req.params.id;
    statusPembayaranService.updateStatusPembayaran(req.body, id)
        .then(statusPembayaran => {
            res.status(200).send({
                status: 'success',
                message: 'Data status pembayaran berhasil diubah',
                data: statusPembayaran
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

const deleteStatusPembayaran = async (req, res) => {
    statusPembayaranService.deleteStatusPembayaran(req.params.id)
        .then(statusPembayaran => {
            res.status(200).send({
                status: 'success',
                message: 'Data status pembayaran berhasil dihapus',
                data: statusPembayaran
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
    getAllStatusPembayaran,
    getStatusPembayaranById,
    createStatusPembayaran,
    updateStatusPembayaran,
    deleteStatusPembayaran
}