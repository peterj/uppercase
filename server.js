
const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/', routes);

module.exports = server;
