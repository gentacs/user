'use strict';

const proxy = require('express-http-proxy');
const router = require('express').Router();

const sites = [
    {name: '/chat', url: 'http://localhost:8100'}
];

sites.forEach(site => {
    router.use(site.name, (request, response, next) => {
        const { user } = request.session;

        if(user) {
            request.headers['user'] = user;
            next();
        } else {
            response.redirect('/');
        }
    });

    router.use(site.name, proxy(site.url));
});

module.exports = router;
