const mongoose = require('mongoose');
//创建集合规则
const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 20
        },
        email: {
            type: String,
            unique: true,
            require: true
        },
        password: {
            type: String,
            required: true
        },
        //admin 超级管理员
        //normal 一般用户
        role: {
            type: String,
            required: true
        },
        //0 启用状态，1为禁用
        state: {
            type: Number,
            default: 0
        }
    })
    // 创建集合
const User = mongoose.model('User', userSchema);
// User.create({
//         username: 'HuangWeifeng',
//         email: 'keyperson999@gmail.com',
//         password: '123456',
//         role: 'admin',
//         state: 0
//     }).then(() => {
//         console.log('用户创建成功');
//     }).catch((err) => {
//         console.log('用户创建失败', err)
// })
// 将用户集合导出
module.exports = {
    User
}