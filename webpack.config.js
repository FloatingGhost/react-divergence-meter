const webpack = require("webpack");
const path = require("path");
const APP_DIR = path.resolve("src");

module.exports = {

    mode: "production",

    entry: {
        main: APP_DIR + "/index.js"
    },

    output: {
        libraryTarget: "umd",
        filename: "divergence.js"
    },

    module : {
        rules : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : "babel-loader"
            },
            { test: /\.json$/, 
                type: "javascript/auto",
                exclude: /node_modules/,
                use: [{
                    loader: "json-loader",
                    options: {
                        name: "./[name].[ext]"
                    }
                }]
            }
        ]
    },
  
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [
            path.resolve("src"),
            path.resolve("node_modules")
        ],
    }

};
