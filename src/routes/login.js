'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db');

router.route('/')
    .get((request, response) => {
        db.one("select * from guser LIMIT 1")
            .then(data => {
                response.send(data);
            });
    })
    .post((request, response) => {
        const { username, password } = request.body;

        db.one("SELECT count(*) as exists FROM guser WHERE username = $1 AND password = MD5($2)", [username, password])
            .then(data => {
                if(data.exists > 0) {
                    request.session.user = username;
                    response.redirect('/');
                } else {
                    response.send("bad user or password...");
                }
            });
    });

module.exports = router;
