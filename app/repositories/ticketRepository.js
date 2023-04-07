const { ticket } = require('../models');

const getAllTickets = () => {
    return ticket.findAll({
        attributes: ['id', 'nama', 'email', 'no_telp', `order_id`]
    });
}

const getTicketById = (id) => {
    return ticket.findOne({
        where: {
            id: id
        },
        attributes: ['id', 'nama', 'email', 'no_telp', `order_id`]
    })
}

const getTicketIsUsed = () => {
    return ticket.findAll({
        where: {
            is_used: true
        },
        attributes: ['id', 'nama', 'email', 'no_telp', `order_id`]
    })
}

const getTicketIsNotUsed = () => {
    return ticket.findAll({
        where: {
            is_used: false
        },
        attributes: ['id', 'nama', 'email', 'no_telp', `order_id`]
    })
}

const getTicketByOrderId = (order_id) => {
    return ticket.findAll({
        where: {
            order_id: order_id
        },
        attributes: ['id', 'nama', 'email', 'no_telp', `order_id`]
    })
}

const createTicket = (data) => {
    return ticket.create(data);
}

const updateTicket = (data, id) => {
    return ticket.update(data, {
        where: {
            id: id
        }
    })
}

const deleteTicket = (id) => {
    return ticket.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketIsUsed,
    getTicketIsNotUsed,
    getTicketByOrderId
}


