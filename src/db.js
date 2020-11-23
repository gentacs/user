'use strict';

const pgp = require('pg-promise')();
const user = 'guseruser';
const password = process.env.PG_PASS;
const host = 'localhost';
const port = '5432';
const database = 'guser';
const db = pgp('postgres://' + user + ':' + password + '@' + host + ':' + port + '/' + database);

module.exports = db;
