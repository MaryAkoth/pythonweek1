const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Category extends Model {}
Category.init({
  category_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, references: { model: 'Users', key: 'user_id' } },
  category_name: { type: DataTypes.STRING, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { sequelize, modelName: 'Category', timestamps: true });

Category.associate = models => {
  Category.belongsTo(models.User, { foreignKey: 'user_id' });
  Category.hasMany(models.Expense, { foreignKey: 'category_id' });
  Category.hasMany(models.Budget, { foreignKey: 'category_id' });
};

module.exports = Category;
