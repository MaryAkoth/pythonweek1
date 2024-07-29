const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Budget extends Model {}
Budget.init({
  budget_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, references: { model: 'Users', key: 'user_id' } },
  category_id: { type: DataTypes.INTEGER, references: { model: 'Categories', key: 'category_id' } },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Budget', timestamps: true });

Budget.associate = models => {
  Budget.belongsTo(models.User, { foreignKey: 'user_id' });
  Budget.belongsTo(models.Category, { foreignKey: 'category_id' });
};

module.exports = Budget;
