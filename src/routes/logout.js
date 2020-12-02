'use strict';

const express = require('express');
const router = express.Router();

router.route('/')
    .post((request, response) => {
        request.session.user = null;
        response.redirect('/');
    });

module.exports = router;
