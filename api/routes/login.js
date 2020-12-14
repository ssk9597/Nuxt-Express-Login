const { Router } = require('express');

const router = Router();

/* POST users listing. */
router.post('/login', (req, res) => {
    const con = require('../../database/createCollection');
    const sql = `SELECT * FROM users WHERE users.email = "${req.body.email}" AND users.password = "${req.body.password}"`;
    con.query(sql, req.body, (err, result, fields) => {
        console.log(result);
        res.send('success');
    });
});

module.exports = router;
