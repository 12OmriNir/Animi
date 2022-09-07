module.exports = {
    port: process.env.PORT || 3000,
    pgHost: process.env.PGHOST || 'localhost',
    pgUser: process.env.PGUSER || 'postgres',
    pgDatabase: process.env.PGDATABASE || 'postgres',
    pgPassword: process.env.PGPASSWORD || 'Aa123456',
    pgPort: process.env.PGPORT || 5432
}