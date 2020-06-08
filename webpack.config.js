const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: './web/src/main.js'
    },
    // output: {
    //     filename: '[name].js',

    // },
    resolve: {
        alias: {
            trainer: path.resolve(`${__dirname}/web`, 'src/' )
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./web/public/index.html",
        })
      ]
}