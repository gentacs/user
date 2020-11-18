'use strict';

const pgp = require('pg-promise')();
const user = 'postgres';
const password = 'mysecretpassword';
const host = 'localhost';
const port = '5432';
const database = 'guser';
const db = pgp('postgres://' + user + ':' + password + '@' + host + ':' + port + '/' + database);

module.exports = db;
