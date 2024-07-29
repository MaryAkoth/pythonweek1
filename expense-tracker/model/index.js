const sequelize = require('../config/database');
const User = require('./User');
const Expense = require('./Expense');
const Category = require('./Category');
const PaymentMethod = require('./PaymentMethod');
const Budget = require('./Budget');

const models = {
  User,
  Expense,
  Category,
  PaymentMethod,
  Budget
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = sequelize.Sequelize;

module.exports = models;
