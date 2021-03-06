//modules
const { Router } = require('express');
const bcrypt = require('bcrypt');

//ハッシュ化を行う回数
const saltRounds = 10;

//router
const router = Router();

/* POST register */
router.post('/register', (req, res) => {
    //データベースの接続
    const con = require('../../database/createCollection');

    //パスワード
    const password = req.body.password;

    //ハッシュ化
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) throw err;
        //SQL
        const sql = `INSERT INTO users(user, email, password) VALUES("${req.body.user}", "${req.body.email}", "${hash}") `;

        //データベースに対してクエリを実行
        con.query(sql, req.body, (err, result, fields) => {
            if (err) throw err;
        });
        //hashを送る
        res.send(hash);
    });
});

module.exports = router;
