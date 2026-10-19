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

// GET ALL (Membaca semua data biodata)
app.get('/biodata', (req, res) => {
  console.log("TEST DATA:");
  pool.query('SELECT * FROM biodata ORDER BY id')
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});