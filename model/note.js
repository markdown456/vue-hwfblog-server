const mongoose = require('mongoose');
//创建集合规则
const noteSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
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
const Note = mongoose.model('Note', noteSchema);

// Note.create({
//     id: 3,
//     type: 'note',
//     imgUrl: '1111',
//     title: '第4篇笔记',
//     date: '2022-03-27',
//     content: `
//              var：ES5中用于声明变量的关键字，存在各种问题（例如：红杏出墙~）
//              如果你的代码里还存在 var，那你的良心就大大的坏了！`,
// }).then(() => {
//     console.log('文章或笔记创建成功');
// }).catch((err) => {
//     console.log('文章创建或笔记失败', err)
// })

module.exports = { Note };