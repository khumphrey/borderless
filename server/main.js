'use strict';
let chalk = require('chalk');

// Create a node server instance! cOoL!
let server = require('http').createServer();

let createApplication = function () {
    let app = require('./app');
    server.on('request', app); // Attach the Express application.
};

let startServer = function () {

    let PORT = process.env.PORT || 8081;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

createApplication();
startServer();
