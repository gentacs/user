'use strict';

const express = require('express');
const router = express.Router();

router.route('/')
    .get((request, response) => {
        request.session.user = null;
        response.redirect('/');
    });

module.exports = router;
