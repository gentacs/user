'use strict';

const app = require('express')();
const session = require('express-session');
const port = 8000;
const login = require('./routes/login');
const logout = require('./routes/logout');
const path = require('path');
const bodyParser = require('body-parser');
const proxy = require('./routes/proxy');

app.use(session({
    secret: 'losspolsss',
    resave: false,
    saveUninitialize: true
}));

app.use(bodyParser.urlencoded({extended : true}));

app.use('/login', login);
app.use('/logout', logout);

app.use('/', proxy);

app.get('/', (request, response) => {
    if(request.session.user) {
        response.redirect('/chat');
    } else {
        response.sendFile(path.join(__dirname + '/views/login.html'));
    }
});


app.listen(port, () => console.log('user listen in port: ', port));
