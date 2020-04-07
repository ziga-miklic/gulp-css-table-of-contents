var through = require('through2'),
    toc = require('css-table-of-contents');

module.exports = function(options) {
    return through.obj(function(file, encoding, callback) {
        file.contents = new Buffer(toc({ code: file.contents.toString(), ...options }));
        
        callback(null, file);
    });
};
