"use strict";(self["webpackChunkmyblog"]=self["webpackChunkmyblog"]||[]).push([[419],{2419:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content"},[a("div",{staticClass:"articlebox"},[a("h1",[t._v(t._s(t.articleDetail.title))]),a("span",{staticClass:"articledate"},[t._v(" "+t._s(t.articleDetail.date))]),a("p",[t._v(t._s(t.articleDetail.content))])])])])},i=[],r=a(6198),c=(a(5666),{data:function(){return{activeIndex:"1",input:"",articleDetail:{}}},created:function(){this.getArticleDetail()},methods:{handleSelect:function(t,e){console.log(t,e)},getArticleDetail:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.params.id,e.next=3,t.$http.get("admin/articleDetail/"+a);case 3:n=e.sent,console.log(n),t.articleDetail=n;case 6:case"end":return e.stop()}}),e)})))()}}}),l=c,s=a(1001),u=(0,s.Z)(l,n,i,!1,null,"0bc5380c",null),o=u.exports}}]);
//# sourceMappingURL=419.d66bc18b.js.map