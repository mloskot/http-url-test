var target = 'http://google.com';

var unirest = require('unirest');
unirest.get(target).end(function (response) {
	console.log(response.status);
	console.log(response.url);
});