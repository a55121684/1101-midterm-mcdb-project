const { Pool } = require('pg');
let pool;
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'ec2-52-71-241-37.compute-1.amazonaws.com',
    database: 'd7qtraoo3tsfjb',
    password: '829705a2c8ffbf6b583900ab67a015ee3616adeb68dfdf4c9fe6fb783b696335',
    port: '5432',
  });
}

module.exports = pool;