
function formatPath(options) {

    options = options || {};
    
    const sep = options.isWindows ? "\\" : '/';
    var dir = options.dir || '.';
    var filename = options.filename || 'test';
    var ext = options.ext.startsWith('.') ? options.ext : `.${options.ext}`;
    return dir + sep + filename + ext;
}

var options = {
    dir: 'home',
    filename: 'test',
    ext: 'js',
    isWindows: true,
};

console.log(formatPath(options));