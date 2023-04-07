'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        pembayaran.belongsTo(
          models.order, {
            foreignKey: 'order_id'
          }
        ),
        pembayaran.belongsTo(
          models.status_pembayaran, {
            foreignKey: 'id_status'
          }
        ),
        pembayaran.belongsTo(
          models.list_bank, {
            foreignKey: 'id_bank'
          }
        )
    }
  }
  pembayaran.init({
    bukti_pembayaran_url: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    id_bank: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembayaran',
  });
  return pembayaran;
};