const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "postgres",
  password: "Aa123456",
  port: 5432,
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
