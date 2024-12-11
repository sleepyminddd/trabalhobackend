const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('gt_backend', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
