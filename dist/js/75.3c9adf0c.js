"use strict";(self["webpackChunkmyblog"]=self["webpackChunkmyblog"]||[]).push([[75],{6075:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content"},[n("div",{staticClass:"notesbox"},[n("ul",t._l(t.AllNoteList,(function(e,o){return n("li",{key:o,on:{click:function(n){return t.toNoteDetail(e._id)}}},[t._v(t._s(e.title))])})),0)])])])},s=[],i=n(6198),l=(n(5666),n(7327),n(1539),{data:function(){return{activeIndex:"1",input:"",AllNoteList:[]}},created:function(){this.getAllNotes()},methods:{handleSelect:function(t,e){console.log(t,e)},toLogin:function(){console.log(sessionStorage.getItem("token")),sessionStorage.getItem("token")?this.$message.success("您已经登录"):this.$router.push("/login")},getAllNotes:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("admin/articleList");case 2:n=e.sent,o=n.filter((function(t,e){return"note"==t.type})),console.log(o),t.AllNoteList=o,console.log(t.AllNoteList);case 7:case"end":return e.stop()}}),e)})))()},toNoteDetail:function(t){this.$router.push("/article/"+t)}}}),r=l,c=n(1001),u=(0,c.Z)(r,o,s,!1,null,"7d9d4bb6",null),a=u.exports}}]);
//# sourceMappingURL=75.3c9adf0c.js.map