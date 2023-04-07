'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list_bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      list_bank.hasMany(models.pembayaran, {
        foreignKey: 'id_bank'
      })
    }
  }
  list_bank.init({
    nama_bank: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'list_bank',
  });
  return list_bank;
};