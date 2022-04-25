const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const app = express();

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));

app.use(session({ secret: 'secret-key' }))

//处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//将public中的静态文件开放
app.use(express.static('./dist'));

// app.all('*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
// })

//导入数据库连接
require('./model/connect')
    //创建用户，创建完成后注释掉
    // require('./model/user')
    // require('./model/article')
    // require('./model/note')

//引入相应路由
// const home = require('./route/home');
const admin = require('./route/admin');

//为路由匹配请求路径（一级路由）
// app.use('/home', home);
app.use('/admin', admin);

app.listen(3000);
console.log('服务器启动成功');