const dev = require('./webpack.dev.js')
const prod = require('./webpack.prod.js')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
module.exports = (env) => {

    let isDev = env.development

    const base = {
        entry: path.resolve(__dirname, '../src/index.tsx'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist')
        },
        module: {
            //转化什么文件 用什么去转 使用哪些loader
            // loader 写法 [] / {} ''
            // 打包css 还需要处理一下 样式前缀
            //开发的时候可以这样，但是生产上会存在一个问题
            // 解析的css的时候 就不能渲染dom
            // 我们希望css 可以并行和js 一同加载 这样就需要mini-css-extract-plugin这个插件将css抽离
            rules: [
                {
                    test: /.tsx?$/,
                    use: 'babel-loader'
                },
                {
                    //解析js会默认调用babel-core
                    test: /.js$/,
                    use: 'babel-loader'

                },
                {
                    test: /\.css$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                { //图标的转化
                    test: /\.(woff|ttf|eot|svg)$/,
                    use: 'file-loader'
                },
                { //图片的转化
                    test: /\.(jpe?g|png|gif)$/,
                    use: {
                        loader: 'url-loader',
                        //如果大于100k的图片，会使用file-loader
                        options: {
                            name: 'imgage/[contentHash].[ext]',
                            limit: 100 * 1024
                        }
                    } 
                    //file-loader 默认的功能是拷贝的作用
                    //我们希望当前比较小的图片可以转化为 base64 坏处打包文件体积变大，好处就是不用发送http请求
                }
            ]

        },
        plugins: [
            !isDev && new MiniCssExtractPlugin({ //如果是开发环境就不要使用剥离样式的插件
                filename: 'css/main.css'
            }),
            //在每次打包之前 先清除dist目录下的文件
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),
                filename: 'index.html',
                minify: !isDev && {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true
                }
            })
        ].filter(Boolean)
    }

    if (isDev) {
        return merge(base, dev)
    } else {
        return merge(base, prod)
    }
}