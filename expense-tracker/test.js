const sequelize = require('./config/database');
const User = require('./models/User');
const Expense = require('./models/Expense');
const Category = require('./models/Category');
const PaymentMethod = require('./models/PaymentMethod');
const Budget = require('./models/Budget');

async function runTests() {
  try {
    // Authenticate database connection
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Create a User
    const user = await User.create({
      username: 'john_doe',
      email: 'john@example.com',
      password: 'securepassword',
    });
    console.log('User created:', user.toJSON());

    // Create a Category
    const category = await Category.create({
      user_id: user.user_id,
      category_name: 'Food',
    });
    console.log('Category created:', category.toJSON());

    // Create an Expense
    const expense = await Expense.create({
      user_id: user.user_id,
      category_id: category.category_id,
      amount: 50,
      date: new Date(),
      description: 'Grocery shopping',
    });
    console.log('Expense created:', expense.toJSON());

    // Read all Expenses
    const expenses = await Expense.findAll();
    console.log('All expenses:', expenses.map(exp => exp.toJSON()));

    // Update an Expense
    expense.amount = 60;
    await expense.save();
    console.log('Updated expense:', expense.toJSON());

    // Delete an Expense
    await expense.destroy();
    console.log('Expense deleted.');

  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    await sequelize.close();
  }
}

runTests();
