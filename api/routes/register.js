const { Router } = require('express');
const bcrypt = require('bcrypt');

const router = Router();

/* POST users listing. */
router.post('/register', (req, res) => {
    const con = require('../../database/createCollection');

    bcrypt.hash('password', 10, (err, hash) => {
        const sql = `INSERT INTO users(user, email, password) VALUES("${req.body.user}", "${req.body.email}", "${hash}") `;
        con.query(sql, req.body, (err, result, fields) => {
            if (err) throw err;
        });
        res.send(hash);
    });
});

module.exports = router;
