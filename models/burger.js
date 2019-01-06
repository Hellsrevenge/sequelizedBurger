const connection = require('../config/connection');
const Customer = require("./customer")

const Burger = connection.sequelize.define('burgers', {
    id: { type: connection.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    burger_name: connection.Sequelize.STRING,
    devoured: connection.Sequelize.BOOLEAN,
    createdAt: connection.Sequelize.DATE,
    updatedAt: connection.Sequelize.DATE,
    customerId: connection.Sequelize.INTEGER
});

Burger.belongsTo(Customer, {foreignKey: 'customerId', targetKey: 'id'});

module.exports = Burger;
