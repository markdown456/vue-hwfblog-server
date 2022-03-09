const jwt = require('jsonwebtoken')
const User = require('../model/user')

//检测token
//api.js
const checkToken = (req, res) => {
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
                    res.send({ 'status': 0 });
                } else {
                    res.send({ 'status': 1 });
                }
            })
        } else {
            res.send({ 'status': 0 });
        }
    })
}

module.exports = checkToken