const Pool = require("pg").Pool;
import * as config from './config';

const pool = new Pool({
  host: config.pgHost,
  user: config.user,
  database: config.pgDatabase,
  password: config.pgPassword,
  port: config.pgPort,
});

async function query(text, values) {
  const Pool = pool;
  try {
    const result = await Pool.query({ text, values });
    return result;
  } catch (err) {
    console.log("error", err);
  }
}

module.exports = { query };
