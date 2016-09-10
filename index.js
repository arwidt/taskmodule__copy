var fse = require('fse');

module.exports = function(from, to, async) {
    return function(callback) {
        if(async) {
            fse.copy(from, to, callback);
        } else {
            fse.copySync(from, to);
            callback();
        } 
    } 
} 

