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
* Mockjs 生成随机数据，拦截 Ajax 请求
* json-server 一个在前端本地运行，可以存储json数据的server
* js-cookie一个简单轻量的浏览器cookie操作库
* jQuery-File-Upload一个经典好用的jquery上传插件库
* echarts百度的图标插件

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
* server自己写的一些mock假数据，遵循restful接口规范，用于不依赖后端自己开发数据


## 使用
* 新建页面
```sh
npm run create xxxx
```
执行完后会在`src/pages`下面建立一个同名的文件夹和`xxxx.html`以及`xxxx.js`和`xxxx.scss`文件
* 启动服务器，开始开发
```sh
npm run dev
```
* 打包命令
```sh
npm run build
```
* 启动假数据接口
```sh

npm run mock
```
启动后会在9000端口生成接口，可以进行访问，现在我随便写了两个接口，访问地址为：
`http://127.0.0.1:9000/routes1/routes1Data?pageNo=1&pageSize=2`
`http://127.0.0.1:9000/routes2/routes2Data?pageNo=1&pageSize=2`


