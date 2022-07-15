const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    // look at index.js 
    entry: path.resolve(__dirname, '../src/index.js'),

    // put the out put of index.js in bundle.js
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist')
        },
            port: 9000,
            open:true,
            hot: true,
            compress: true,
            historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                      },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader'
              },
        ]
    }
}
