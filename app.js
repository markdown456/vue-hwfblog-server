const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const app = express();

app.use(session({ secret: 'secret-key' }))

//处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//导入数据库连接
require('./model/connect')
    //创建用户，创建完成后注释掉
    // require('./model/user')

//引入相应路由
// const home = require('./route/home');
const admin = require('./route/admin');

//为路由匹配请求路径（一级路由）
// app.use('/home', home);
app.use('/admin', admin);

app.listen(8081);
console.log('服务器启动成功');