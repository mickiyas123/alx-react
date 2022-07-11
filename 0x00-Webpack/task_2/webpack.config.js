const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'js/dashboard_main.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                use: [
                    'file-loader',
                              {
                                  loader: 'image-webpack-loader',
                                  options: {
                                      bypassOnDebug: true,
                                      disable: true,
                                  },
                              },
                          ],
              },
        ]
    }
}