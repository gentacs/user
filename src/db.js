'use strict';

const pgp = require('pg-promise')();
const user = process.env.PG_USER;
const password = process.env.PG_PASS;
const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const database = process.env.PG_DB;
const db = pgp('postgres://' + user + ':' + password + '@' + host + ':' + port + '/' + database);

module.exports = db;
