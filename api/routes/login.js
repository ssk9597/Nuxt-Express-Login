//modules
const { Router } = require('express');
const bcrypt = require('bcrypt');

//router
const router = Router();

/* POST login */
router.post('/login', (req, res) => {
    //データベースの接続
    const con = require('../../database/createCollection');

    //SQL
    const sql = `SELECT * FROM users WHERE users.email = "${req.body.email}"`;

    //データベースに対してクエリを実行
    con.query(sql, req.body, (err, user) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        if (!user) {
            return res.send({ message: 'メールアドレスかパスワードが間違っています' });
        }

        const userPassword = user[0].password;

        //ハッシュ値の比較
        bcrypt.compare(req.body.password, userPassword, (err, result) => {
            if (err) {
                return res.status(400).send({ error: err.message });
            }
            if (!result) {
                return res.send({ message: 'メールアドレスかパスワードが間違っています' });
            }
            return res.send({ message: 'パスワードが正しいです！' });
        });
    });
});

module.exports = router;
