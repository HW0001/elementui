(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb992898"],{1700:function(e,t,r){},"2fb0":function(e,t,r){},"381a":function(e,t,r){"use strict";var n=r("2fb0"),a=r.n(n);a.a},"65d6":function(e,t,r){"use strict";var n=r("b2bc"),a=r.n(n);a.a},"8f1c":function(e,t,r){"use strict";var n=r("c10c"),a=r.n(n);a.a},b2bc:function(e,t,r){},b833:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")])],1),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"},on:{input:e.getUserList},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.isShowAddUser=!0}}},[e._v("添加用户")]),e.isShowAddUser?r("add-user",{attrs:{isShowAddUser:e.isShowAddUser},on:{addUserSuccess:e.conputedPageAndRefUser,"update:isShowAddUser":function(t){e.isShowAddUser=t},"update:is-show-add-user":function(t){e.isShowAddUser=t}}}):e._e()],1),r("div",[r("user-table",{attrs:{users:e.users},on:{refUserList:e.conputedPageAndRefUser}}),r("user-pagintion",{attrs:{pagenum:e.queryinfo.pagenum,pagesize:e.queryinfo.pagesize,total:e.queryinfo.total},on:{pagechange:e.conputedPageAndRefUser,"update:pagenum":function(t){return e.$set(e.queryinfo,"pagenum",t)},"update:pagesize":function(t){return e.$set(e.queryinfo,"pagesize",t)},"update:total":function(t){return e.$set(e.queryinfo,"total",t)}}})],1)])],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,border:""}},[r("el-table-column",{attrs:{prop:"username",label:"姓名"}}),r("el-table-column",{attrs:{prop:"mobile",label:"联系电话"}}),r("el-table-column",{attrs:{prop:"email",label:"email"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.showUpdateDlg(t.row.id)}}}),r("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:function(r){return e.showDelDlg(t.row.id)}}})]}}])})],1),r("el-dialog",{attrs:{title:"提示",visible:e.isdelete,width:"30%"}},[r("span",[e._v("是否删除该用户")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.isdelete=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.deleteUser}},[e._v("确 定")])],1)]),e.isShowEdit?r("edit-user",{attrs:{id:e.currentID,isshowEdit:e.isShowEdit},on:{"update:isshowEdit":function(t){e.isShowEdit=t},"update:isshow-edit":function(t){e.isShowEdit=t},updateInfo:e.refUserList}}):e._e()],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"修改用户",visible:!0,width:"700px"}},[r("el-form",{attrs:{model:e.user}},[r("el-form-item",{attrs:{label:"用户名称","label-width":"120px"}},[r("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),r("el-form-item",{attrs:{label:"邮箱","label-width":"120px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),r("el-form-item",{attrs:{label:"手机号","label-width":"120px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.canal}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.sumInfo}},[e._v("确 定")])],1)],1)},u=[];function l(e,t,r,n,a,s,o){try{var i=e[s](o),u=i.value}catch(l){return void r(l)}i.done?t(u):Promise.resolve(u).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function o(e){l(s,n,a,o,i,"next",e)}function i(e){l(s,n,a,o,i,"throw",e)}o(void 0)}))}}var d={name:"EditUser",props:{id:{type:Number,default:0},isShowEdit:{type:Boolean,default:!0}},data:function(){return{user:{}}},methods:{getUserInfo:function(){var e=this;return c(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("users/".concat(e.id));case 2:r=t.sent,n=r.data,200!=n.meta.status&&(e.canal(),e.$Message.error("读取账号信息失败！")),e.user=n.data;case 6:case"end":return t.stop()}}),t)})))()},canal:function(){this.$emit("update:isshowEdit",!1)},sumInfo:function(){var e=this;return c(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.put("users/".concat(e.id),{email:e.user.email,mobile:e.user.mobile});case 2:r=t.sent,n=r.data,e.canal(),200!=n.meta.status?e.$Message.error("更新失败！"):(e.$Message.success("更新成功！"),e.$emit("updateInfo"));case 6:case"end":return t.stop()}}),t)})))()}},created:function(){this.getUserInfo()},mounted:function(){}},f=d,p=(r("381a"),r("2877")),m=Object(p["a"])(f,i,u,!1,null,"6a67f4ce",null),h=m.exports;function b(e,t,r,n,a,s,o){try{var i=e[s](o),u=i.value}catch(l){return void r(l)}i.done?t(u):Promise.resolve(u).then(n,a)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function o(e){b(s,n,a,o,i,"next",e)}function i(e){b(s,n,a,o,i,"throw",e)}o(void 0)}))}}var g={name:"UserTable",props:{users:{type:Array,default:function(){return[]}}},data:function(){return{isdelete:!1,isShowEdit:!1,currentID:0}},methods:{showUpdateDlg:function(e){this.isShowEdit=!0,this.currentID=e},showDelDlg:function(e){this.isdelete=!0,this.currentID=e},deleteUser:function(){var e=this;return v(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.delete("users/".concat(e.currentID));case 2:if(r=t.sent,n=r.data,e.isdelete=!1,200===n.meta.status){t.next=9;break}return t.abrupt("return",e.$Message.error("删除失败！"));case 9:e.$Message.success("删除成功！");case 10:e.refUserList();case 11:case"end":return t.stop()}}),t)})))()},refUserList:function(){this.$emit("refUserList")}},components:{EditUser:h},created:function(){},mounted:function(){}},w=g,y=(r("bfab"),Object(p["a"])(w,s,o,!1,null,"07f3b58e",null)),x=y.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-pagination",{attrs:{"current-page":e.pagenum,"page-sizes":[5,10,15,20],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})},$=[],k={name:"UserPagintion",props:{pagenum:{type:Number,default:0},pagesize:{type:Number,default:0},total:{type:Number,default:0}},data:function(){return{}},methods:{handleSizeChange:function(e){this.$emit("update:pagesize",e),this.$emit("pagechange")},handleCurrentChange:function(e){this.$emit("update:pagenum",e),this.$emit("pagechange")}},created:function(){},mounted:function(){}},_=k,S=(r("f2b4"),Object(p["a"])(_,U,$,!1,null,"886f1a1c",null)),A=S.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"添加用户",visible:!0,width:"700px"}},[r("el-form",{attrs:{model:e.user}},[r("el-form-item",{attrs:{label:"用户名称","label-width":"120px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),r("el-form-item",{attrs:{label:"用户密码","label-width":"120px"}},[r("el-input",{attrs:{"show-password":"",autocomplete:"off"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),r("el-form-item",{attrs:{label:"邮箱","label-width":"120px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),r("el-form-item",{attrs:{label:"手机号","label-width":"120px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.canal}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1)},E=[];function z(e,t,r,n,a,s,o){try{var i=e[s](o),u=i.value}catch(l){return void r(l)}i.done?t(u):Promise.resolve(u).then(n,a)}function R(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function o(e){z(s,n,a,o,i,"next",e)}function i(e){z(s,n,a,o,i,"throw",e)}o(void 0)}))}}var P={name:"AddUser",props:{isShowAddUser:{type:Boolean,default:!0}},data:function(){return{user:{username:"",password:"",email:"",mobile:""}}},methods:{canal:function(){this.$emit("update:isShowAddUser",!1)},addUser:function(){var e=this;return R(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post("users",e.user);case 2:if(r=t.sent,n=r.data,201==n.meta.status){t.next=7;break}return e.$emit("update:isShowAddUser",!1),t.abrupt("return",e.$Message.error("添加用户失败"));case 7:e.$emit("update:isShowAddUser",!1),e.$Message({message:"添加用户成功",type:"success"}),e.$emit("addUserSuccess");case 10:case"end":return t.stop()}}),t)})))()}},created:function(){},mounted:function(){}},C=P,D=(r("8f1c"),Object(p["a"])(C,q,E,!1,null,"17613e10",null)),I=D.exports;function L(e,t,r,n,a,s,o){try{var i=e[s](o),u=i.value}catch(l){return void r(l)}i.done?t(u):Promise.resolve(u).then(n,a)}function M(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function o(e){L(s,n,a,o,i,"next",e)}function i(e){L(s,n,a,o,i,"throw",e)}o(void 0)}))}}var j={name:"Users",data:function(){return{query:"",queryinfo:{pagenum:1,pagesize:10,total:0},users:[],isShowAddUser:!1}},components:{UserTable:x,UserPagintion:A,AddUser:I},methods:{getUserList:function(){var e=this;return M(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("users",{params:{query:e.query,pagenum:e.queryinfo.pagenum,pagesize:e.queryinfo.pagesize}});case 2:if(r=t.sent,n=r.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",e.$Message("获取数据失败！"));case 6:e.queryinfo.total=n.data.total,e.users=n.data.users;case 8:case"end":return t.stop()}}),t)})))()},conputedPageAndRefUser:function(){var e=this;return M(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:1===e.users.length&&e.queryinfo.pagenum>1&&e.queryinfo.pagenum--,e.getUserList();case 2:case"end":return t.stop()}}),t)})))()}},created:function(){this.getUserList()}},O=j,N=(r("65d6"),Object(p["a"])(O,n,a,!1,null,"41b978de",null));t["default"]=N.exports},bfab:function(e,t,r){"use strict";var n=r("d78a"),a=r.n(n);a.a},c10c:function(e,t,r){},d78a:function(e,t,r){},f2b4:function(e,t,r){"use strict";var n=r("1700"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-fb992898.78084270.js.map