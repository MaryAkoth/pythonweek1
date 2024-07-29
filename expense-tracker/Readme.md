Expense Tracker

Description
This project involves designing a relational database schema using MySQL and integrating it with Node.js using Sequelize. The database stores expense data and user profiles.

Database Schema
- Users: Stores user information.
- Expenses: Stores expense details.
- Categories: Stores expense categories.
- Payment Methods: Stores payment methods.
- Budget:: Stores budget information.
Installation
1. Install Node.js and npm.
2. Install MySQL.
3. Clone the repository.
4. Install dependencies:
   ```bash
   npm install
Models
User: Defines the user model.
Expense: Defines the expense model.
Category: Defines the category model.
Payment Method: Defines the payment method model.
Budget: Defines the budget model.
Associations
User has many Expenses, Categories, Payment Methods, and Budgets.
Expense belongs to User and Category.
Category belongs to User and has many Expenses and Budgets.
Payment Method belongs to User.
Budget belongs to User and Category.