const pembayaranService = require('../services/pembayaranService');

const getAllPembayaran = async (req, res) => {
    pembayaranService.getAllPembayaran()
        .then(pembayarans => {
            if (!pembayarans) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data pembayaran tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data pembayaran berhasil ditemukan',
                    data: pembayarans
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

const getPembayaranById = async (req, res) => {
    pembayaranService.getPembayaranById(req.params.id)
        .then(pembayaran => {
            if (!pembayaran) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data pembayaran tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data pembayaran berhasil ditemukan',
                    data: pembayaran
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

const getPembayaranBerhasil = async (req, res) => {
    pembayaranService.getPembayaranBerhasil()
        .then(pembayaran => {
            if (!pembayaran) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data pembayaran tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data pembayaran berhasil ditemukan',
                    data: pembayaran
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

const getPembayaranGagal = async (req, res) => {
    pembayaranService.getPembayaranGagal()
        .then(pembayaran => {
            if (!pembayaran) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data pembayaran tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data pembayaran berhasil ditemukan',
                    data: pembayaran
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


const createPembayaran = async (req, res) => {
    pembayaranService.createPembayaran(req.body)
        .then(pembayaran => {
            res.status(200).send({
                status: 'success',
                message: 'Data pembayaran berhasil ditambahkan',
                data: pembayaran
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

const updatePembayaran = async (req, res) => {
    const id = req.params.id;
    pembayaranService.updatePembayaran(req.body, id)
        .then(pembayaran => {
            res.status(200).send({
                status: 'success',
                message: 'Data pembayaran berhasil diubah',
                data: pembayaran
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

const deletePembayaran = async (req, res) => {
    pembayaranService.deletePembayaran(req.params.id)
        .then(pembayaran => {
            res.status(200).send({
                status: 'success',
                message: 'Data pembayaran berhasil dihapus',
                data: pembayaran
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
    getAllPembayaran,
    getPembayaranById,
    getPembayaranBerhasil,
    getPembayaranGagal,
    createPembayaran,
    updatePembayaran,
    deletePembayaran
}