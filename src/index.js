const app = require('express')();
const session = require('express-session');
const port = 8000;
const login = require('./routes/login');
const logout = require('./routes/logout');
const path = require('path');
const bodyParser = require('body-parser');

app.use(session({
    secret: 'losspolsss',
    resave: false,
    saveUninitialize: true
}));

app.use(bodyParser.urlencoded({extended : true}));

app.use('/login', login);
app.use('/logout', logout);

app.get('/', (request, response) => {
    if(request.session.user) {
        response.send({session: request.session.user});
    } else {
        response.sendFile(path.join(__dirname + '/views/login.html'));
    }
});


app.listen(port, () => console.log('user listen in port: ', port));
