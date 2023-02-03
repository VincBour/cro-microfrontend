const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
    entry: {
        index: "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
        clean: true
    },
    plugins:[
        new ModuleFederationPlugin({
            name: "search",
            filename: "remoteEntry.js",
            exposes: {
                "./Search": "./src/Search",
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"]
                },
                "ui": {
                    singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            title: "Output Container",
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "./dist")
        },
        port: 3003,
        liveReload: true,
        watchFiles: [path.resolve(__dirname, "./src")]
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
}