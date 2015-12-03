var config = require('./config');

console.log('====== urllib ======');
var urllib = require('urllib');
urllib.request(config.url).then(function (response) {
  console.log('GET response', response.data.toString()); 
}).catch(function (err) {
  console.log('GET error', err);
});