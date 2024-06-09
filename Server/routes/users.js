const express = require('express');
const router = express.Router();
const {query} = require('../utils.js/mySqlConnector');

router.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    const queryScript = 'SELECT * FROM Users WHERE id = ?';
    try {
        const results = await query(queryScript, [id]);
        
        if (results.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        
        res.json(results[0]);
    } catch (error) {
        console.error('Error fetching user from Users table:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;