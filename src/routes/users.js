'use strict';

const express = require('express');
const router = express.Router();

router.route('/info')
    .get((request, response) => {
        const data = {
            name: request.session.user
        };
        response.send(data);
    });

module.exports = router;
