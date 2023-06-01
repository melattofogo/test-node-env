// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  nodeenv: process.env.NODE_ENV
};