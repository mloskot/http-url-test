var config = require('./config');

console.log('====== unirest ======');
var unirest = require('unirest');
unirest.get(config.url).end(function (response) {
    if (response.error) {
        console.log('GET error', response.error)
    } else {
        console.log('GET response', response.raw_body)
    }
});