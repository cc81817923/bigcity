/**
 * MySQL 连接池
 * 配置项从环境变量读取，生产环境不要把密码写死在代码里
 */
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host:     process.env.DB_HOST     || "127.0.0.1",
  port:     process.env.DB_PORT     || 3306,
  user:     process.env.DB_USER     || "root",
  password: process.env.DB_PASS     || "yourpassword",
  database: process.env.DB_NAME     || "bp_game",
  waitForConnections: true,
  connectionLimit: 10,
  charset: "utf8mb4",
});

module.exports = pool;
