const BaseURL = "https://er.fengniaotuangou.cn"
// const BaseURL = "http://192.168.0.104"


const url = {
	// 登录
	'Login': BaseURL + '/login',	// 登录
	'Logout': BaseURL + '/logout',	// 退出
	'ResetPassword': BaseURL + '/reset/password', // 重置密码
	'Permissions': BaseURL + '/permissions', // 重置密码
	
	// 学校管理
	'School': BaseURL + '/school', 
	'Schools': BaseURL + '/api/schools',
	'StudentInfo': BaseURL + '/student/info',  // 查看用户--学生
	'SchoolUser': BaseURL + '/schoolUser/infos',  // 查看用户--用户
	'Visitors': BaseURL + '/visitors',  // 查看用户--访客
	'TeacherUser':BaseURL  + '/teacher/infos',  // 查看用户--老师
	'Orders':BaseURL  + '/orders',  // 查看财务
	'DelSchool':BaseURL  + '/del/school',  // 删除学校
	'EditSchool':BaseURL  + '/edit/school',  // 学校设置时间
	
	
	// 轮播图管理
	'Banner': BaseURL + '/banner', // 上传轮播图
	'Banners': BaseURL + '/api/banners', // 获取轮播图
	'Document': BaseURL + '/help/doc', // 文档管理
	'Documents': BaseURL + '/help/docs', // 获取文档
	'DelDocument': BaseURL + '/help/doc', // 获取文档
	'Message': BaseURL+ '/document', // 新增资讯管理
	'Messages': BaseURL + '/documents', // 获取资讯管理
	'MessageType': BaseURL + '/document/type', // 新增资讯类型
	'MessageTypes': BaseURL + '/document/types', // 获取资讯类型
	"DocumentDel": 	BaseURL + '/document',  // 删除文档
	"DelBanner": BaseURL + '/banner', // 删除轮播
	"DelDocumentType": BaseURL + '/document/types', // 资讯类型--删除
	
	// 学生管理
	'Students':BaseURL + '/students', // 学生获取列表
	'Search': BaseURL + '/student', // 搜索学生
	'Student': BaseURL + '/student', // 新增学生
	'DelStudent': BaseURL + '/student', // 新增学生
	'Grade': BaseURL + '/grade', // 新增年级
    'Grades': BaseURL + '/grades', // 获取年级
	'DelGrade': BaseURL + '/grade', // 删除年级
	'Class': BaseURL + '/class', // 新增班级
    'Classes': BaseURL + '/classes', // 获取班级
	'DelClass': BaseURL + '/class', // 删除年级
    'Announcement': BaseURL + '/announcement', // 公告管理
    'Device': BaseURL + '/device', // 设备管理
    'Devices': BaseURL + '/devices', // 设备管理
    'Family':BaseURL + '/parents', // 家长信息
	'MasterFamily':BaseURL + '/master/parents', // 更改默认家长
	'DelFamily':BaseURL + '/parent', // 解除学生与家长的关系
	'WxUser': BaseURL + '/wx/users', // 获取家长微信昵称
	'BindFamily': BaseURL + '/pass/student', // 绑定家长
	'StudentFace': BaseURL + '/student/face', // 更换人脸
	'StudentEditFace': BaseURL + '/student/editFace', // 手动更换人脸
	'FamilySearch': BaseURL + '/parents', // 家长列表搜索学生
	'StudentFaceLogs': BaseURL + '/student/face/logs', // 学生进出记录
	'UpdateFace': BaseURL + '/update/face', // 更换家长人脸

	'Exam': BaseURL + '/exam', // 新增考试场次, 删除考试
	'Exams': BaseURL + '/exams', // 获取考试场次
	'Subjects': BaseURL + '/subjects', // 获取科目
	'Imports': BaseURL + '/imports', // 获取导入记录
	'ImportsExam': BaseURL + '/import/exam', // 导入成绩
	'DelImport': BaseURL + '/import', // 删除记录
	'ExamsDetail': BaseURL + '/exams/detail', // 考试详情
	'Export': BaseURL + '/export', // 导出成绩单示例
	
	// 教师管理
	'Teacher': BaseURL + '/user/infos', // 教师管理
	'Audit': BaseURL + '/check/user/info', // 职工
	'DelTeacher': BaseURL + '/user/info', // 删除年级

	// 购买服务管理
	'Buy': BaseURL + '/product', // 新增购买
	'Buys': BaseURL + '/products', // 获取购买
	'Server':BaseURL  + '/orders',  // 服务订单

	// 财务管理
	'Order': BaseURL + '/order', // 订单管理
	'Statistical': BaseURL + '/statistical', // 财务统计
	
	
	// 权限管理
	'Role': BaseURL + '/role', // 新增角色
	'Roles': BaseURL + '/roles' ,// 获取角色列表
	'DelRole': BaseURL + '/role', // 删除角色
	'User': BaseURL + '/user', // 新增用户
	'Users': BaseURL + '/users', // 获取用户列表
	'DelUser': BaseURL + '/user', // 删除角色
	
	// 用户管理
	'SchoolProduct': BaseURL + '/school/product', // 获取购买
	'SetProduct': BaseURL + '/set/product', // 提交开通权限
	'BanProduct': BaseURL + '/forbidden/product', // 禁用权限
	'BanProducts': BaseURL + '/forbidden/products', // 查看禁用权限
	'UserSearch': BaseURL + '/wx/users', // 搜索用户,
	'JurisdictionSchool': BaseURL + '/api/schools', // 开通权限--学校
	'JurisdictionProducts': BaseURL + '/school/product', // 开通权限--商品
	'JurisdictionStudent': BaseURL + '/school/user/student', // 开通权限--学生

	// 统计
	'StudentsTatal': BaseURL + '/student/count', // 学生数总统计
	'StudentGender': BaseURL + '/student/gender', // 男女比例统计
	'ClassCheckCount': BaseURL + '/class/check/count', // 班级审核人数统计
	'Statistics': BaseURL + '/statistics', // 统计详情
	
	// 签到
	'Sign': BaseURL + '/sign/statistics', // 获取签到列表
	'Signs': BaseURL + '/signs', // 获取签到列表
}

module.exports = url;




