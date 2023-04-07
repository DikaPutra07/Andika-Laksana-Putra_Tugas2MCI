const userServices = require('../services/userService');

const getAllUser = async (req, res) => {
    userServices.getAllUser()
        .then(users => {
            if (!users) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data user tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data user berhasil ditemukan',
                    data: users
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

const getUserById = async (req, res) => {
    const id = req.params.id;
    userServices.getUserById(id)
        .then(user => {
            if (!user) {
                res.status(404).send({
                    status: 'error',
                    message: 'Data user tidak ditemukan',
                    data: {}
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Data user berhasil ditemukan',
                    data: user
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

const createUser = async (req, res) => {
    console.log(req.body)
    const data = {
        user_name: req.body.user_name,
        alamat: req.body.alamat,
        email: req.body.email,
    }
    userServices.createUser(data)
        .then(user => {
            res.status(201).send({
                status: 'success',
                message: 'Data user berhasil ditambahkan',
                data: user
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

const updateUser = async (req, res) => {
    const id = req.params.id;
    userServices.updateUser(req.body, id)
        .then(user => {
            res.status(200).send({
                status: 'success',
                message: 'Data user berhasil diupdate',
                data: user
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

const deleteUser = async (req, res) => {
    const id = req.params.id;
    userServices.deleteUser(id)
        .then(user => {
            res.status(200).send({
                status: 'success',
                message: 'Data user berhasil dihapus',
                data: user
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
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
