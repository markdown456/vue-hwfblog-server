"use strict";(self["webpackChunkmyblog"]=self["webpackChunkmyblog"]||[]).push([[930],{7930:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content"},[a("div",{staticClass:"articlebox"},[a("h1",[t._v(t._s(t.articleDetail.title))]),a("span",{staticClass:"articledate"},[t._v(" "+t._s(t.articleDetail.date))]),a("p",{domProps:{innerHTML:t._s(t.articleDetail.content)}},[t._v(t._s(t.articleDetail.content))])])])])},i=[],r=a(6198),c=(a(5666),{data:function(){return{activeIndex:"1",input:"",articleDetail:{}}},created:function(){this.getArticleDetail()},methods:{handleSelect:function(t,e){},getArticleDetail:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.params.id,e.next=3,t.$http.get("admin/articleDetail/"+a);case 3:n=e.sent,t.articleDetail=n;case 5:case"end":return e.stop()}}),e)})))()}}}),l=c,s=a(1001),u=(0,s.Z)(l,n,i,!1,null,"63f45b36",null),o=u.exports}}]);
//# sourceMappingURL=930.85b2c315.js.map