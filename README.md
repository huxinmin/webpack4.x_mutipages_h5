# webpack4.x_mutipages_h5
webpack4.x版本多页面多入口H5页面生成器

## 技术选型
* ArcGIS 地图API
* ES6 JS的下一个版本
* Layui 一个简单的UI库
* Jquery JS框架
* Normalize.css css的一些简单的写法集合
* Babel 将ES6编译成ES5
* Eslint 对js代码进行语法检查
* Webpack 对项目进行打包，编译，自动化，压缩，热更新等
* Sass css的预编译器
* Postcss  JavaScript 工具和插件转换 CSS 代码的工具
* Axios Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中

## 安装
环境安装，安装Nodejs和Git后，然后安装NPM镜像CNPM
```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
下载源代码：
```js
git clone https://github.com/huxinmin/webpack4.x_mutipages_h5.git --depth=1
```
解压后进入刚才下载的项目根目录执行命令：
```sh
cpm i
```


## 目录说明
* dist 打包编译后的代码，最终部署到服务器的代码
* node_modules 依赖包
* src 项目源代码
* test 单元测试，集成测试等
* webpack_conf webpack的配置文件
* .babelrc babel配置文件
* .editorconfig 不同编辑器统一代码编辑规范的配置文件
* .eslintrc.js eslint配置文件
* .gitignore 忽略一些git上传目录和文件
* package.json 项目包依赖以及一些脚本配置等
* postcss.config.js postcss的配置文件


## 使用
新建页面
```sh
npm run create xxxx
```
执行完后会在`src/pages`下面建立一个同名的文件夹和`xxxx.html`以及`xxxx.js`和`xxxx.scss`文件
```sh
npm run dev
```
启动服务器，开始开发
```sh
npm run build
```
打包命令


