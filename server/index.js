if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prodServer.js');
} else {
    module.exports = require('./devServer.js');
}
