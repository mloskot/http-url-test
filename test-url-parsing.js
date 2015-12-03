var config = require('./config');

console.log('====== url ======');
var url = require('url');
var url_parts = url.parse(config.url);
console.log(url_parts);
  
console.log('====== parseurl ======');
function createReq(url, originalUrl) {
    return { originalUrl: originalUrl, url: url };
}
var parseurl = require('parseurl');
var parseurl_parts = parseurl(createReq(config.url, config.url));
console.log(parseurl_parts);

console.log('====== url-parse ======');
var url_parse = require('url-parse');
var url_parse_parts = url_parse(config.url);
console.log(url_parse_parts);
