const connection = require('../config/connection');

const Customer = connection.sequelize.define('customers', {
    id: { type: connection.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    customer_name: connection.Sequelize.STRING,
    createdAt: connection.Sequelize.DATE,
    updatedAt: connection.Sequelize.DATE,
});

module.exports = Customer;
