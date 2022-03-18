const mongoose = require('mongoose');
//创建集合规则
const articleSchema = new mongoose.Schema({
    type: { type: String },
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
//     id: 3,
//     type: 'art',
//     imgUrl: 'https://cdn.pigjian.com/cover/2017/06/01/0Ylt1fzjveWnKI2nmXZw3GtK1uOeQsVKZBuJgX0Y.png',
//     title: '第4篇文章',
//     date: '2022-04-30',
//     content: `
//              的关键字（例如：红杏出墙~）
//              如果你的代码里还存在 var，那你的良心就大大的坏了！`,
// }).then(() => {
//     console.log('文章或笔记创建成功');
// }).catch((err) => {
//     console.log('文章创建或笔记失败', err)
// })

module.exports = { Article };