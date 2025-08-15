import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false 
  },
  max: 10,                        // จำนวน connection สูงสุดใน pool
  idleTimeoutMillis: 300000,      // ปิด connection ถ้าไม่ได้ใช้ 300 วินาที
});

export default pool;
