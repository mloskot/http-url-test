var config = {};
config.url = 'https://www.google.com?';
        
var fs = require('fs');
if (fs.statSync("./config_local.js").isFile()) {    
    var config_local = require('./config_local.js'); 
    if (typeof config_local.url !== 'undefined') {
        config.url = config_local.url;
    }
}

module.exports = config;
