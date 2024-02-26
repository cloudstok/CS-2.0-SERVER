const { createPool } = require("mysql2/promise");
require('dotenv').config()
const dbUrl = process.env.DB_URL || "" 
const read = createPool(dbUrl);
const write = createPool(dbUrl);

module.exports = { read, write}

