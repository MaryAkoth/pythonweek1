const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class PaymentMethod extends Model {}
PaymentMethod.init({
  payment_method_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, references: { model: 'Users', key: 'user_id' } },
  payment_method_name: { type: DataTypes.STRING, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'PaymentMethod', timestamps: true });

PaymentMethod.associate = models => {
  PaymentMethod.belongsTo(models.User, { foreignKey: 'user_id' });
};

module.exports = PaymentMethod;
