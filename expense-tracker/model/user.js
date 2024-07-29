const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}
User.init({
  user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'User', timestamps: true });

User.associate = models => {
  User.hasMany(models.Expense, { foreignKey: 'user_id' });
  User.hasMany(models.Category, { foreignKey: 'user_id' });
  User.hasMany(models.PaymentMethod, { foreignKey: 'user_id' });
  User.hasMany(models.Budget, { foreignKey: 'user_id' });
};

module.exports = User;
