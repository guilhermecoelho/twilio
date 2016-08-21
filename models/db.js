var mongoose = require('mongoose');
var gracefulShutdown;
require('./bills');

var url = process.env.BASE_URL;

mongoose.connect(url);


mongoose.connection.on('connected', function () {
    console.log('mongoose connected to: ' + url);
});

mongoose.connection.on('error', function (err) {
    console.log('mongoose connected error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('mongoose disconnected');
});

//disconnect mongoose
gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('mongoose disconnected throuth' + msg);
    });
};

//restart in nodemon
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//finish application
process.once('SIGINT', function () {
    gracefulShutdown('app finish', function () {
        process.kill(process.pid, 'SIGINT');
    });
});

