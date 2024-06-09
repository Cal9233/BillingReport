const config = require('../utils.js/config');
﻿const mysql = require('mysql2/promise');

const pool = mysql.createPool(config.dbConfig);

const query = async (sql, values) => {
    try {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(sql, values);
            return rows;
        } finally {
            connection.release();
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports = { mysql, query };