const ticketService = require('../services/ticketService');

const getAllTickets = async (req, res) => {
    ticketService.getAllTickets()
        .then(tickets => {
            if (!tickets) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data ticket tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data ticket berhasil ditemukan',
                    data: tickets
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

const getTicketById = async (req, res) => {
    const id = req.params.id;
    ticketService.getTicketById(id)
        .then(ticket => {
            if (!ticket) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data ticket tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data ticket berhasil ditemukan',
                    data: ticket
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

const getTicketIsUsed = async (req, res) => {
    ticketService.getTicketIsUsed()
        .then(ticket => {
            if (!ticket) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data ticket tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data ticket berhasil ditemukan',
                    data: ticket
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

const getTicketIsNotUsed = async (req, res) => {
    ticketService.getTicketIsNotUsed()
        .then(ticket => {
            if (!ticket) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data ticket tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data ticket berhasil ditemukan',
                    data: ticket
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

const getTicketByOrderId = async (req, res) => {
    const order_id = req.params.order_id;
    ticketService.getTicketByOrderId(order_id)
        .then(ticket => {
            if (!ticket) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data ticket tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data ticket berhasil ditemukan',
                    data: ticket
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

const createTicket = async (req, res) => {
    console.log(req.body)
    const data = {
        nama: req.body.nama,
        email: req.body.email,
        no_telp: req.body.no_telp,
        bukti_vaksin_url: req.body.bukti_vaksin_url,
        is_used: req.body.is_used,
        order_id: req.body.order_id
    }
    ticketService.createTicket(data)
        .then(ticket => {
            if (!ticket) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data ticket gagal dibuat',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data ticket berhasil dibuat',
                    data: ticket
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

const updateTicket = async (req, res) => {
    const id = req.params.id;
    ticketService.updateTicket(req.body, id)
        .then(ticket => {
            if (!ticket) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data ticket gagal diupdate',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data ticket berhasil diupdate',
                    data: ticket
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

const deleteTicket = async (req, res) => {
    const id = req.params.id;
    ticketService.deleteTicket(id)
        .then(ticket => {
            if (!ticket) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data ticket gagal dihapus',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data ticket berhasil dihapus',
                    data: ticket
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

module.exports = {
    getAllTickets,
    getTicketById,
    getTicketIsUsed,
    getTicketIsNotUsed,
    getTicketByOrderId,
    createTicket,
    updateTicket,
    deleteTicket
}