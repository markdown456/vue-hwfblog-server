// 引入mongoose第三方模块
const mongoose = require('mongoose');

// 连接数据库
mongoose.connect(`mongodb://localhost:27017/myblog`, { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch((err) => console.log('数据库连接失败' + err))