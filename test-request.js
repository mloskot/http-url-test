var target = 'http://google.com';

var request = require('request');
request(target, function(error, response, body) {
    console.log(response.statusCode);
});