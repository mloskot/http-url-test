var config = require('./config');

console.log('====== shred ======');
var Shred = require("shred");
var shred = new Shred();
shred.get({url: config.url,
    on: {
        200: function(response) {
            console.log('GET response', response.content.data);
        },
        response: function(response) {
            console.log('GET error', response);
        }
    }
});
