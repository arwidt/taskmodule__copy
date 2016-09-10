
var gulp = require('gulp');
var async = require('async');
var copy = require('./index.js');
var del = require('del');

gulp.task('default', function() {
    
    async.series([
        function(callback) {
            del(['target']).then(function(paths) {
                console.log("Deleting:", paths);
                callback();
            });
        },
        copy('test/file.txt', 'target/newfile.txt'),
        copy('test/folder', 'target/newfolder')
    ], function() {
        console.log("DONE");
    });    

});
