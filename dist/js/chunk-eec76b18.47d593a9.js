(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eec76b18"],{"4a3ff":function(e,t,a){},"4c29":function(e,t,a){"use strict";var n=a("4a3ff"),i=a.n(n);i.a},5734:function(e,t,a){"use strict";var n=a("79f4"),i=a.n(n);i.a},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),i=a("5899"),l="["+i+"]",r=RegExp("^"+l+l+"*"),o=RegExp(l+l+"*$"),s=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(r,"")),2&e&&(a=a.replace(o,"")),a}};e.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(e,t,a){var n=a("861d"),i=a("d2bb");e.exports=function(e,t,a){var l,r;return i&&"function"==typeof(l=t.constructor)&&l!==a&&n(r=l.prototype)&&r!==a.prototype&&i(e,r),e}},"79f4":function(e,t,a){},"8d81":function(e,t,a){var n;(function(i){"use strict";function l(e,t){var a=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(a>>16);return n<<16|65535&a}function r(e,t){return e<<t|e>>>32-t}function o(e,t,a,n,i,o){return l(r(l(l(t,e),l(n,o)),i),a)}function s(e,t,a,n,i,l,r){return o(t&a|~t&n,e,t,i,l,r)}function c(e,t,a,n,i,l,r){return o(t&n|a&~n,e,t,i,l,r)}function u(e,t,a,n,i,l,r){return o(t^a^n,e,t,i,l,r)}function d(e,t,a,n,i,l,r){return o(a^(t|~n),e,t,i,l,r)}function f(e,t){var a,n,i,r,o;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var f=1732584193,m=-271733879,g=-1732584194,p=271733878;for(a=0;a<e.length;a+=16)n=f,i=m,r=g,o=p,f=s(f,m,g,p,e[a],7,-680876936),p=s(p,f,m,g,e[a+1],12,-389564586),g=s(g,p,f,m,e[a+2],17,606105819),m=s(m,g,p,f,e[a+3],22,-1044525330),f=s(f,m,g,p,e[a+4],7,-176418897),p=s(p,f,m,g,e[a+5],12,1200080426),g=s(g,p,f,m,e[a+6],17,-1473231341),m=s(m,g,p,f,e[a+7],22,-45705983),f=s(f,m,g,p,e[a+8],7,1770035416),p=s(p,f,m,g,e[a+9],12,-1958414417),g=s(g,p,f,m,e[a+10],17,-42063),m=s(m,g,p,f,e[a+11],22,-1990404162),f=s(f,m,g,p,e[a+12],7,1804603682),p=s(p,f,m,g,e[a+13],12,-40341101),g=s(g,p,f,m,e[a+14],17,-1502002290),m=s(m,g,p,f,e[a+15],22,1236535329),f=c(f,m,g,p,e[a+1],5,-165796510),p=c(p,f,m,g,e[a+6],9,-1069501632),g=c(g,p,f,m,e[a+11],14,643717713),m=c(m,g,p,f,e[a],20,-373897302),f=c(f,m,g,p,e[a+5],5,-701558691),p=c(p,f,m,g,e[a+10],9,38016083),g=c(g,p,f,m,e[a+15],14,-660478335),m=c(m,g,p,f,e[a+4],20,-405537848),f=c(f,m,g,p,e[a+9],5,568446438),p=c(p,f,m,g,e[a+14],9,-1019803690),g=c(g,p,f,m,e[a+3],14,-187363961),m=c(m,g,p,f,e[a+8],20,1163531501),f=c(f,m,g,p,e[a+13],5,-1444681467),p=c(p,f,m,g,e[a+2],9,-51403784),g=c(g,p,f,m,e[a+7],14,1735328473),m=c(m,g,p,f,e[a+12],20,-1926607734),f=u(f,m,g,p,e[a+5],4,-378558),p=u(p,f,m,g,e[a+8],11,-2022574463),g=u(g,p,f,m,e[a+11],16,1839030562),m=u(m,g,p,f,e[a+14],23,-35309556),f=u(f,m,g,p,e[a+1],4,-1530992060),p=u(p,f,m,g,e[a+4],11,1272893353),g=u(g,p,f,m,e[a+7],16,-155497632),m=u(m,g,p,f,e[a+10],23,-1094730640),f=u(f,m,g,p,e[a+13],4,681279174),p=u(p,f,m,g,e[a],11,-358537222),g=u(g,p,f,m,e[a+3],16,-722521979),m=u(m,g,p,f,e[a+6],23,76029189),f=u(f,m,g,p,e[a+9],4,-640364487),p=u(p,f,m,g,e[a+12],11,-421815835),g=u(g,p,f,m,e[a+15],16,530742520),m=u(m,g,p,f,e[a+2],23,-995338651),f=d(f,m,g,p,e[a],6,-198630844),p=d(p,f,m,g,e[a+7],10,1126891415),g=d(g,p,f,m,e[a+14],15,-1416354905),m=d(m,g,p,f,e[a+5],21,-57434055),f=d(f,m,g,p,e[a+12],6,1700485571),p=d(p,f,m,g,e[a+3],10,-1894986606),g=d(g,p,f,m,e[a+10],15,-1051523),m=d(m,g,p,f,e[a+1],21,-2054922799),f=d(f,m,g,p,e[a+8],6,1873313359),p=d(p,f,m,g,e[a+15],10,-30611744),g=d(g,p,f,m,e[a+6],15,-1560198380),m=d(m,g,p,f,e[a+13],21,1309151649),f=d(f,m,g,p,e[a+4],6,-145523070),p=d(p,f,m,g,e[a+11],10,-1120210379),g=d(g,p,f,m,e[a+2],15,718787259),m=d(m,g,p,f,e[a+9],21,-343485551),f=l(f,n),m=l(m,i),g=l(g,r),p=l(p,o);return[f,m,g,p]}function m(e){var t,a="",n=32*e.length;for(t=0;t<n;t+=8)a+=String.fromCharCode(e[t>>5]>>>t%32&255);return a}function g(e){var t,a=[];for(a[(e.length>>2)-1]=void 0,t=0;t<a.length;t+=1)a[t]=0;var n=8*e.length;for(t=0;t<n;t+=8)a[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return a}function p(e){return m(f(g(e),8*e.length))}function h(e,t){var a,n,i=g(e),l=[],r=[];for(l[15]=r[15]=void 0,i.length>16&&(i=f(i,8*e.length)),a=0;a<16;a+=1)l[a]=909522486^i[a],r[a]=1549556828^i[a];return n=f(l.concat(g(t)),512+8*t.length),m(f(r.concat(n),640))}function b(e){var t,a,n="0123456789abcdef",i="";for(a=0;a<e.length;a+=1)t=e.charCodeAt(a),i+=n.charAt(t>>>4&15)+n.charAt(15&t);return i}function v(e){return unescape(encodeURIComponent(e))}function y(e){return p(v(e))}function _(e){return b(y(e))}function x(e,t){return h(v(e),v(t))}function C(e,t){return b(x(e,t))}function F(e,t,a){return t?a?x(t,e):C(t,e):a?y(e):_(e)}n=function(){return F}.call(t,a,t,e),void 0===n||(e.exports=n)})()},a9e3:function(e,t,a){"use strict";var n=a("83ab"),i=a("da84"),l=a("94ca"),r=a("6eeb"),o=a("5135"),s=a("c6b6"),c=a("7156"),u=a("c04e"),d=a("d039"),f=a("7c73"),m=a("241c").f,g=a("06cf").f,p=a("9bf2").f,h=a("58a8").trim,b="Number",v=i[b],y=v.prototype,_=s(f(y))==b,x=function(e){var t,a,n,i,l,r,o,s,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=h(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(l=c.slice(2),r=l.length,o=0;o<r;o++)if(s=l.charCodeAt(o),s<48||s>i)return NaN;return parseInt(l,n)}return+c};if(l(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var C,F=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof F&&(_?d((function(){y.valueOf.call(a)})):s(a)!=b)?c(new v(x(t)),a,F):x(t)},k=n?m(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;k.length>S;S++)o(v,C=k[S])&&!o(F,C)&&p(F,C,g(v,C));F.prototype=y,y.constructor=F,r(i,b,F)}},baa5:function(e,t,a){var n=a("23e7"),i=a("e58c");n({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},c975:function(e,t,a){"use strict";var n=a("23e7"),i=a("4d64").indexOf,l=a("a640"),r=a("ae40"),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0,c=l("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:s||!c||!u},{indexOf:function(e){return s?o.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},cfb1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.changeActive},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"学生信息",name:"info"}},[a("student-list")],1),a("el-tab-pane",{attrs:{label:"批量导入学生",name:"more"}},[a("student-add")],1)],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"获取数据中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addStudent}},[e._v("添加学生")])],1),a("div",{staticClass:"btn"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入学生学号/姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.student)}},model:{value:e.student,callback:function(t){e.student=t},expression:"student"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{slot:"prepend",placeholder:"请选择搜索方式"},on:{change:e.changeType},slot:"prepend",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.search(e.student)}},slot:"append"})],1)],1)]),a("el-dialog",{attrs:{title:"添加学生",visible:e.dialogStudent,width:"700px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogStudent=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"年级"}},[a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:e.gradeOnChange},model:{value:e.grade,callback:function(t){e.grade=t},expression:"grade"}},e._l(e.gradeList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-select",{attrs:{placeholder:"请选择班级"},on:{change:e.classOnChange},model:{value:e.classValue,callback:function(t){e.classValue=t},expression:"classValue"}},e._l(e.classList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{attrs:{placeholder:"请输入学号"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("el-radio",{attrs:{label:1}},[e._v("男")]),a("el-radio",{attrs:{label:2}},[e._v("女")])],1)],1),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newStudent}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{ref:"multipleTable",attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"学生ID"}}),a("el-table-column",{attrs:{prop:"number",label:"学号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"face_image",label:"人脸信息"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",trigger:"click"}},[a("img",{staticStyle:{"max-width":"800px","max-height":"800px"},attrs:{src:e.row.face_image}}),a("img",{staticStyle:{"max-width":"180px","max-height":"80px"},attrs:{slot:"reference",src:e.row.face_image},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s("1"==t.row.sex?"男":"女")}})]}}])}),a("el-table-column",{attrs:{prop:"age",label:"年龄(岁)",width:"100px"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" 操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleFace(t.$index,t.row)}}},[e._v("更换人脸")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleFamily(t.$index,t.row)}}},[e._v("绑定家长")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleFaceLogs(t.$index,t.row)}}},[e._v("查看进出记录")])],1),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])],1),a("el-dropdown-item",[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])],1)],1)],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange}})],1),a("el-dialog",{attrs:{title:"绑定家长",visible:e.dialogFamily,"close-on-click-modal":!1,width:"500px"},on:{"update:visible":function(t){e.dialogFamily=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.bindFormFamily}},[a("el-form-item",{attrs:{label:"选择家长"}},[a("el-select",{attrs:{filterable:"",remote:"",placeholder:"请选择家长","remote-method":e.remoteMethod},on:{change:e.familyChange},model:{value:e.bindFormFamily.user_id,callback:function(t){e.$set(e.bindFormFamily,"user_id",t)},expression:"bindFormFamily.user_id"}},e._l(e.familyList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.value+" "+e.label,value:e.value}})})),1)],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.bindFamily}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{title:"更换人脸",visible:e.dialogFace,"close-on-click-modal":!1,width:"500px"},on:{"update:visible":function(t){e.dialogFace=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.familyForm}},[a("el-form-item",{attrs:{label:"只允许进校"}},[a("el-radio-group",{model:{value:e.familyForm.only_in,callback:function(t){e.$set(e.familyForm,"only_in",t)},expression:"familyForm.only_in"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1),a("div",{staticClass:"tips"},[a("p",[a("span",[e._v("提示：")]),e._v("更换后的人脸照片会覆盖掉原有的人脸照片！ ")])]),a("el-form-item",{attrs:{label:"更换人脸图片"}},[a("el-upload",{ref:"upload",attrs:{action:"https://upload-z2.qiniup.com",limit:1,"before-upload":e.beforeAvatarUpload,"auto-upload":!1,"on-success":e.handleAvatarSuccess,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"on-change":e.handleChange,data:e.imgData}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择图片")])],1),e.hasNewImage?a("div",{staticStyle:{color:"red","font-size":"12px"}},[e._v("* 点击文件名可删除所选图片")]):e._e(),e.old_href?a("div",{staticClass:"up-img"},[a("span",{staticStyle:{display:"flex","justify-items":"center",color:"#409eff"}},[e._v("原人脸图片")]),a("img",{staticClass:"pic-box",attrs:{src:e.old_href}})]):e._e(),e.familyForm.href?a("div",{staticClass:"up-img"},[a("span",{staticStyle:{display:"flex","justify-items":"center",color:"#67C23A"}},[e._v("新人脸图片")]),a("img",{staticClass:"pic-box",attrs:{src:e.familyForm.href}})]):a("div",{staticClass:"up-img"},[a("img",{staticClass:"pic-box",attrs:{src:e.change_href}})])],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.changeFace}},[e._v("提交")])],1)],1)],1)],1)]),a("el-dialog",{attrs:{title:"进出记录",visible:e.dialogFaceLogs,"close-on-click-modal":!1,width:"700px"},on:{"update:visible":function(t){e.dialogFaceLogs=t}}},[a("div",{staticClass:"box"},[a("el-table",{attrs:{data:e.FaceLogsDate,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"timestamp",label:"时间"}}),a("el-table-column",{attrs:{prop:"temp",label:"温度"}}),a("el-table-column",{attrs:{prop:"device.direction",label:"进出校"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s("in"==t.row.device.direction?"进校":"出校")}})]}}])})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentLogsPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.logsTotalPage},on:{"current-change":e.handleLogsCurrentChange,"update:currentPage":function(t){e.currentLogsPage=t},"update:current-page":function(t){e.currentLogsPage=t}}})],1)]),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除年级",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该学生")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)])],1)},r=[],o=(a("99af"),a("4de4"),a("4160"),a("c975"),a("baa5"),a("d81d"),a("b0c0"),a("a9e3"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("365c")),s=a("8d81"),c=a.n(s),u=a("bc3a"),d=a.n(u),f=(a("ac1f"),a("25f0"),a("5319"),{});function m(e){return e=e.toString(),e[1]?e:"0"+e}f.formatTime=function(e,t){var a=["Y","M","D","h","m","s"],n=[],i=new Date(1e3*e);for(var l in n.push(i.getFullYear()),n.push(m(i.getMonth()+1)),n.push(m(i.getDate())),n.push(m(i.getHours())),n.push(m(i.getMinutes())),n.push(m(i.getSeconds())),n)t=t.replace(a[l],n[l]);return t};var g=f,p={name:"studentlist",data:function(){return{loading:!0,dialogStudent:!1,grade:"",gradeList:[],classValue:"",classList:[],form:{name:"",number:"",sex:1,age:"",class_id:"",grade_id:""},dialogFace:!1,dialogDel:!1,id:"",dialogFamily:!1,familyList:[],familyData:[],list:[],disabled:!1,imgData:{key:"",token:""},fileName:"",suffix:"",qiniuaddr:"https://tu.fengniaotuangou.cn",familyForm:{href:"",only_in:"",id:""},old_href:"",change_href:"",hasNewImage:!1,new_file:"",student:"",type:"",typeList:[{value:1,label:"按学生学号搜索"},{value:2,label:"按学生姓名搜索"}],typeDisabled:!1,bindFormFamily:{user_id:"",student_id:""},FaceLogsDate:[],dialogFaceLogs:!1,currentLogsPage:1,logsTotalPage:0,log_id:"",tableData:[],face_image:"",currentPage:1,totalPage:0,pageSize:10,permissions:localStorage.getItem("permissions"),role:localStorage.getItem("role")}},mounted:function(){this.getStudent(),this.getGrade(),this.getFamily(),this.getQiniuToken()},methods:{familyChange:function(e){console.log("familyChange",e),console.log("familyChange",this.familyForm.user_id)},getGrade:function(){var e=this;o["a"].grades(e.currentPage).then((function(t){e.gradeList=t.data}))},refresh:function(){var e=this;e.pageSize=10,o["a"].students(1).then((function(t){e.tableData=t.data,e.totalPage=t.total,e.currentPage=1}))},getStudent:function(){var e=this;o["a"].students(e.currentPage).then((function(t){e.loading=!1,e.tableData=t.data,e.totalPage=t.total})).catch((function(t){e.loading=!1}))},getClass:function(e){var t=this;o["a"].classes(1,1e3,e).then((function(e){t.classList=e.data}))},gradeOnChange:function(e){var t=this;t.grade=e,t.getClass(e),t.form.grade_id=e},classOnChange:function(e){var t=this;t.form.class_id=e},addStudent:function(){var e=this;e.dialogStudent=!0,e.grade="",e.classValue="",e.form={name:"",number:"",sex:1,age:"",class_id:""}},newStudent:function(){var e=this;e.form.name&&e.form.number&&e.form.age&&e.grade&&e.form.class_id?o["a"].student(e.form).then((function(t){e.$message.success("提交成功"),e.getStudent(),e.dialogStudent=!1,e.grade="",e.classValue="",e.form={name:"",number:"",sex:1,age:"",class_id:""},e.currentPage=1})):e.$message.warning("请补充完整信息")},changeType:function(e){var t=this;t.typeDisabled=!0,t.student=""},search:function(){var e=this;if(e.type){if(1==e.type){var t=e.student;o["a"].searchNumber(1,e.pageSize,t).then((function(t){e.tableData=t.data,e.totalPage=t.total,e.$message.success("搜索成功！")}))}if(2==e.type){var a=e.student;o["a"].searchName(1,e.pageSize,a).then((function(t){e.tableData=t.data,e.totalPage=t.total,e.$message.success("搜索成功！")}))}}else e.$message.error("请先选择搜索方式")},getFamily:function(){var e=this;o["a"].wxUser(e.currentPage,1e4).then((function(t){e.familyData=t.data,e.list=e.familyData.map((function(e){return{value:"".concat(e.id),label:"".concat(e.nickname)}}))}))},remoteMethod:function(e){var t=this;""!==e&&setTimeout((function(){t.familyList=t.list.filter((function(t){return t.label.indexOf(e)>-1}))}),200)},handleFamily:function(e,t){var a=this;a.bindFormFamily.student_id=t.id,a.dialogFamily=!0,a.bindFormFamily.user_id="",a.familyList=[]},bindFamily:function(){var e=this;o["a"].bindFamily(e.bindFormFamily).then((function(t){e.$message.success("绑定成功"),e.currentPage=1,e.getStudent(),e.bindFormFamily.user_id="",e.dialogFamily=!1,e.familyList=[]}))},handleFace:function(e,t){var a=this;a.dialogFace=!0,a.familyForm.id=t.id,a.familyForm.only_in=t.only_in,a.old_href=t.face_image},handleEdit:function(e,t){var a=this;a.dialogStudent=!0,t.sex=Number(t.sex),a.form=t,a.grade=t.grade_id,a.classValue=t.class},handleDel:function(e,t){var a=this;a.dialogDel=!0,a.id=t.id},toDel:function(){var e=this;o["a"].delStudent(e.id).then((function(t){e.$message.success("删除成功"),e.dialogDel=!1,e.getStudent(),e.currentPage=1}))},handleFaceLogs:function(e,t){var a=this;a.dialogFaceLogs=!0,a.log_id=t.id,o["a"].faceLogs(a.currentLogsPage,10,a.log_id).then((function(e){a.FaceLogsDate=e.data,a.logsTotalPage=e.total,a.currentLogsPage=1,a.FaceLogsDate.forEach((function(e){e.timestamp=g.formatTime(e.timestamp,"Y-M-D h:m:s")}))}))},handleChange:function(e){var t=this;t.change_href=URL.createObjectURL(e.raw),t.hasNewImage=!0},handleRemove:function(e){var t=this;t.change_href="",t.hasNewImage=!1},beforeAvatarUpload:function(e){var t=this;t.fileName=c()(e.name),t.suffix=e.name.substring(e.name.lastIndexOf(".")+1),t.imgData.key="tmp_".concat(t.fileName,".").concat(t.suffix)},changeFace:function(){var e=this;""===e.change_href?(e.familyForm.href=e.old_href,o["a"].studentFace(e.familyForm).then((function(t){e.$message.success("上传成功"),e.currentPage=1,e.getStudent(),e.familyForm.href="",e.dialogFace=!1}))):this.$refs.upload.submit()},handleAvatarSuccess:function(e,t){var a=this;t.url="".concat(a.qiniuaddr,"/").concat(e.key),a.familyForm.href=t.url,o["a"].studentFace(a.familyForm).then((function(e){a.$message.success("上传成功"),a.currentPage=1,a.getStudent(),a.$refs.upload.clearFiles(),a.familyForm.href="",a.change_href="",a.old_href="",a.imgData.key="",a.familyForm.user_id="",a.dialogFace=!1}))},handleExceed:function(e,t){var a=this;a.$message.error("上传图片不能超过1张!重新上传"),a.$refs.upload.clearFiles(),a.familyForm.href="",a.imgData.key="",a.familyForm.user_id=""},getQiniuToken:function(){var e=this;d.a.get("https://api.fengniaotuangou.cn/api/upload/token").then((function(t){e.imgData.token=t.data.uptoken}))},handleCurrentChange:function(e){var t=this;if(t.currentPage=e,t.student)switch(t.type){case 1:var a=t.student;o["a"].searchNumber(e,t.pageSize,a).then((function(e){t.tableData=e.data,t.totalPage=e.total,t.$message.success("搜索成功！")}));break;case 2:var n=t.student;o["a"].searchName(e,t.pageSize,n).then((function(e){t.tableData=e.data,t.totalPage=e.total,t.$message.success("搜索成功！")}))}else o["a"].students(e,t.pageSize).then((function(e){t.tableData=e.data,t.totalPage=e.total}))},handleLogsCurrentChange:function(e){var t=this;o["a"].faceLogs(t.currentLogsPage,10,t.log_id).then((function(e){t.FaceLogsDate=e.data,t.FaceLogsDate.forEach((function(e){e.timestamp=g.formatTime(e.timestamp,"Y-M-D h:m:s")}))}))},handleSizeChange:function(e){var t=this;if(t.pageSize=e,t.student)switch(t.type){case 1:var a=t.student;o["a"].searchNumber(1,e,a).then((function(e){t.tableData=e.data,t.totalPage=e.total,t.$message.success("搜索成功！")}));break;case 2:var n=t.student;o["a"].searchName(1,e,n).then((function(e){t.tableData=e.data,t.totalPage=e.total,t.$message.success("搜索成功！")}))}else o["a"].students(t.currentPage,e).then((function(e){t.tableData=e.data,t.totalPage=e.total}))}}},h=p,b=(a("5734"),a("2877")),v=Object(b["a"])(h,l,r,!1,null,"4dc6eeac",null),y=v.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogStudent=!0}}},[e._v("批量录入学生（上传EXCEL文件）")])],1)]),a("el-dialog",{attrs:{title:"添加学生信息",visible:e.dialogStudent,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogStudent=t}}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:e.gradeOnChange},model:{value:e.grade,callback:function(t){e.grade=t},expression:"grade"}},e._l(e.gradeList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("div",{staticClass:"btn"},[a("el-select",{attrs:{placeholder:"请选择班级"},model:{value:e.class_id,callback:function(t){e.class_id=t},expression:"class_id"}},e._l(e.classList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)]),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[e._v("点击下载文件示例")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:"https://er.fengniaotuangou.cn/import/students",data:e.classData,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1,"on-success":e.handleSuccess,headers:e.uploadHeader}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v(" 将文件拖到此处，或 "),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传EXCEL文件")])]),a("div",{staticClass:"upload-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.upload}},[e._v("导入数据")])],1)],1),a("el-table",{ref:"multipleTable",staticClass:"aip-table",attrs:{data:e.tableDate,border:"","header-cell-style":{background:"#f0f0f0"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"文件名"}}),a("el-table-column",{attrs:{prop:"remark",label:"上传时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.totalPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},x=[],C={name:"studentadd",data:function(){return{dialogStudent:!1,grade:"",gradeList:[],class_id:"",classList:[],fileList:[],classData:{class_id:""},tableDate:[],currentPage:1,totalPage:0}},computed:{uploadHeader:function(){return{token:localStorage.getItem("token")}}},mounted:function(){this.getGrade(),this.getClass()},methods:{getGrade:function(){var e=this;o["a"].grades(e.currentPage).then((function(t){e.gradeList=t.data}))},getClass:function(e){var t=this;o["a"].classes(1,1e3,e).then((function(e){t.classList=e.data}))},gradeOnChange:function(e){var t=this;t.grade=e,t.getClass(e)},handleDel:function(){},upload:function(){this.classData.class_id=this.class_id,this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handleSuccess:function(e,t){this.dialogStudent=!1,this.$message.success("导入成功"),this.fileList=[]},handleCurrentChange:function(){}}},F=C,k=(a("4c29"),Object(b["a"])(F,_,x,!1,null,"4ce2c02b",null)),S=k.exports,w={name:"student",components:{studentList:y,studentAdd:S},data:function(){return{activeName:"info"}},methods:{changeActive:function(){"info"===this.activeName&&o["a"].students(1).then((function(e){})),"more"===this.activeName&&console.log(111)}}},D=w,L=Object(b["a"])(D,n,i,!1,null,null,null);t["default"]=L.exports},e58c:function(e,t,a){"use strict";var n=a("fc6a"),i=a("a691"),l=a("50c4"),r=a("a640"),o=a("ae40"),s=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,d=r("lastIndexOf"),f=o("indexOf",{ACCESSORS:!0,1:0}),m=u||!d||!f;e.exports=m?function(e){if(u)return c.apply(this,arguments)||0;var t=n(this),a=l(t.length),r=a-1;for(arguments.length>1&&(r=s(r,i(arguments[1]))),r<0&&(r=a+r);r>=0;r--)if(r in t&&t[r]===e)return r||0;return-1}:c}}]);
//# sourceMappingURL=chunk-eec76b18.47d593a9.js.map