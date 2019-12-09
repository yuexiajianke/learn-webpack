//webpack 是基于nodejs 语法是commonsjs规范
//默认导出的是配置对象
const path = require('path')

// modeule.exports = {
//     mode: 'development' //当前是开发模式
//     //入口 出口
//     entry: path.resolve(__dirname, './src/index.js'), //写路径都采用绝对路径
//     output: { //出口配置
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// } 

//一般情况下，我们分成两种模式 一个是开发模式
//一个是生产模式
//所以我们通常还会定义一个基本配置
module.exports = (env) => { // env 是环境变量
    //这个函数要返回配置文件，没有返回采用默认配置
    console.log(env)
}