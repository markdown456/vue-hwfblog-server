//引用express框架
const express = require('express');
const { User } = require('../model/user')
const bcrypt = require('bcryptjs')



const admin = express.Router();


// 完成注册功能
admin.post('/register', async(req, res) => {
    const { email, username, password } = req.body;
    const user = await User.findOne({ email });
    const user1 = await User.findOne({ username });
    //服务器端验证用户的注册信息
    if (user) {
        console.log('邮箱已注册')
        res.status(201).send({ message: '邮箱已注册' })
    } else if (user1) {
        console.log('用户名已被占用')
        res.status(201).send({ message: '用户名已被占用' })
    } else {
        //创建用户
        async function createUser() {
            const salt = await bcrypt.genSalt(10);
            const bpassword = await bcrypt.hash(password, salt);
            User.create({
                username: username,
                email: email,
                password: bpassword,
                role: 'admin',
                state: 0
            }).then(() => {
                console.log('新用户创建成功');
            }).catch((err) => {
                console.log('新用户创建失败', err)
            })
        }
        createUser();
        res.send({ message: '恭喜你，注册成功' })

    }

})

//登录功能
admin.post('/login', async(req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    if (email.trim().length == 0 || password.trim().length == 0) {
        // return res.status(400).send('<h4>邮件地址或密码错误</h4>')
        return res.status(201).send({ msg: '邮件地址或密码错误' })
    }
    // 根据用户输入，与数据库中的数据对比
    let user = await User.findOne({ email });
    if (user) {
        // 将客户端传递过来的密码和用户信息中的密码进行比对
        let isVaild = await bcrypt.compare(password, user.password)
        console.log(isVaild)
        if (isVaild) {
            //匹配到用户
            // 将用户名存储在请求对象中
            req.session.username = user.username;
            // res.send('登录成功');
            req.app.locals.userInfo = user;
            res.send({ msg: '登录成功' })
        } else {
            res.status(201).send({ msg: '邮件地址或密码错误' })
        }
    } else {
        res.status(201).send({ msg: '邮件地址或密码错误' })
    }
})

module.exports = admin;