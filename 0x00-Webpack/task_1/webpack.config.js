const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'js/dashboard_main.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
    },
}
