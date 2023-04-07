const userRepository = require('../repositories/userRepository');

const getAllUser = async () => {
    try {
        const users = await userRepository.getAllUsers();
        return users;
    }
    catch (err) {
        return err;
    }
}

const getUserById = async (id) => {
    try {
        const user = await userRepository.getUserById(id);
        return user;
    }
    catch (err) {
        return err;
    }
}

const createUser = async (data) => {
    try {
        const user = await userRepository.createUser(data);
        return user;
    }
    catch (err) {
        return err;
    }
}

const updateUser = async (data, id) => {
    try {
        const mahasiswa = await userRepository.updateUser(data, id);
        return mahasiswa;
    }
    catch (err) {
        return err;
    }
}

const deleteUser = async (id) => {
    try {
        const mahasiswa = await userRepository.deleteUser(id);
        return mahasiswa;
    }
    catch (err) {
        return err;
    }
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}