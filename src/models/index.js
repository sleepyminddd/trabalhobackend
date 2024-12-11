require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});
const Category = require('./category')(sequelize, DataTypes);
module.exports = { sequelize, Category };