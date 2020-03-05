# typescript 服务端demo

## 步骤

* 初始化项目
```sh
    npx express-generator ts-express-example
    cd ts-express-example
    npm install

    # 安装 typescript
    npm i typescript -D

    # 生成 typescript 配置文件
    npx typescript --init
```

* 修改文件.js 为 .ts

* 解决 ts 生报错
```sh
# 安装声明文件
npm i -D @types/node @types/express
```

* 解决express 声明文件导出， 及 app.use((err, req, res, next))（error handler 类型推断错误问题)
```typescript
// @types/express express/index.d.ts export = express 问题
// var express = require('express')
import express from 'express
```

* 统一模块化方案 require 改为 import
```sh
    #安装缺失的声明文件
    npm i @types/http-errors @types/cookie-parser @types/morgan -D
```

*  类型保护
```javascript
    // server.ts
    add!.port
```

* 修改tsconfig.json
```json
{
"outDir": "./dist",    
}
```

* 安装shelljs copy views public 到 dist 
* 编写script 安装 ts-node
* tsconfig.json 排除 copyStatic.ts
* 安装nodemon 更新代码 不用重启服务 并增加script脚本
  
## docker-compose 安装mysql 并初始化数据库 
## 数据库的操作

## 待解决的问题
[ ] docker-compose up 初始化数据库乱码的问题
[ ] Node 与 前端 代码仓库管理
[ ] docker 容器服务端与容器前端启动 部署、升级问题






