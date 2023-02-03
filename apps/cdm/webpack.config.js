const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
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
        new HtmlWebpackPlugin({
            title: "Output CDM",
            template: "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name: "cdm",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./Cdm": "./src/Guest",
            },
            shared: {
                ...deps,
                react: {
                  singleton: true,
                  requiredVersion: deps.react,
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: deps["react-dom"],
                },
                "ui": {
                    singleton: true
                }
            }
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "./dist")
        },
        port: 3002,
        liveReload: true,
        watchFiles: [path.resolve(__dirname, "./src")],
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
          }
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