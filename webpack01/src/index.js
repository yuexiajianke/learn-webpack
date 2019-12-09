//webpack 默认支持 模块的写法 commonjs 规范 也就是node规范
//同样的它也支持 es6 规范 esmodule

//所以这里就可以直接使用require


//以下这种方式是可以在node环境下执行的，但是有一个问题，这种方式在浏览器里面是不能运行的，浏览器没有
//require 也没有module.exports,浏览器不认识这些，所以我们需要把这个模块打包，解析出浏览器可以识别
//的代码

let result = require('./a-module')
console.log(result)

import logo from './logo.jpg'

let img = document.createElement('img')

img.src = logo

document.body.appendChild(img)

//首先我们使用安装的weback webpack-cli 默认的0配置的方式来打包，它默认的会打包src下的index.js
//--save-dev 表示安装在开发环境下也就是node_modules里面

//第一种打包方式npx
//npx 是npm 5.2之后出来的，它可以调用当前node_modules下bin目录里面的命令
// npx webpack
//两个模式 开发模式 生产环境
//npx webpack --mode development  打包时指定环境，webpack-cli 会解析参数
//dist目录下会生成一个main.js文件，这个就是打包后的文件，开发环境是不会被压缩的，生产环境会压缩

//0配置有局限性，它必须时打包src下一个叫index.js的文件，打包生产的也必需叫dist目录下的一个main.js

//第二种打包方式
//webpack配置文件 默认叫webpack.config.js webpack.file.js
 
//webpack.dev.js 开发时的配置
//webpack.prod.js 生产时的配置，比如生产做样式的抽离，图片的压缩，分离代码

//如果是开发环境 要使用webpack-dev-server
// webpack-dev-server 是在内存中打包的 不会产生实体文件

//webpack 插件一是引入二是new ，这是它的特点

//通过--config 指定执行的文件是哪一个
//    1) 就是默认引用base 传入模式
//    2) 分别引用base, prod,在特定的地方引入base

//js 的转化
//说到js的转化一般是把es6转化为es5,在转化的过程中我们需要干很多很多事，比如有些api 不是 es6语法
// 可能更高级的，像我用到的装饰器，类的属性或者更高级的
//这个时候我们就需要用到babel来转化，先明确这个babel的功能就是把高级语法转化为低级语法，并且可以
//提供一些插件和预设帮我们转化，但是像咱们以前的vue-cli 它里面用的是基于babel6来实现的
//我们现在的版本都是babel7了

//我们要用babel 第一就要用到babel里面的几个核心的模块 
//第一 @babel/core 这个核心模块，其次是@babel/preset-env 它是一个将es6转化为es5的插件包，它叫预设
//它是由核心模块帮我调用的,但是默认这些插件包都是在webpack里面的，所以我们还需要babel-loader
//明确这三者之间的关系，第一babel-loader 是babel和webpack之间的桥梁，它会默认的去调用@babel/core
//@babel/core 会调用@babel/preset-env里面的插件去解析es6转成es5
//默认会调用 @babel/core会转化代码，转化的时候需要用 @babel/preset-env转化成es5

// @log
// class A {
//     a = 1
// }

// function log(target) {

// }

// [1,2,3].includes(1)

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<div>hello</div>, document.getElementById('root'))

