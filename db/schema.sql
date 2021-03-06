DROP DATABASE IF EXISTS `burgers_db_sqlz`;
CREATE DATABASE `burgers_db_sqlz`;
USE `burgers_db_sqlz`;

CREATE TABLE `burgers` (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP,
    customerId INT,
    PRIMARY KEY (`id`)

);

CREATE TABLE `customers` (
    id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP,
    PRIMARY KEY (`id`)
);
