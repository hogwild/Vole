const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //The file starts the project
    entry: "./src/index.js",
    //the path where to save the files built
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    //specifying the abbr. of the path of the imported files (by alias: ) and the surfix of imported files (by extensions: )
    //resolve: {
    //    extensions: ['', '.js', '.jsx']
    //},
    //a simulated local server
    devServer: {
        contentBase: './dist',
        open: true,
        host: 'localhost',
        inline: true,
        hot: true
    },
    //for open non js files such as HTML; should install the corresponding plugins first, then use them.
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
            //filename: 'bundle.css'
        }),
    ],
    // loader; for loading CSS files
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    //setting the model: development or production
    mode: "development",

    //excluding the dependencies from the output bundles, for example, the library that is going to be loaded from URL in the index.html
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        "d3": "d3"
    }
}