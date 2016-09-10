var fse = require('node-fs-extra');

module.exports = function(from, to, async) {
    async = async ? true : false;
    return function(callback) {
        if(async) {
            fse.copy(from, to, callback);
        } else {
            fse.copySync(from, to);
            callback();
        } 
    } 
} 

