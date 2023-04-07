const ticketRepository = require('../repositories/ticketRepository');

const getAllTickets = async () => {             
    try {
        const tickets = await ticketRepository.getAllTickets();
        return tickets;
    }
    catch (err) {
        return err;
    }
}

const getTicketById = async (id) => {
    try {
        const ticket = await ticketRepository.getTicketById(id);
        return ticket;
    }
    catch (err) {
        return err;
    }
}

const getTicketIsUsed = async () => {
    try {
        const ticket = await ticketRepository.getTicketIsUsed();
        return ticket;
    }
    catch (err) {
        return err;
    }
}

const getTicketIsNotUsed = async () => {
    try {
        const ticket = await ticketRepository.getTicketIsNotUsed();
        return ticket;
    }
    catch (err) {
        return err;
    }
}

const getTicketByOrderId = async (order_id) => {
    try {
        const ticket = await ticketRepository.getTicketByOrderId(order_id);
        return ticket;
    }
    catch (err) {
        return err;
    }
}

const createTicket = async (data) => {
    try {
        const ticket = await ticketRepository.createTicket(data);
        return ticket;
    }
    catch (err) {
        return err;
    }
}

const updateTicket = async (data, id) => {
    try {
        const ticket = await ticketRepository.updateTicket(data, id);
        return ticket;
    }
    catch (err) {
        return err;
    }
}

const deleteTicket = async (id) => {
    try {
        const ticket = await ticketRepository.deleteTicket(id);
        return ticket;
    }
    catch (err) {
        return err;
    }
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