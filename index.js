import express from 'express';
import pg from 'pg';

import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;
const { Pool } = pg;

// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Konfigurasi Database PostgreSQL Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mahasiswa',
  password: 'derek123', // Sesuaikan dengan password database masing-masing
  port: 5432,
});