(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cf82f9a"],{"13de":function(e,t,a){"use strict";var n=a("6279"),o=a.n(n);o.a},"365c":function(e,t,a){"use strict";var n=a("be3b"),o=a("99b1"),s=a.n(o),l={students:function(e,t,a){return n["a"].get(s.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return n["a"].post(s.a.Student,e)},delStudent:function(e){return n["a"].del(s.a.DelStudent,{student_id:e})},searchNumber:function(e,t,a){return n["a"].get(s.a.Students,{page:e,limit:t,number:a})},searchName:function(e,t,a){return n["a"].get(s.a.Students,{page:e,limit:t,name:a})},wxUser:function(e,t){return n["a"].get(s.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return n["a"].post(s.a.BindFamily,e)},familySearch:function(e,t,a){return n["a"].get(s.a.FamilySearch,{page:e,limit:t,number:a})},studentFace:function(e){return n["a"].post(s.a.StudentFace,e)},studentEditFace:function(e){return n["a"].put(s.a.StudentEditFace,e)},faceLogs:function(e,t,a){return n["a"].get(s.a.StudentFaceLogs,{page:e,limit:t,id:a})},grade:function(e){return n["a"].post(s.a.Grade,e)},grades:function(e,t){return n["a"].get(s.a.Grades,{page:e,limit:t})},delGrade:function(e){return n["a"].del(s.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(s.a.Class,e)},classes:function(e,t,a){return n["a"].get(s.a.Classes,{page:e,limit:t,grade_id:a})},delClass:function(e){return n["a"].del(s.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(s.a.Device,e)},devices:function(e){return n["a"].post(s.a.Devices,{page:e})},family:function(e,t){return n["a"].get(s.a.Family,{page:e,limit:t})},masterFamily:function(e){return n["a"].put(s.a.MasterFamily,e)},delFamily:function(e){return n["a"].del(s.a.DelFamily,{id:e})},announcement:function(e){return n["a"].get(s.a.Announcement,{page:e})},exam:function(e){return n["a"].post(s.a.Exam,e)},exams:function(e,t){return n["a"].get(s.a.Exams,{page:e,limit:t})},examsDetail:function(e,t,a){return n["a"].get(s.a.ExamsDetail,{page:e,limit:t,exam_id:a})},delExam:function(e){return n["a"].del(s.a.Exam,{id:e})},subjects:function(){return n["a"].get(s.a.Subjects)},importsExam:function(e,t){return n["a"].post(s.a.ImportsExam,{exam_id:e,file:t})},imports:function(e,t){return n["a"].get(s.a.Imports,{page:e,limit:t})},delImport:function(e){return n["a"].del(s.a.DelImport,{id:e})},example:function(e){return n["a"].getExcel(s.a.Export,{subjects:e})},teacher:function(e,t,a,o){return n["a"].get(s.a.Teacher,{page:e,limit:t,state:a,worker:o})},delTeacher:function(e){return n["a"].del(s.a.DelTeacher,{id:e})},audit:function(e){return n["a"].post(s.a.Audit,e)},schools:function(e,t,a,o){return n["a"].get(s.a.Schools,{page:e,limit:t,mode:a,id:o})},oneSchool:function(e){return n["a"].get(s.a.School,{id:e})},studentInfo:function(e,t,a){return n["a"].get(s.a.StudentInfo,{page:e,limit:t,school_id:a})},schoolUser:function(e,t,a){return n["a"].get(s.a.SchoolUser,{page:e,limit:t,school_id:a})},visitors:function(e,t,a){return n["a"].get(s.a.Visitors,{page:e,limit:t,school_id:a})},teacherUser:function(e,t,a){return n["a"].get(s.a.TeacherUser,{page:e,limit:t,school_id:a})},orders:function(e,t,a){return n["a"].get(s.a.Orders,{page:e,limit:t,school_id:a})},server:function(e,t,a){return n["a"].get(s.a.Server,{page:e,limit:t,product_id:a})},schoolTeacher:function(e,t,a){return n["a"].get(s.a.Teacher,{page:e,limit:t,school_id:a})},school:function(e){return n["a"].post(s.a.School,e)},delSchool:function(e){return n["a"].del(s.a.DelSchool,{school_id:e})},banners:function(e,t){return n["a"].get(s.a.Banners,{page:e,limit:t})},banner:function(e){return n["a"].post(s.a.Banner,e)},message:function(e){return n["a"].post(s.a.Message,e)},messages:function(e,t){return n["a"].get(s.a.Messages,{page:e,limit:t})},messageType:function(e){return n["a"].post(s.a.MessageType,e)},messageTypes:function(e,t){return n["a"].get(s.a.MessageTypes,{page:e,limit:t})},delDocumentType:function(e){return n["a"].del(s.a.DelDocumentType,{id:e})},documents:function(e,t){return n["a"].get(s.a.Documents,{page:e,limit:t})},delDocument:function(e){return n["a"].del(s.a.DelDocument,{id:e})},document:function(e){return n["a"].post(s.a.Document,e)},documentDel:function(e){return n["a"].del(s.a.DocumentDel,{id:e})},delBanner:function(e){return n["a"].del(s.a.DelBanner,{id:e})},buys:function(e,t){return n["a"].get(s.a.Buys,{page:e,limit:t})},buy:function(e){return n["a"].post(s.a.Buy,e)},roles:function(e,t){return n["a"].get(s.a.Roles,{page:e,limit:t})},role:function(e){return n["a"].post(s.a.Role,e)},delRole:function(e){return n["a"].del(s.a.DelRole,{id:e})},user:function(e){return n["a"].post(s.a.User,e)},users:function(e,t){return n["a"].get(s.a.Users,{page:e,limit:t})},delUser:function(e){return n["a"].del(s.a.DelUser,{id:e})},resetPassword:function(e){return n["a"].post(s.a.ResetPassword,e)},goods:function(e){return n["a"].get(s.a.Buys,{school_id:e})},setProduct:function(e){return n["a"].post(s.a.SetProduct,e)},banProduct:function(e){return n["a"].post(s.a.BanProduct,e)},banProducts:function(e){return n["a"].get(s.a.BanProducts,{user_id:e})},userSearch:function(e){return n["a"].get(s.a.UserSearch,{id:e})},jurisdictionSchool:function(e,t){return n["a"].get(s.a.JurisdictionSchool,{user_id:e,mode:t})},jurisdictionProducts:function(e){return n["a"].get(s.a.JurisdictionProducts,{school_id:e})},jurisdictionStudent:function(e,t){return n["a"].get(s.a.JurisdictionStudent,{user_id:e,school_id:t})},studentsTatal:function(e,t){return n["a"].get(s.a.StudentsTatal,{type:e,id:t})},studentGender:function(e,t,a,o){return n["a"].get(s.a.StudentGender,{sex:e,type:t,school_id:a,grade_id:o})},classCheckCount:function(e){return n["a"].get(s.a.ClassCheckCount,{id:e})},statistics:function(e,t){return n["a"].get(s.a.Statistics,{school_id:e,grade_id:t})}};t["a"]=l},"4adc":function(e,t,a){"use strict";var n=a("d2c1"),o=a.n(n);o.a},6279:function(e,t,a){},b9e5:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.changeActive},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"角色管理",name:"role"}},[a("v-role")],1),a("el-tab-pane",{attrs:{label:"用户管理",name:"user"}},[a("v-user")],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("添加角色")])],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"角色名"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑权限")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除角色",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该角色")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1),a("el-dialog",{attrs:{title:"添加角色",visible:e.dialogRole,width:"90%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogRole=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{attrs:{placeholder:"请输入角色名",disabled:e.disabledRole},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"选择权限"}},[a("el-checkbox",{on:{change:e.AllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"student",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("学生管理页")])]),a("el-checkbox",{attrs:{label:"infomation"},on:{change:e.oneChange}},[e._v("学生列表")]),a("el-checkbox",{attrs:{label:"infomationAdd"},on:{change:e.oneChange}},[e._v("新增学生")]),a("el-checkbox",{attrs:{label:"infomationDel"},on:{change:e.oneChange}},[e._v("删除学生")]),a("el-checkbox",{attrs:{label:"infomationEdit"},on:{change:e.oneChange}},[e._v("编辑学生")]),a("el-checkbox",{attrs:{label:"infomationChangeFace"},on:{change:e.oneChange}},[e._v("更换人脸")]),a("el-checkbox",{attrs:{label:"infomationBindFamily"},on:{change:e.oneChange}},[e._v("绑定家长")]),a("el-checkbox",{attrs:{label:"infomationFaceLogs"},on:{change:e.oneChange}},[e._v("查看进出记录")]),a("el-checkbox",{attrs:{label:"infomationGet"},on:{change:e.oneChange}},[e._v("获取学生列表")]),a("el-checkbox",{attrs:{label:"infomationMore"},on:{change:e.oneChange}},[e._v("批量录入学生")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"grade",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("班级管理页")])]),a("el-checkbox",{attrs:{label:"gradeAdd"},on:{change:e.oneChange}},[e._v("新增年级")]),a("el-checkbox",{attrs:{label:"gradeDel"},on:{change:e.oneChange}},[e._v("删除年级")]),a("el-checkbox",{attrs:{label:"gradeGet"},on:{change:e.oneChange}},[e._v("获取年级列表")]),a("el-checkbox",{attrs:{label:"classAdd"},on:{change:e.oneChange}},[e._v("新增班级")]),a("el-checkbox",{attrs:{label:"classDel"},on:{change:e.oneChange}},[e._v("删除班级")]),a("el-checkbox",{attrs:{label:"classGet"},on:{change:e.oneChange}},[e._v("获取班级列表")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"achievement",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("成绩管理页")])])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"family",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("家长信息页")])]),a("el-checkbox",{attrs:{label:"familyGet"},on:{change:e.oneChange}},[e._v("家长列表")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"teacher",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("教职工管理页")])]),a("el-checkbox",{attrs:{label:"teacherDel"},on:{change:e.oneChange}},[e._v("删除教职工")]),a("el-checkbox",{attrs:{label:"teacherGet"},on:{change:e.oneChange}},[e._v("获取教职工列表")]),a("el-checkbox",{attrs:{label:"teacherAudit"},on:{change:e.oneChange}},[e._v("教职工审核")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"permission",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("角色管理页")])]),a("el-checkbox",{attrs:{label:"roleAdd"},on:{change:e.oneChange}},[e._v("新增角色")]),a("el-checkbox",{attrs:{label:"roleDel"},on:{change:e.oneChange}},[e._v("删除角色")]),a("el-checkbox",{attrs:{label:"roleEdit"},on:{change:e.oneChange}},[e._v("编辑权限")]),a("el-checkbox",{attrs:{label:"roleGet"},on:{change:e.oneChange}},[e._v("获取角色列表")])],1)],1),a("div",{staticClass:"permission",staticStyle:{"margin-left":"140px"}},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"manageAdd"},on:{change:e.oneChange}},[e._v("新增管理员")]),a("el-checkbox",{attrs:{label:"manageDel"},on:{change:e.oneChange}},[e._v("删除管理员")]),a("el-checkbox",{attrs:{label:"manageEdit"},on:{change:e.oneChange}},[e._v("编辑管理员")]),a("el-checkbox",{attrs:{label:"manageGet"},on:{change:e.oneChange}},[e._v("管理员列表")]),a("el-checkbox",{attrs:{label:"manageResetPwd"},on:{change:e.oneChange}},[e._v("重置密码")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"total",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("统计页面")])]),a("el-checkbox",{attrs:{label:"studentsTotal"},on:{change:e.oneChange}},[e._v("学生总统计")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"picture",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("图文管理")])]),a("el-checkbox",{attrs:{label:"banner"},on:{change:e.oneChange}},[e._v("轮播图")]),a("el-checkbox",{attrs:{label:"bannerAdd"},on:{change:e.oneChange}},[e._v("添加轮播图")]),a("el-checkbox",{attrs:{label:"bannerGet"},on:{change:e.oneChange}},[e._v("获取轮播图")]),a("el-checkbox",{attrs:{label:"bannerDel"},on:{change:e.oneChange}},[e._v("删除轮播图")]),a("el-checkbox",{attrs:{label:"document"},on:{change:e.oneChange}},[e._v("文档管理")]),a("el-checkbox",{attrs:{label:"documentAdd"},on:{change:e.oneChange}},[e._v("添加文档")]),a("el-checkbox",{attrs:{label:"documentGet"},on:{change:e.oneChange}},[e._v("获取文档")]),a("el-checkbox",{attrs:{label:"documentDel"},on:{change:e.oneChange}},[e._v("删除文档")]),a("el-checkbox",{attrs:{label:"documentEdit"},on:{change:e.oneChange}},[e._v("编辑文档")])],1)],1),a("div",{staticClass:"permission"},[a("el-checkbox-group",{staticClass:"permission-item",model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[a("el-checkbox",{attrs:{label:"message",border:""},on:{change:e.oneChange}},[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("资讯管理")])]),a("el-checkbox",{attrs:{label:"message"},on:{change:e.oneChange}},[e._v("资讯管理")]),a("el-checkbox",{attrs:{label:"messageAdd"},on:{change:e.oneChange}},[e._v("添加资讯")]),a("el-checkbox",{attrs:{label:"messageGet"},on:{change:e.oneChange}},[e._v("获取资讯")]),a("el-checkbox",{attrs:{label:"messageDel"},on:{change:e.oneChange}},[e._v("删除资讯")]),a("el-checkbox",{attrs:{label:"messageEdit"},on:{change:e.oneChange}},[e._v("编辑")]),a("el-checkbox",{attrs:{label:"typeAdd"},on:{change:e.oneChange}},[e._v("添加资讯类型")]),a("el-checkbox",{attrs:{label:"typeGet"},on:{change:e.oneChange}},[e._v("获取资讯类型")]),a("el-checkbox",{attrs:{label:"typeDel"},on:{change:e.oneChange}},[e._v("删除")])],1)],1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newRole}},[e._v("提交")])],1)],1)],1)],1)])],1)},l=[],r=a("365c"),i={data:function(){return{dialogRole:!1,form:{name:"",permissions:[]},stateList:[{label:"启用",value:1},{label:"禁用",value:0}],tableData:[],checkAll:!1,permissionList:["announcement","achievement","picture","banner","bannerAdd","bannerGet","bannerDel","message","messageAdd","messageGet","messageDel","messageEdit","typeAdd","typeGet","typeDel","document","documentAdd","documentGet","documentDel","documentEdit","total","studentsTotal","infomationManualFace","student","infomation","infomationGet","infomationAdd","infomationMore","infomationEdit","infomationDel","infomationChangeFace","infomationBindFamily","infomationFaceLogs","grade","gradeGet","gradeAdd","gradeDel","classGet","classAdd","studentDetail","classDel","family","familyGet","teacher","teacherGet","teacherDel","teacherAudit","permission","roleGet","roleAdd","roleEdit","roleDel","manageGet","manageAdd","manageEdit","manageDel","manageResetPwd"],dialogDel:!1,id:"",disabledRole:!1,currentPage:1,totalPage:0,checkLength:0,permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role")}},mounted:function(){this.getRoles()},methods:{addRole:function(){var e=this;e.dialogRole=!0,e.form={name:"",permissions:[]},e.disabledRole=!1,e.checkAll=!0,!0===e.checkAll&&(e.form.permissions=e.checkAll?e.permissionList:[])},getRoles:function(){var e=this;r["a"].roles(e.currentPage).then((function(t){e.tableData=t.data,e.totalPage=t.total}))},newRole:function(){var e=this;r["a"].role(e.form).then((function(t){e.dialogRole=!1,e.$message.success("提交成功"),e.getRoles(),e.currentPage=1,e.form={},e.form.permissions=[]}))},handleEdit:function(e,t){var a=this;a.dialogRole=!0,a.disabledRole=!0,a.form=t,a.form.permissions=t.permissions,a.checkLength=a.permissionList.length,a.checkAll=t.permissions.length>=a.checkLength},AllChange:function(e){var t=this;t.form.permissions=e?t.permissionList:[]},oneChange:function(e){var t=this;console.log(t.form.permissions),t.checkLength=t.permissionList.length,t.checkAll=t.form.permissions.length>=t.checkLength},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;r["a"].delRole(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getRoles(),e.currentPage=1}))},handleCurrentChange:function(e){var t=this;t.getRoles()},handleSizeChange:function(e){var t=this;r["a"].roles(t.currentPage,e).then((function(e){t.tableData=e.data,t.totalPage=e.total}))}}},c=i,u=(a("13de"),a("2877")),d=Object(u["a"])(c,s,l,!1,null,"a99c040c",null),m=d.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("添加用户")])],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"username",label:"账号"}}),a("el-table-column",{attrs:{prop:"role",label:"角色名"}}),a("el-table-column",{attrs:{prop:"enable",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s("1"==t.row.enable?"启用":"禁用")}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleReset(t.$index,t.row)}}},[e._v("重置密码")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除角色",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该角色")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogUser,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogUser=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"输入密码"}},[a("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),"admin"===e.username?a("el-form-item",{attrs:{label:"选择学校"}},[a("el-select",{attrs:{placeholder:"请选择学校"},model:{value:e.form.school_id,callback:function(t){e.$set(e.form,"school_id",t)},expression:"form.school_id"}},e._l(e.schoolList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),a("el-form-item",{attrs:{label:"选择角色"}},[a("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.rolesList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.title}})})),1)],1),a("el-form-item",{attrs:{label:"选择状态"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},e._l(e.stateList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newUser}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{title:"修改密码",visible:e.dialogResetPassWord,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogResetPassWord=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.pwdForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"旧密码"}},[a("el-input",{model:{value:e.pwdForm.old_password,callback:function(t){e.$set(e.pwdForm,"old_password",t)},expression:"pwdForm.old_password"}})],1),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{model:{value:e.pwdForm.new_password,callback:function(t){e.$set(e.pwdForm,"new_password",t)},expression:"pwdForm.new_password"}})],1),a("el-form-item",{attrs:{label:"再次确认新密码"}},[a("el-input",{model:{value:e.pwdForm.confirm_password,callback:function(t){e.$set(e.pwdForm,"confirm_password",t)},expression:"pwdForm.confirm_password"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.ChangePassword}},[e._v("提交")])],1)],1)],1)],1)])],1)},h=[],p={data:function(){return{dialogUser:!1,form:{username:"",password:"",enable:"",role:"",school_id:""},stateList:[{label:"启用",value:1},{label:"禁用",value:2}],rolesList:[],schoolList:[],tableData:[],dialogResetPassWord:!1,pwdForm:{new_password:"",old_password:"",confirm_password:"",id:""},dialogDel:!1,id:"",currentPage:1,totalPage:0,permissions:localStorage.getItem("permissions"),username:localStorage.getItem("username")}},mounted:function(){this.getSchool(),this.getRoles(),this.getUsers()},methods:{getSchool:function(){var e=this;"admin"===e.username&&r["a"].schools(e.currentPage,100).then((function(t){e.schoolList=t.data}))},getRoles:function(){var e=this;r["a"].roles(e.currentPage).then((function(t){e.rolesList=t.data}))},getUsers:function(){var e=this;r["a"].users(e.currentPage).then((function(t){e.tableData=t.data,e.totalPage=t.total}))},addUser:function(){var e=this;e.dialogUser=!0,e.form={username:"",password:"",enable:"",title:"",school_id:""}},newUser:function(){var e=this;r["a"].user(e.form).then((function(t){e.dialogUser=!1,e.$message.success("提交成功"),e.getUsers(),e.currentPage=1,e.form={}}))},handleEdit:function(e,t){var a=this;a.dialogUser=!0,a.form=t},handleReset:function(e,t){var a=this;a.dialogResetPassWord=!0,a.pwdForm.id=t.id},ChangePassword:function(){var e=this;e.pwdForm.new_password===e.pwdForm.confirm_password?r["a"].resetPassword(e.pwdForm).then((function(t){e.dialogResetPassWord=!1,e.$message.success("修改成功"),e.getUsers(),e.currentPage=1,e.pwdForm={}})):e.$message.error("新密码与确认密码不一致")},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;r["a"].delUser(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getUsers(),e.currentPage=1}))},handleCurrentChange:function(e){var t=this;t.getUsers()},handleSizeChange:function(e){var t=this;r["a"].users(t.currentPage,e).then((function(e){t.tableData=e.data,t.totalPage=e.total}))}}},f=p,b=(a("4adc"),Object(u["a"])(f,g,h,!1,null,"df93a19e",null)),v=b.exports,k={components:{vRole:m,vUser:v},data:function(){return{activeName:"role"}},methods:{changeActive:function(){"role"===this.activeName&&r["a"].roles(1).then((function(e){})),"user"===this.activeName&&r["a"].users(1).then((function(e){}))}}},x=k,_=Object(u["a"])(x,n,o,!1,null,null,null);t["default"]=_.exports},d2c1:function(e,t,a){}}]);
//# sourceMappingURL=chunk-5cf82f9a.6b8143b0.js.map