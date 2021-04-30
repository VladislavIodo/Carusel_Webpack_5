const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** @type {import("webpack").Configuration} */

const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        contentBase: "../dist",
        open: "chrome",
        hot: true,
    },
    target: "web",
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ],
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
}

module.exports = merge(common, devConfig);