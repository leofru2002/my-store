require('dotenv').config(); // Asegura que las variables de entorno están cargadas
const config = require('../config/config'); // Importa el archivo de configuración

const { Sequelize } = require('sequelize');

const USER = encodeURIComponent(config.production.username);
const PASSWORD = encodeURIComponent(config.production.password);
const DB_NAME = config.production.database;
const DB_HOST = config.production.host;
const DB_PORT = config.production.port;
const DIALECT = 'mysql';

const URI = `mysql://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sequelize = new Sequelize(URI, {
  dialect: DIALECT,
  logging: false,
});

module.exports = sequelize;
