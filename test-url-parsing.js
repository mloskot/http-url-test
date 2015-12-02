var target = 'http://server.com/api/item.json?';

var url = require('url');
var url_parts = url.parse(target);
console.log('=== url ===');
console.log(url_parts);

function createReq(url, originalUrl) {
  return {
    originalUrl: originalUrl,
    url: url
  };
}
var parseurl = require('parseurl');
var parseurl_parts = parseurl(createReq(target, target));
console.log('=== parseurl ===');
console.log(parseurl_parts);

var url_parse = require('url-parse');
var url_parse_parts = url_parse(target);
console.log('=== url-parse ===');
console.log(url_parse_parts);
