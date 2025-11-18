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
    await client.query(`CREATE DATABASE ${process.env.PG_DB};`);
    console.log(`Database "${process.env.PG_DB}" created successfully.`);
} catch (err) {
    if (err.code === "42P04") {
        console.log(`Database "${process.env.PG_DB}" already exists.`);
    } else {
        console.error("Error creating database:", err);
    }
} finally {
    await client.end();
}