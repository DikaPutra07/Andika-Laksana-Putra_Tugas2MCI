'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ticket.belongsTo(
        models.order, {
          foreignKey: 'order_id',
        }
      )
    }
  }
  ticket.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    bukti_vaksin_url: DataTypes.STRING,
    is_used: DataTypes.BOOLEAN,
    order_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ticket',
  });
  return ticket;
};