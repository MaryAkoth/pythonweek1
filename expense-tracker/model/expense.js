const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Expense extends Model {}
Expense.init({
  expense_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, references: { model: 'Users', key: 'user_id' } },
  category_id: { type: DataTypes.INTEGER, references: { model: 'Categories', key: 'category_id' } },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  description: { type: DataTypes.STRING },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Expense', timestamps: true });

Expense.associate = models => {
  Expense.belongsTo(models.User, { foreignKey: 'user_id' });
  Expense.belongsTo(models.Category, { foreignKey: 'category_id' });
};

module.exports = Expense;
