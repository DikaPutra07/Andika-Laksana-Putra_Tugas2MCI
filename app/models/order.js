'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        order.belongsTo(
          models.user, {
            foreignKey: 'user_id',
          }
        ),
        order.belongsTo(
          models.order_status, {
            foreignKey: 'order_status_id',
          }
        ),
        order.hasOne(models.pembayaran, {
          foreignKey: 'order_id',
        }
        ),
        order.hasMany(models.ticket, {
          foreignKey: 'order_id',
        }
        )
    }
  }
  order.init({
    unique_payment_code: DataTypes.BIGINT,
    total_biaya: DataTypes.FLOAT,
    user_id: DataTypes.INTEGER,
    order_status_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};