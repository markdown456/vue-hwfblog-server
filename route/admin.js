//引用express框架
const express = require('express');
const { User } = require('../model/user');
const { Article } = require('../model/article')
const { Note } = require('../model/note')
const bcrypt = require('bcryptjs')
    //导入jwt
const jwt = require('jsonwebtoken');



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
                role: 'normal',
                state: 0,
                token: '0',
            }).then(() => {
                console.log('新用户创建成功');
            }).catch((err) => {
                console.log('新用户创建失败', err)
            })
        }
        createUser();
        res.send({ status: 200, message: '恭喜你，注册成功' })
        console.log(User);
    }

})

//登录功能
admin.post('/login', async(req, res) => {
    const { email, password } = req.body;
    console.log(typeof email)
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
            // req.session.username = user.username;
            // res.send('登录成功');
            // req.app.locals.userInfo = user;

            //token是使用
            //
            //将token存入数据库中
            User.find({ email: email }, (err, docs) => {
                if (err) {
                    res.send(err);
                    return
                }
                if (docs.length > 0) {
                    // 1生成token的主题信息,将数据库中匹配到用户的用户名存入
                    let content = { email: email }; // 要生成token的主题信息
                    let secretOrPrivateKey = "suiyi" // 这是加密的key（密钥） 
                    let token = jwt.sign(content, secretOrPrivateKey, {
                        expiresIn: 60 * 60 * 1 // 1小时过期
                    });

                    docs[0].token = token //token写入数据库
                    User(docs[0]).save(function(err) {
                        if (err) {
                            res.status(500).send()
                            return
                        }
                        //返回role值，判断是否为管理员admin
                        res.send({ 'status': 1, 'msg': '登陆成功', 'token': token, 'email': email, 'role': user.role }) //反给前台
                    })
                } else {
                    res.send({ 'status': 0, 'msg': '登录失败' });
                }
            })
        }
        // let content = { name: user.username };
        // let secretOrPrivateKey = "suiyi" // 这是加密的key（密钥）
        // let token = jwt.sign(content, secretOrPrivateKey, { expiresIn: 60 * 60 * 1 }); // 1小时过期
        // user.token = token; //token写入数据库
        // console.log(user.token)
        // res.send({ msg: '登录成功', token: token })
        else {
            res.send({ msg: '邮件地址或密码错误', 'status': 0 })
        }
    } else {
        res.send({ msg: '邮件地址或密码错误', 'status': 0 })
    }
})

//笔记模块，需要检验token是否登录
admin.post('/notes', (req, res) => {
    console.log(req.body);
    User.find({ email: req.body.email, token: req.body.token }, (err, docs) => {
        if (err) {
            res.send(err);
            return
        }
        if (docs.length > 0) {
            let token = req.body.token; // 从body中获取token
            let secretOrPrivateKey = "suiyi"; // 这是加密的key（密钥） 

            jwt.verify(token, secretOrPrivateKey, function(err, decode) {
                if (err) { //  时间失效的时候/ 伪造的token          
                    res.send({ 'status': 0, 'isValid': false });
                } else {
                    res.send({ 'status': 1, 'isValid': true });
                }
            })
        } else {
            res.send({ 'status': 0, 'isValid': false });
        }
    })
})

//获取所有文章和笔记请求
//将所有文章响应给前端，在前端过滤文章或笔记
admin.get('/articleList', (req, res) => {
    Article.find({}, (err, docs) => {
        if (err) {
            console.log(err)
            return
        }
        res.json(docs)
    })
})

//获取点击文章或笔记的细节，文章和笔记都有唯一标识_id
admin.get('/articleDetail/:id', (req, res) => {
    Article.findOne({ _id: req.params.id }, (err, docs) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(docs)
    })
})

// //获取所有笔记请求
// admin.get('/noteList', (req, res) => {
//     Note.find({}, (err, docs) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         res.json(docs)

//     })
// })

// admin.get('/noteDetail/:id', (req, res) => {
//     Note.findOne({ _id: req.params.id }, (err, docs) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         res.send(docs)
//     })
// })


//后台管理请求服务
//获取所有文章
admin.get('/allarticle', (req, res) => {
    console.log(req.body);
    Article.find({}, (err, docs) => {
        if (err) {
            console.log(err)
            return
        }
        res.json(docs)
    })

})

//添加或修改文章，根据是否存在_id值判断是添加或修改文章
admin.post('/addArticle', (req, res) => {
    if (req.body._id) {
        //若有_id值则为更新数据
        Article.findByIdAndUpdate({ _id: req.body._id }, {
            //更新该条数据
            title: req.body.title,
            imgUrl: req.body.imgUrl,
            type: req.body.type,
            date: req.body.date,
            content: req.body.content,
            label: req.body.label
        }, (err, docs) => {
            if (err) {
                console.log('修改文章失败');
                console.log(err);
                res.send({ status: 400, msg: '文章修改失败' })
                return;
            }
            //修改文章
            console.log('修改文章成功');
            res.send({ status: 200, msg: '文章修改成功' })
        })
    } else {
        //若没有_id则为添加数据
        Article.create(req.body).then(() => {
            //添加文章
            //将获取的日期转换为毫秒数
            // req.body.date = +new Date(req.body.date) - 0;
            console.log('添加文章成功');
            res.send({ status: 200, msg: '文章添加成功' })
        }).catch((err) => {
            console.log('添加文章失败');
            console.log(err);
            res.send({ status: 400, msg: '文章添加失败' })

        })
    }

})

//编辑文章
// admin.get('/editArticle/:id', (req, res) => {
//     Article.findOne({ id: req.params.id }, (err, docs) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         res.send(docs)
//     })
// })

//删除文章
admin.get('/deleteArticle/:id', (req, res) => {
    console.log(typeof(req.params.id));
    console.log(req.params.id);
    Article.deleteOne({ _id: req.params.id }, (err, docs) => {
        if (err) {
            console.error(err)
            res.send({ status: 400, msg: '未成功删除该文章' })
            return
        }
        res.send({ status: 200, msg: '已成功删除该文章' })
    })
})



module.exports = admin;