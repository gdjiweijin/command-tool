# command-tool learning
我们在前端工程化中，经常需要编写一些脚本来完成对应工作，包括commit信息校验，代码eslint校验 等等
我们可以使用https://github.com/yargs/yargs 来方便我们来统一管理我们的脚本，并且我们还可以通过发布
成一个公共包 给各个项目使用

## 第一章，yargs的简单使用

### 启动一个项目，安装yargs
```
   yarn add yargs
```

### 创建入口文件
``` 
// command-tool

#!/usr/bin/env node
// https://github.com/yargs/yargs
require('yargs')
    .commandDir('lib')
    .alias('h', 'help')
    .parse()
```
### 创建第一个简单脚本

``` 
// lib/console.js
module.exports = {
    command: 'console [log]',
    desc: 'console log',
    builder: (yargs) => yargs.default('log', 'default'),
    handler: (args) => {
        console.log(args.log)
    }
}
``` 
### 执行
``` 
  node command-tool console 11
``` 
就会输出11

### 发包
我们在package.json 定义bin字段
``` 
  "bin": {
     "command-tool": "command-tool"
  }
``` 
其他项目安装了command-tool依赖包后就可以使用command-tool提供的命令