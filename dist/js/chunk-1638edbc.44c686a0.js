(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1638edbc"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),r=a("99b1"),l=a.n(r),o={students:function(e,t,a){return n["a"].get(l.a.Students,{page:e,limit:t,class_id:a})},student:function(e){return n["a"].post(l.a.Student,e)},delStudent:function(e){return n["a"].del(l.a.DelStudent,{student_id:e})},searchNumber:function(e,t,a){return n["a"].get(l.a.Students,{page:e,limit:t,number:a})},searchName:function(e,t,a){return n["a"].get(l.a.Students,{page:e,limit:t,name:a})},wxUser:function(e,t){return n["a"].get(l.a.WxUser,{page:e,limit:t})},bindFamily:function(e){return n["a"].post(l.a.BindFamily,e)},familySearch:function(e,t,a){return n["a"].get(l.a.FamilySearch,{page:e,limit:t,number:a})},studentFace:function(e){return n["a"].post(l.a.StudentFace,e)},studentEditFace:function(e){return n["a"].put(l.a.StudentEditFace,e)},faceLogs:function(e,t,a){return n["a"].get(l.a.StudentFaceLogs,{page:e,limit:t,id:a})},grade:function(e){return n["a"].post(l.a.Grade,e)},grades:function(e,t){return n["a"].get(l.a.Grades,{page:e,limit:t})},delGrade:function(e){return n["a"].del(l.a.DelGrade,{grade_id:e})},_class:function(e){return n["a"].post(l.a.Class,e)},classes:function(e,t,a){return n["a"].get(l.a.Classes,{page:e,limit:t,grade_id:a})},delClass:function(e){return n["a"].del(l.a.DelClass,{class_id:e})},device:function(e){return n["a"].post(l.a.Device,e)},devices:function(e){return n["a"].post(l.a.Devices,{page:e})},family:function(e,t){return n["a"].get(l.a.Family,{page:e,limit:t})},masterFamily:function(e){return n["a"].put(l.a.MasterFamily,e)},delFamily:function(e){return n["a"].del(l.a.DelFamily,{id:e})},announcement:function(e){return n["a"].get(l.a.Announcement,{page:e})},exam:function(e){return n["a"].post(l.a.Exam,e)},exams:function(e,t){return n["a"].get(l.a.Exams,{page:e,limit:t})},examsDetail:function(e,t,a){return n["a"].get(l.a.ExamsDetail,{page:e,limit:t,exam_id:a})},delExam:function(e){return n["a"].del(l.a.Exam,{id:e})},subjects:function(){return n["a"].get(l.a.Subjects)},importsExam:function(e,t){return n["a"].post(l.a.ImportsExam,{exam_id:e,file:t})},imports:function(e,t){return n["a"].get(l.a.Imports,{page:e,limit:t})},delImport:function(e){return n["a"].del(l.a.DelImport,{id:e})},example:function(e){return n["a"].getExcel(l.a.Export,{subjects:e})},teacher:function(e,t,a,r){return n["a"].get(l.a.Teacher,{page:e,limit:t,state:a,worker:r})},delTeacher:function(e){return n["a"].del(l.a.DelTeacher,{id:e})},audit:function(e){return n["a"].post(l.a.Audit,e)},schools:function(e,t,a,r){return n["a"].get(l.a.Schools,{page:e,limit:t,mode:a,id:r})},oneSchool:function(e){return n["a"].get(l.a.School,{id:e})},studentInfo:function(e,t,a){return n["a"].get(l.a.StudentInfo,{page:e,limit:t,school_id:a})},schoolUser:function(e,t,a){return n["a"].get(l.a.SchoolUser,{page:e,limit:t,school_id:a})},visitors:function(e,t,a){return n["a"].get(l.a.Visitors,{page:e,limit:t,school_id:a})},teacherUser:function(e,t,a){return n["a"].get(l.a.TeacherUser,{page:e,limit:t,school_id:a})},orders:function(e,t,a){return n["a"].get(l.a.Orders,{page:e,limit:t,school_id:a})},server:function(e,t,a){return n["a"].get(l.a.Server,{page:e,limit:t,product_id:a})},schoolTeacher:function(e,t,a){return n["a"].get(l.a.Teacher,{page:e,limit:t,school_id:a})},school:function(e){return n["a"].post(l.a.School,e)},delSchool:function(e){return n["a"].del(l.a.DelSchool,{school_id:e})},banners:function(e,t){return n["a"].get(l.a.Banners,{page:e,limit:t})},banner:function(e){return n["a"].post(l.a.Banner,e)},message:function(e){return n["a"].post(l.a.Message,e)},messages:function(e,t){return n["a"].get(l.a.Messages,{page:e,limit:t})},messageType:function(e){return n["a"].post(l.a.MessageType,e)},messageTypes:function(e,t){return n["a"].get(l.a.MessageTypes,{page:e,limit:t})},delDocumentType:function(e){return n["a"].del(l.a.DelDocumentType,{id:e})},documents:function(e,t){return n["a"].get(l.a.Documents,{page:e,limit:t})},delDocument:function(e){return n["a"].del(l.a.DelDocument,{id:e})},document:function(e){return n["a"].post(l.a.Document,e)},documentDel:function(e){return n["a"].del(l.a.DocumentDel,{id:e})},delBanner:function(e){return n["a"].del(l.a.DelBanner,{id:e})},buys:function(e,t){return n["a"].get(l.a.Buys,{page:e,limit:t})},buy:function(e){return n["a"].post(l.a.Buy,e)},roles:function(e,t){return n["a"].get(l.a.Roles,{page:e,limit:t})},role:function(e){return n["a"].post(l.a.Role,e)},delRole:function(e){return n["a"].del(l.a.DelRole,{id:e})},user:function(e){return n["a"].post(l.a.User,e)},users:function(e,t){return n["a"].get(l.a.Users,{page:e,limit:t})},delUser:function(e){return n["a"].del(l.a.DelUser,{id:e})},resetPassword:function(e){return n["a"].post(l.a.ResetPassword,e)},goods:function(e){return n["a"].get(l.a.Buys,{school_id:e})},setProduct:function(e){return n["a"].post(l.a.SetProduct,e)},banProduct:function(e){return n["a"].post(l.a.BanProduct,e)},banProducts:function(e){return n["a"].get(l.a.BanProducts,{user_id:e})},userSearch:function(e){return n["a"].get(l.a.UserSearch,{id:e})},jurisdictionSchool:function(e,t){return n["a"].get(l.a.JurisdictionSchool,{user_id:e,mode:t})},jurisdictionProducts:function(e){return n["a"].get(l.a.JurisdictionProducts,{school_id:e})},jurisdictionStudent:function(e,t){return n["a"].get(l.a.JurisdictionStudent,{user_id:e,school_id:t})},studentsTatal:function(e,t){return n["a"].get(l.a.StudentsTatal,{type:e,id:t})},studentGender:function(e,t,a,r){return n["a"].get(l.a.StudentGender,{sex:e,type:t,school_id:a,grade_id:r})},classCheckCount:function(e){return n["a"].get(l.a.ClassCheckCount,{id:e})},statistics:function(e,t){return n["a"].get(l.a.Statistics,{school_id:e,grade_id:t})},updateFace:function(e){return n["a"].post(l.a.UpdateFace,e)},sign:function(e,t,a,r,o){return n["a"].get(l.a.Sign,{page:e,limit:t,name:a,start:r,end:o})},signs:function(e,t,a,r,o,i,s){return n["a"].get(l.a.Signs,{page:e,limit:t,user_id:a,type:r,status:o,start:i,end:s})},signsTime:function(e,t,a,r,o){return n["a"].get(l.a.Signs,{age:e,limit:t,user_id:a,start:r,end:o})},editSchool:function(e,t){return n["a"].post(l.a.EditSchool,{up_time:e,below_time:t})},exportSign:function(e){return n["a"].getExcel(l.a.ExportSign,{id:e})}};t["a"]=o},"6fc1":function(e,t,a){"use strict";a.r(t);var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addSchool}},[e._v("添加学校")])],1)]),a("el-dialog",{attrs:{title:"添加学校",visible:e.dialogSchool,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogSchool=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"学校名称"}},[a("el-input",{attrs:{placeholder:"请输入学校名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"学校地址"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入学校地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"上下班时间"}},[a("el-time-select",{attrs:{placeholder:"请选择上班时间","is-range":"","picker-options":{start:"06:00",step:"00:01",end:"21:30"}},model:{value:e.form.up_time,callback:function(t){e.$set(e.form,"up_time",t)},expression:"form.up_time"}}),a("el-time-select",{attrs:{placeholder:"请选择下班时间","is-range":"","picker-options":{start:"06:00",step:"00:01",end:"21:30",minTime:e.form.up_time}},model:{value:e.form.below_time,callback:function(t){e.$set(e.form,"below_time",t)},expression:"form.below_time"}})],1),a("el-form-item",{attrs:{label:"人脸库(进)"}},[a("el-input",{attrs:{placeholder:"请输入人脸库(进)"},model:{value:e.form.in_group,callback:function(t){e.$set(e.form,"in_group",t)},expression:"form.in_group"}})],1),a("el-form-item",{attrs:{label:"人脸库(出)"}},[a("el-input",{attrs:{placeholder:"请输入人脸库(出)"},model:{value:e.form.out_group,callback:function(t){e.$set(e.form,"out_group",t)},expression:"form.out_group"}})],1),a("el-form-item",{attrs:{label:"收费模式"}},[a("el-input",{model:{value:e.form.mode,callback:function(t){e.$set(e.form,"mode",t)},expression:"form.mode"}})],1),a("el-form-item",{attrs:{label:"家长进校模式"}},[a("el-input",{model:{value:e.form.allow_parent_in,callback:function(t){e.$set(e.form,"allow_parent_in",t)},expression:"form.allow_parent_in"}})],1),e._l(e.form.grades,(function(t,n){return a("div",{key:n},[a("el-form-item",{attrs:{label:"年级选择"}},[a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:e.gradeChange},model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"item.title"}},e._l(e.grade,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-transfer",{attrs:{data:e.classList,titles:["班级","选中班级"],"button-texts":["取消","确定"]},model:{value:t.classes,callback:function(a){e.$set(t,"classes",a)},expression:"item.classes"}})],1)],1)})),a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.addGrade}},[e._v("添加年级")]),a("el-button",{attrs:{type:"primary"},on:{click:e.delGrade}},[e._v("删除年级")])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newSchool}},[e._v("提交")])],1)],1)],2)],1)]),a("el-table",{attrs:{data:e.tableDate,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"学校ID"}}),a("el-table-column",{attrs:{prop:"name",label:"学校名称"}}),a("el-table-column",{attrs:{prop:"address",label:"学校地址"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),a("el-table-column",{attrs:{label:"操作",width:"400px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" 操作 "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowUser(t.$index,t.row)}}},[e._v("查看用户")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleShowFinancial(t.$index,t.row)}}},[e._v("查看财务 ")])],1),a("el-dropdown-item",[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除学校")])],1)],1)],1)]}}])})],1),a("el-dialog",{attrs:{title:"查看学校所有",visible:e.dialogUser,width:"80%"},on:{"update:visible":function(t){e.dialogUser=t},close:e.closeShowUser}},[a("div",{staticClass:"box"},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleUser},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}},e._l(e.userList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"用户"==e.user?[a("el-table",{attrs:{data:e.userData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"href",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href,alt:""}})]}}],null,!1,1090686021)}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.sex?"男":"女")}})]}}],null,!1,283713386)}),a("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),a("el-table-column",{attrs:{prop:"worker",label:"是否老师"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.worker||1==t.row.worker?a("span",[e._v("否")]):2==t.row.worker?a("span",[e._v("是")]):3==t.row.worker?a("span",[e._v("否")]):e._e()]}}],null,!1,2561583082)}),a("el-table-column",{attrs:{prop:"worker",label:"是否班主任"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.worker||1==t.row.worker?a("span",[e._v("否")]):2==t.row.worker?a("span",[e._v("是")]):3==t.row.worker?a("span",[e._v("否")]):e._e()]}}],null,!1,2561583082)}),a("el-table-column",{attrs:{prop:"worker",label:"是否教职工"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.worker||1==t.row.worker?a("span",[e._v("否")]):2==t.row.worker?a("span",[e._v("是")]):3==t.row.worker?a("span",[e._v("否")]):e._e()]}}],null,!1,2561583082)})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentUserPage,"page-sizes":[10,20,30,40,50],"page-size":e.userPageSize,layout:"sizes, prev, pager, next, jumper",total:e.userTotalPage},on:{"current-change":e.handleUserChange,"update:currentPage":function(t){e.currentUserPage=t},"update:current-page":function(t){e.currentUserPage=t},"size-change":e.handleUserSizeChange}})],1)]:e._e(),"学生"==e.user?[a("el-table",{attrs:{data:e.studentData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"学号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.sex?"男":"女")}})]}}],null,!1,283713386)}),a("el-table-column",{attrs:{prop:"age",label:"年龄"}}),a("el-table-column",{attrs:{prop:"grades.title",label:"年级"}}),a("el-table-column",{attrs:{prop:"class.title",label:"班级"}}),a("el-table-column",{attrs:{prop:"face_id",label:"生活头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.face_id,alt:""}})]}}],null,!1,124218351)}),a("el-table-column",{attrs:{prop:"face_image",label:"人脸头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.face_image,alt:""}})]}}],null,!1,2704994181)}),a("el-table-column",{attrs:{prop:"userInfo.user_id",label:"默认家长ID"}}),a("el-table-column",{attrs:{prop:"userInfo.name",label:"默认家长姓名"}}),a("el-table-column",{attrs:{prop:"userInfo.phone",label:"默认家长手机"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentStudentPage,"page-sizes":[10,20,30,40,50],"page-size":e.studentPageSize,layout:"sizes, prev, pager, next, jumper",total:e.studentTotalPage},on:{"current-change":e.handleStudentChange,"update:currentPage":function(t){e.currentStudentPage=t},"update:current-page":function(t){e.currentStudentPage=t},"size-change":e.handleStudentSizeChange}})],1)]:e._e(),"教师"==e.user?[a("el-table",{attrs:{data:e.teacherData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"wxUser.nickname",label:"昵称"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(1==t.row.sex?"男":"女")}})]}}],null,!1,283713386)}),a("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),a("el-table-column",{attrs:{prop:"grades.title",label:"年级"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(null==t.row.grades.title?"无":t.row.grades.title)}})]}}],null,!1,990056618)}),a("el-table-column",{attrs:{prop:"class.title",label:"班级"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(null==t.row.class.title?"无":t.row.class.title)}})]}}],null,!1,4197293034)}),a("el-table-column",{attrs:{prop:"href",label:"人脸头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href,alt:""}})]}}],null,!1,1090686021)}),a("el-table-column",{attrs:{prop:"worker",label:"是否是班主任"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.worker||1==t.row.worker?a("span",[e._v("否")]):2==t.row.worker?a("span",[e._v("是")]):3==t.row.worker?a("span",[e._v("否")]):e._e()]}}],null,!1,2561583082)}),a("el-table-column",{attrs:{prop:"state",label:"审核状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("span",[e._v("待审核")]):2==t.row.state?a("span",[e._v("已通过")]):3==t.row.state?a("span",[e._v("未通过")]):e._e()]}}],null,!1,3037457847)}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentTeacherPage,"page-sizes":[10,20,30,40,50],"page-size":e.teacherPageSize,layout:"sizes, prev, pager, next, jumper",total:e.teacherTotalPage},on:{"current-change":e.handleTeacherChange,"update:currentPage":function(t){e.currentTeacherPage=t},"update:current-page":function(t){e.currentTeacherPage=t},"size-change":e.handleTeacherSizeChange}})],1)]:e._e(),"访客"==e.user?[a("el-table",{attrs:{data:e.visitorData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"访客ID"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),a("el-table-column",{attrs:{prop:"user_name",label:"拜访人"}}),a("el-table-column",{attrs:{prop:"reason",label:"拜访理由"}}),a("el-table-column",{attrs:{prop:"href",label:"访客人脸"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{src:e.row.href,alt:""}})]}}],null,!1,1090686021)})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentVisitorPage,"page-sizes":[10,20,30,40,50],"page-size":e.visitorPageSize,layout:"sizes, prev, pager, next, jumper",total:e.visitorTotalPage},on:{"current-change":e.handleVisitorChange,"update:currentPage":function(t){e.currentVisitorPage=t},"update:current-page":function(t){e.currentVisitorPage=t},"size-change":e.handleVisitorSizeChange}})],1)]:e._e()],2)]),a("el-dialog",{attrs:{title:"查看财务",visible:e.dialogFinancial,width:"80%"},on:{"update:visible":function(t){e.dialogFinancial=t},close:e.closeFinancial}},[a("div",{staticClass:"box"},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleFinancial},model:{value:e.financial,callback:function(t){e.financial=t},expression:"financial"}},e._l(e.financialList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"订单列表"===e.financial?a("div",[a("el-table",{attrs:{data:e.orderData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"school_id",label:"学校ID"}}),a("el-table-column",{attrs:{prop:"no",label:"订单ID"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"user_name",label:"用户名"}}),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"price",label:"商品价格"}}),a("el-table-column",{attrs:{prop:"time",label:"商品时长"}}),a("el-table-column",{attrs:{prop:"status",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("span",[e._v("提交")]):2==t.row.status?a("span",[e._v("已付款")]):3==t.row.status?a("span",[e._v("无效")]):e._e()]}}],null,!1,1300003384)}),a("el-table-column",{attrs:{prop:"created_id",label:"创建时间"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentOrderPage,"page-sizes":[10,20,30,40,50],"page-size":e.orderPageSize,layout:"sizes, prev, pager, next, jumper",total:e.orderTotalPage},on:{"current-change":e.handleOrderChange,"update:currentPage":function(t){e.currentOrderPage=t},"update:current-page":function(t){e.currentOrderPage=t},"size-change":e.handleOrderSizeChange}})],1)],1):e._e(),"财务统计"===e.financial?a("div",[a("el-table",{attrs:{data:e.financialData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"周总额"}}),a("el-table-column",{attrs:{prop:"name",label:"月总额"}}),a("el-table-column",{attrs:{prop:"address",label:"季度总额"}}),a("el-table-column",{attrs:{prop:"created_at",label:"上一季度总额"}}),a("el-table-column",{attrs:{prop:"id",label:"年总额"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentFinancePage,"page-sizes":[10,20,30,40,50],"page-size":e.financePageSize,layout:"sizes, prev, pager, next, jumper",total:e.financeTotalPage},on:{"current-change":e.handleFinanceChange,"update:currentPage":function(t){e.currentFinancePage=t},"update:current-page":function(t){e.currentFinancePage=t},"size-change":e.handleFinanceSizeChange}})],1)],1):e._e()])]),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除学校",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该学校")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1)],1)},l=[],o=(a("4160"),a("b0c0"),a("159b"),a("ade3")),i=a("365c"),s={name:"school",data:function(){return{loading:!0,dialogSchool:!1,dialogDel:!1,form:{name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[],id:"",allow_parent_in:0,up_time:"",below_time:""},grade:[{value:"小班",label:"小班"},{value:"中班",label:"中班"},{value:"大班",label:"大班"}],classList:[],dialogUser:!1,user:"访客",userList:[{value:1,label:"用户"},{value:2,label:"学生"},{value:3,label:"教师"},{value:4,label:"访客"}],id:"",userData:[],userPageSize:10,userTotalPage:0,currentUserPage:1,teacherData:[],teacherPageSize:10,teacherTotalPage:0,currentTeacherPage:1,studentData:[],studentPageSize:10,studentTotalPage:0,currentStudentPage:1,visitorData:[],visitorPageSize:10,visitorTotalPage:0,currentVisitorPage:1,dialogFinancial:!1,financial:"订单列表",financialList:[{value:1,label:"订单列表"},{value:2,label:"财务统计"}],orderData:[],orderPageSize:10,orderTotalPage:0,currentOrderPage:1,financialData:[],financePageSize:10,financeTotalPage:0,currentFinancePage:1,tableDate:[],currentPage:1,totalPage:0,school_id:""}},mounted:function(){this.getSchool(),this.generateData()},methods:(n={getSchool:function(){var e=this;i["a"].schools(e.currentPage).then((function(t){e.tableDate=t.data,e.totalPage=t.total,e.loading=!1})).catch((function(t){e.loading=!1}))},newSchool:function(){var e=this;e.form.grades.forEach((function(e){for(var t=0;t<e.classes.length;t++)e.classes[t]={title:e.classes[t]}})),i["a"].school(e.form).then((function(t){e.dialogSchool=!1,e.getSchool(),e.form={name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[],allow_parent_in:0,up_time:"",below_time:""},e.$message.success("提交成功"),e.currentPage=1}))},handleEdit:function(e,t){var a=this;a.dialogSchool=!0,console.log(t),a.form={name:t.name,address:t.address,in_group:t.in_group,out_group:t.out_group,mode:t.mode,user:{username:"",password:""},grades:[],id:t.id,allow_parent_in:t.allow_parent_in,up_time:t.up_time,below_time:t.below_time}},handleShowUser:function(e,t){var a=this;a.dialogUser=!0,a.id=t.id},closeShowUser:function(){var e=this;e.user="访客",e.userData=[],e.studentData=[],e.teacherData=[],e.visitorData=[]},handleUser:function(e){var t=this;switch(e){case 1:t.$nextTick((function(){t.user="用户",i["a"].schoolUser(t.currentUserPage,t.userPageSize,t.id).then((function(e){t.userData=e.data,t.userTotalPage=e.total,t.$message.success("获取数据成功")}))}));break;case 2:t.$nextTick((function(){t.user="学生",i["a"].studentInfo(t.currentStudentPage,t.studentPageSize,t.id).then((function(e){t.studentData=e.data,t.studentTotalPage=e.total,t.$message.success("获取数据成功")}))}));break;case 3:t.$nextTick((function(){t.user="教师",i["a"].teacherUser(t.currentTeacherPage,t.teacherPageSize,t.id).then((function(e){t.teacherData=e.data,t.teacherTotalPage=e.total,t.$message.success("获取数据成功")}))}));break;case 4:t.$nextTick((function(){t.user="访客",i["a"].visitors(t.currentVisitorPage,t.visitorPageSize,t.id).then((function(e){t.visitorData=e.data,t.visitorTotalPage=e.total,t.$message.success("获取数据成功")}))}));break}},handleShowFinancial:function(e,t){var a=this;a.dialogFinancial=!0,a.id=t.id},handleFinancial:function(e){var t=this;switch(e){case 1:t.$nextTick((function(){t.financial="订单列表",i["a"].orders(1,10,t.id).then((function(e){t.orderData=e.data,t.orderTotalPage=e.total,t.$message.success("获取数据成功")}))}));break;case 2:t.financial="财务统计",i["a"].orders(1,10,t.id).then((function(e){t.financialData=e.data,t.financeTotalPage=e.total,t.$message.success("获取数据成功")}));break}},closeFinancial:function(){var e=this;e.financial="订单列表",e.orderData=[],e.financialData=[]},handleDelete:function(e,t){var a=this;console.log(t),a.school_id=t.id,a.dialogDel=!0},toDel:function(){var e=this;i["a"].delSchool(e.school_id).then((function(t){e.dialogDel=!1,e.$message.success("删除成功"),e.getSchool()}))},addSchool:function(){var e=this;e.dialogSchool=!0,e.form={name:"",address:"",in_group:"",out_group:"",mode:1,user:{username:"",password:""},grades:[],allow_parent_in:0,up_time:"",below_time:""}},addGrade:function(){var e=this;e.form.grades.push({})},delGrade:function(){var e=this;e.form.grades.pop({})},gradeChange:function(e){},generateData:function(){for(var e=this,t=["小一","小二","小三","小四","小五","小六","中一","中二","中三","中四","中五","中六","中七","大一","大二","大三","大四","大五","大六","大七"],a=0;a<t.length;a++)e.classList.push({key:t[a],label:t[a]});return e.classList},handleCurrentChange:function(e){var t=this;t.getSchool()},handleSizeChange:function(e){var t=this;i["a"].schools(t.currentPage,e).then((function(e){t.tableDate=e.data,t.totalPage=e.total}))}},Object(o["a"])(n,"handleCurrentChange",(function(e){var t=this;t.getSchool()})),Object(o["a"])(n,"handleSizeChange",(function(e){var t=this;i["a"].schools(t.currentPage,e).then((function(e){t.tableDate=e.data,t.totalPage=e.total}))})),Object(o["a"])(n,"handleVisitorChange",(function(e){var t=this;t.currentVisitorPage=e,i["a"].visitors(e,t.visitorPageSize,t.id).then((function(e){t.visitorData=e.data,t.visitorTotalPage=e.total}))})),Object(o["a"])(n,"handleVisitorSizeChange",(function(e){var t=this;i["a"].visitors(t.currentVisitorPage,e,t.id).then((function(e){t.visitorData=e.data,t.visitorTotalPage=e.total}))})),Object(o["a"])(n,"handleTeacherChange",(function(e){var t=this;t.currentTeacherPage=e,i["a"].teacherUser(e,t.teacherPageSize,t.id).then((function(e){t.teacherData=e.data,t.teacherTotalPage=e.total}))})),Object(o["a"])(n,"handleTeacherSizeChange",(function(e){var t=this;i["a"].teacherUser(t.currentTeacherPage,e,t.id).then((function(e){t.teacherData=e.data,t.teacherTotalPage=e.total}))})),Object(o["a"])(n,"handleUserChange",(function(e){var t=this;t.currentUserPage=e,i["a"].schoolUser(e,t.userPageSize,t.id).then((function(e){t.userData=e.data,t.userTotalPage=e.total}))})),Object(o["a"])(n,"handleUserSizeChange",(function(e){var t=this;i["a"].schoolUser(t.currentUserPage,e,t.id).then((function(e){t.userData=e.data,t.userTotalPage=e.total}))})),Object(o["a"])(n,"handleStudentChange",(function(e){var t=this;t.currentStudentPage=e,i["a"].studentInfo(e,t.studentPageSize,t.id).then((function(e){t.studentData=e.data,t.studentTotalPage=e.total}))})),Object(o["a"])(n,"handleStudentSizeChange",(function(e){var t=this;i["a"].studentInfo(t.currentStudentPage,e,t.id).then((function(e){t.studentData=e.data,t.studentTotalPage=e.total}))})),Object(o["a"])(n,"handleOrderChange",(function(e){var t=this;t.currentOrderPage=e,i["a"].orders(e,t.orderPageSize,t.id).then((function(e){t.orderData=e.data,t.orderTotalPage=e.total}))})),Object(o["a"])(n,"handleOrderSizeChange",(function(e){var t=this;i["a"].orders(e,t.currentOrderPage,t.id).then((function(e){t.orderData=e.data,t.orderTotalPage=e.total}))})),Object(o["a"])(n,"handleFinanceChange",(function(e){var t=this;t.currentFinancePage=e,i["a"].orders(e,t.financePageSize,t.id).then((function(e){t.financialData=e.data,t.financeTotalPage=e.total}))})),Object(o["a"])(n,"handleFinanceSizeChange",(function(e){var t=this;i["a"].orders(e,t.currentFinancePage,t.id).then((function(e){t.financialData=e.data,t.financeTotalPage=e.total}))})),n)},u=s,c=a("2877"),d=Object(c["a"])(u,r,l,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-1638edbc.44c686a0.js.map