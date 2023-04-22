const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const plugins = defaultConfig.plugins.filter(
    (plugin) => !(plugin instanceof CleanWebpackPlugin)
);

module.exports = {
    ...defaultConfig,
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "./build/[name].js",
        path: __dirname,
    },
    module: {
        ...defaultConfig.module,
    },
    plugins: [
        ...plugins,
    ],
};
