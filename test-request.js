var config = require('./config');

console.log('====== request ======');
var request = require('request');
request(config.url, function(error, response, body) {
    if (error) {
        console.log('GET error', error)
    } else {
        console.log('GET response', body)
    }
});