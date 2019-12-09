# Webpack中必需掌握的配置
loader主要用于把模块原内容按照需要转换成新内容，可以加载非 JS 模块
通过使用不同的Loader, Webpack可以把不同的文件都转换成JS文件，比如CSS、ES6/7、JSX等

我们来看看这些我们必须掌握的loader!

## 1.loader的编写
### 1.1loader的使用
- test: 匹配处理文件的扩展名的正则表达式
- use: loader名称，就是你要使用模块的名称
- include/exclude: 手动指定必须处理的文件夹或屏蔽不需要处理的文件夹
- options: 为loaders提供额外的设置选项

默认`loader`的顺序是**从上到下**、**从右到左**执行，当然执行顺序也可以手动定义的，接下来我们依次介绍常见的  loader，来感受`loader`的魅力！

我们基于这个配置来继续编写：
