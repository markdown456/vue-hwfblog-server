"use strict";(self["webpackChunkmyblog"]=self["webpackChunkmyblog"]||[]).push([[882],{8882:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h3",{staticClass:"el-icon-arrow-left"},[e._v("编辑文章")]),l("el-form",{attrs:{"label-width":"80px",model:e.articleInfo}},[l("el-form-item",{attrs:{label:"序号"}},[l("el-input",{attrs:{disabled:""},model:{value:e.articleInfo.id,callback:function(t){e.$set(e.articleInfo,"id",t)},expression:"articleInfo.id"}})],1),l("el-form-item",{attrs:{label:"文章标题"}},[l("el-input",{model:{value:e.articleInfo.title,callback:function(t){e.$set(e.articleInfo,"title",t)},expression:"articleInfo.title"}})],1),l("el-form-item",{attrs:{label:"类型"}},[l("el-input",{model:{value:e.articleInfo.type,callback:function(t){e.$set(e.articleInfo,"type",t)},expression:"articleInfo.type"}})],1),l("el-form-item",{attrs:{label:"日期"}},[l("el-input",{attrs:{placeholder:"/例如2022-3-20"},model:{value:e.articleInfo.date,callback:function(t){e.$set(e.articleInfo,"date",t)},expression:"articleInfo.date"}})],1),l("el-form-item",{attrs:{label:"图片地址"}},[l("el-input",{model:{value:e.articleInfo.imgUrl,callback:function(t){e.$set(e.articleInfo,"imgUrl",t)},expression:"articleInfo.imgUrl"}})],1),l("el-form-item",{attrs:{label:"标签"}},[l("el-input",{model:{value:e.articleInfo.label,callback:function(t){e.$set(e.articleInfo,"label",t)},expression:"articleInfo.label"}})],1),l("el-form-item",{attrs:{label:"文章内容"}},[l("quill-editor",{model:{value:e.articleInfo.content,callback:function(t){e.$set(e.articleInfo,"content",t)},expression:"articleInfo.content"}})],1),e.flag?l("el-button",{staticClass:"btnAdd",attrs:{type:"primary"},on:{click:function(t){return e.addArticle()}}},[e._v("添加文章")]):l("el-button",{staticClass:"btnAdd",attrs:{type:"primary"},on:{click:function(t){return e.addArticle()}}},[e._v("修改文章")])],1)],1)},a=[],i=l(6198),r=(l(5666),{data:function(){return{flag:sessionStorage.isAddArticle,articleInfo:{id:0,title:"",type:"",date:"",imgUrl:"",label:[],content:""}}},created:function(){this.articleInfo.id=window.sessionStorage.articleListLength,JSON.parse(this.flag)||(this.getEditArticle(),console.log("请求数据成功"))},mounted:function(){},methods:{addArticle:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("admin/addArticle",e.articleInfo);case 2:if(l=t.sent,200==l.status){t.next=5;break}return t.abrupt("return",e.$message.error(l.msg));case 5:e.$message.success(l.msg);case 6:case"end":return t.stop()}}),t)})))()},getEditArticle:function(){console.log(window.sessionStorage.editRow),this.articleInfo=window.sessionStorage.editRow}},watch:{$route:function(){}}}),o=r,c=l(1001),s=(0,c.Z)(o,n,a,!1,null,"1fab034c",null),f=s.exports}}]);
//# sourceMappingURL=882.b1e52138.js.map