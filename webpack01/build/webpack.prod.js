const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    optimization: { //优化项
        minimizer: [ // 可以放置压缩方案
            new OptimizeCSSAssetsPlugin(), //用了这个 js也得手动压缩
            new TerserWebpackPlugin()
        ]
    },
    plugins: [
            new CleanWebpackPlugin()
    ]
}