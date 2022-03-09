const mongoose = require('mongoose');
//创建集合规则
const articleSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    imgUrl: {
        type: String
    },
    title: {
        type: String,
    },
    date: {
        type: String,
    },
    content: {
        type: String,
    },
    gist: {
        type: String,
    },
    label: {
        type: Array,
    }
})

// 创建集合
const Article = mongoose.model('Article', articleSchema);

// Article.create({
//     id: 1,
//     imgUrl: 'http://localhost/second',
//     title: '第二篇文章',
//     date: '2022-03-10',
//     content: `
//             let：ES6新增，用于声明变量，有块级作用域
//              var：ES5中用于声明变量的关键字，存在各种问题（例如：红杏出墙~）
//              如果你的代码里还存在 var，那你的良心就大大的坏了！`,
// }).then(() => {
//     console.log('文章创建成功');
// }).catch((err) => {
//     console.log('文章创建失败', err)
// })

module.exports = { Article };