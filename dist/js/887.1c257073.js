"use strict";(self["webpackChunkmyblog"]=self["webpackChunkmyblog"]||[]).push([[887],{8887:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content"},[a("div",{staticClass:"articlebox"},[a("h1",[t._v(t._s(t.articleDetail.title))]),a("span",{staticClass:"articledate"},[t._v(" "+t._s(t.articleDetail.date))]),a("p",[t._v(t._s(t.articleDetail.content))])])])])},r=[],i=a(6198),c=(a(5666),{data:function(){return{activeIndex:"1",input:"",articleDetail:{}}},created:function(){this.getArticleDetail()},methods:{handleSelect:function(t,e){console.log(t,e)},getArticleDetail:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var a,n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$route.params.id,n=t.$route.params.type,"art"!=n){e.next=10;break}return e.next=5,t.$http.get("admin/articleDetail/"+a);case 5:r=e.sent,console.log(r),t.articleDetail=r,e.next=15;break;case 10:return e.next=12,t.$http.get("admin/noteDetail/"+a);case 12:i=e.sent,console.log(i),t.articleDetail=i;case 15:case"end":return e.stop()}}),e)})))()}}}),l=c,s=a(1001),o=(0,s.Z)(l,n,r,!1,null,"3dbc3bdc",null),u=o.exports}}]);
//# sourceMappingURL=887.1c257073.js.map