import pg from "pg";
import 'dotenv/config';
var Pool = pg.Pool;
var connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
export default connection;
