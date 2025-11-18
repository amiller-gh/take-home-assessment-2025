import 'dotenv/config';
import { Client } from "pg";

// Connect to the default 'postgres' database
const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: "postgres",
    password: process.env.PG_PWD,
    port: process.env.PG_PORT,
});

try {
    await client.connect();
    await client.query(`DROP DATABASE IF EXISTS ${process.env.PG_DB};`);
    console.log(`Database "${process.env.PG_DB}" dropped successfully.`);
} catch (err) {
    console.error("Error dropping database:", err);
} finally {
    await client.end();
}
