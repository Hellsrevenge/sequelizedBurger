const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.CLEARDB_NAME,
    process.env.CLEARDB_USER,
    process.env.CLEARDB_PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.CLEARDB_HOST,
        port: 3306
    }
);

module.exports = {sequelize, Sequelize};
