'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status_pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      status_pembayaran.hasMany(models.pembayaran, {
        foreignKey: 'id_status'
      })
    }
  }
  status_pembayaran.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'status_pembayaran',
  });
  return status_pembayaran;
};