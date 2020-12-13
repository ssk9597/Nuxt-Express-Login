const { Router } = require('express');

const router = Router();

/* POST users listing. */
router.post('/register', (req, res) => {
    const con = require('../../database/createCollection');
    const sql = 'INSERT INTO users SET ?';
    con.query(sql, req.body, (err, result, fields) => {
        if (err) throw err;
    });
    res.redirect('/users');
});

module.exports = router;
