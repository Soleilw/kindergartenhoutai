import axios from '@/plugins/axios'
import url from './url.js'

var API = {};

// 学生管理
// 获取学生列表
API.students = function (page, limit, class_id) {
	return axios.get(url.Students, {
		page: page,
		limit: limit,
		class_id: class_id
	})
}

// 新增学生
API.student = function (data) {
	return axios.post(url.Student, data)
}

// 删除学生
API.delStudent = function (student_id) {
	return axios.del(url.DelStudent, {
		student_id: student_id
	})
}

// 搜索学生--学号
API.searchNumber = function (page, limit, number) {
	return axios.get(url.Students, {
		page: page,
		limit: limit,
		number: number,
	})
}
// 搜索学生--姓名
API.searchName = function (page, limit, name) {
	return axios.get(url.Students, {
		page: page,
		limit: limit,
		name: name,
	})
}

// 绑定家长列表
API.wxUser = function (page, limit) {
	return axios.get(url.WxUser, {
		page: page,
		limit: limit
	})
}

// 提交绑定家长
API.bindFamily = function (data) {
	return axios.post(url.BindFamily, data)
}

// 搜索家长
API.familySearch = function (page, limit, number) {
	return axios.get(url.FamilySearch, {
		page: page,
		limit: limit,
		number: number
	})
}

// 更换人脸
API.studentFace = function (data) {
	return axios.post(url.StudentFace, data)
}

// 更换人脸
API.studentEditFace = function (data) {
	return axios.put(url.StudentEditFace, data)
}

// 学生进出记录
API.faceLogs = function (page, limit, id) {
	return axios.get(url.StudentFaceLogs, {
		page: page,
		limit: limit,
		id: id
	})
}

// 新增年级
API.grade = function (data) {
	return axios.post(url.Grade, data)
}

// 获取年级
API.grades = function (page, limit) {
	return axios.get(url.Grades, {
		page: page,
		limit: limit
	})
}

// 删除年级
API.delGrade = function (grade_id) {
	return axios.del(url.DelGrade, {
		grade_id: grade_id
	})
}

// 新增班级
API._class = function (data) {
	return axios.post(url.Class, data)
}

// 获取班级
API.classes = function (page, limit, grade_id) {
	return axios.get(url.Classes, {
		page: page,
		limit: limit,
		grade_id: grade_id
	})
}

// 删除班级
API.delClass = function (class_id) {
	return axios.del(url.DelClass, {
		class_id: class_id
	})
}

// 设备管理
API.device = function (data) {
	return axios.post(url.Device, data)
}

// 获取设备
API.devices = function (page) {
	return axios.post(url.Devices, {
		page: page
	})
}

// 获取家长
API.family = function (page, limit) {
	return axios.get(url.Family, {
		page: page,
		limit: limit
	})
}

// 更改默认家长
API.masterFamily = function (data) {
	return axios.put(url.MasterFamily, data)
}

// 解除关系
API.delFamily = function (id) {
	return axios.del(url.DelFamily, {
		id: id
	})
}

// 公告管理
API.announcement = function (page) {
	return axios.get(url.Announcement, {
		page: page
	})
}

// 成绩管理
// 新增考试
API.exam = function (data) {
	return axios.post(url.Exam, data)
}

// 获取考试
API.exams = function (page, limit) {
	return axios.get(url.Exams, {
		page: page,
		limit: limit
	})
}

// 考试详情
API.examsDetail = function (page, limit, exam_id) {
	return axios.get(url.ExamsDetail, {
		page: page,
		limit: limit,
		exam_id: exam_id
	})
}

// 删除考试
API.delExam = function (id) {
	return axios.del(url.Exam, {
		id: id
	})
}

// 获取科目
API.subjects = function () {
	return axios.get(url.Subjects)
}

// 导入成绩
API.importsExam = function (exam_id, file) {
	return axios.post(url.ImportsExam, {
		exam_id: exam_id,
		file: file
	})
}

// 获取导入记录
API.imports = function (page, limit) {
	return axios.get(url.Imports, {
		page: page,
		limit: limit
	})
}

// 删除记录 
API.delImport = function (id) {
	return axios.del(url.DelImport, {
		id: id
	})
}

// 导出成绩单示例
API.example = function (subjects) {
	return axios.getExcel(url.Export, {
		subjects: subjects
	})
}

// 教职工管理
// 获取教师
API.teacher = function (page, limit, state, worker) {
	return axios.get(url.Teacher, {
		page: page,
		limit: limit,
		state: state,
		worker: worker
	})
}

// 删除教师
API.delTeacher = function (id) {
	return axios.del(url.DelTeacher, {
		id: id
	})
}

// 提交审核
API.audit = function (data) {
	return axios.post(url.Audit, data)
}

// 学校管理
// 获取学校
API.schools = function (page, limit, mode, id) {
	return axios.get(url.Schools, {
		page: page,
		limit: limit,
		mode: mode,
		id: id
	})
}

// 获取单个学校
API.oneSchool = function (id) {
	return axios.get(url.School, {
		id: id
	})
}

// 获取学校全部用户-学生
API.studentInfo = function (page, limit, school_id) {
	return axios.get(url.StudentInfo, {
		page: page,
		limit: limit,
		school_id: school_id
	})
}

// 获取学校全部用户
API.schoolUser = function (page, limit, school_id) {
	return axios.get(url.SchoolUser, {
		page: page,
		limit: limit,
		school_id: school_id
	})
}

// 访客
API.visitors = function (page, limit, school_id) {
	return axios.get(url.Visitors, {
		page: page,
		limit: limit,
		school_id: school_id
	})
}

// 老师
API.teacherUser = function (page, limit, school_id) {
	return axios.get(url.TeacherUser, {
		page: page,
		limit: limit,
		school_id: school_id
	})
}

// 学校管理--查看财务
API.orders = function (page, limit, school_id) {
	return axios.get(url.Orders, {
		page: page,
		limit: limit,
		school_id: school_id,
	})
}

// 购买服务管理--服务订单
API.server = function (page, limit, product_id) {
	return axios.get(url.Server, {
		page: page,
		limit: limit,
		product_id: product_id
	})
}

// 根据学校返回教师列表
API.schoolTeacher = function (page, limit, school_id) {
	return axios.get(url.Teacher, {
		page: page,
		limit: limit,
		school_id: school_id
	})
}

// 新增学校
API.school = function (data) {
	return axios.post(url.School, data)
}

// 删除学校
API.delSchool = function (school_id) {
	return axios.del(url.DelSchool, {
		school_id: school_id
	})
}

// 图文管理
// 获取轮播图
API.banners = function (page, limit) {
	return axios.get(url.Banners, {
		page: page,
		limit: limit
	})
}

// 新增轮播图
API.banner = function (data) {
	return axios.post(url.Banner, data)
}

// 新增资讯管理
API.message = function (data) {
	return axios.post(url.Message, data)
}

// 获取资讯类型
API.messages = function (page, limit) {
	return axios.get(url.Messages, {
		page: page,
		limit: limit
	})
}


// 新增资讯类型
API.messageType = function (data) {
	return axios.post(url.MessageType, data)
}

// 获取资讯类型
API.messageTypes = function (page, limit) {
	return axios.get(url.MessageTypes, {
		page: page,
		limit: limit
	})
}

// 删除资讯类型
API.delDocumentType = function (id) {
	return axios.del(url.DelDocumentType, {
		id: id
	})
}

// 获取文档
API.documents = function (page, limit) {
	return axios.get(url.Documents, {
		page: page,
		limit: limit
	})
}

// 删除文档
API.delDocument = function (id) {
	return axios.del(url.DelDocument, {
		id: id
	})
}

// 新增文档
API.document = function (data) {
	return axios.post(url.Document, data)
}

API.documentDel = function (id) {
	return axios.del(url.DocumentDel, {
		id: id
	})
}
API.delBanner = function (id) {
		return axios.del(url.DelBanner, {
			id: id
		})
	},

	// 购买服务管理
	API.buys = function (page, limit) {
		return axios.get(url.Buys, {
			page: page,
			limit: limit
		})
	}

API.buy = function (data) {
	return axios.post(url.Buy, data)
}


// 权限管理
// 获取角色
API.roles = function (page, limit) {
	return axios.get(url.Roles, {
		page: page,
		limit: limit
	})
}

// 增加角色
API.role = function (data) {
	return axios.post(url.Role, data)
}

// 删除角色
API.delRole = function (id) {
	return axios.del(url.DelRole, {
		id: id
	})
}

// 增加用户
API.user = function (data) {
	return axios.post(url.User, data)
}

// 获取用户
API.users = function (page, limit) {
	return axios.get(url.Users, {
		page: page,
		limit: limit
	})
}

// 删除角色
API.delUser = function (id) {
	return axios.del(url.DelUser, {
		id: id
	})
}

// 重置密码
API.resetPassword = function (data) {
	return axios.post(url.ResetPassword, data)
}

// 用户
// 获取商品列表
API.goods = function (school_id) {
	return axios.get(url.Buys, {
		school_id: school_id
	})
}

// 提交开通权限
API.setProduct = function (data) {
	return axios.post(url.SetProduct, data)
}

// 禁用权限
API.banProduct = function (data) {
	return axios.post(url.BanProduct, data)
}

// 查看禁用权限
API.banProducts = function (user_id) {
	return axios.get(url.BanProducts, {
		user_id: user_id
	})
}

// 搜索用户
API.userSearch = function (id) {
	return axios.get(url.UserSearch, {
		id: id
	})
}

// 用户列表
// 开通权限--学校
API.jurisdictionSchool = function (user_id, mode) {
	return axios.get(url.JurisdictionSchool, {
		user_id: user_id,
		mode: mode
	})
},
// 开通权限--商品
API.jurisdictionProducts = function (school_id) {
	return axios.get(url.JurisdictionProducts, {
		school_id: school_id
	})
},
// 开通权限--学生
API.jurisdictionStudent = function (user_id, school_id) {
	return axios.get(url.JurisdictionStudent, {
		user_id: user_id,
		school_id: school_id
	})
},
// 统计
// 学生数总统计
API.studentsTatal = function (type, id) {
	return axios.get(url.StudentsTatal, {
		type: type,
		id: id
	})
},
// 男女比例统计
API.studentGender = function (sex, type, school_id, grade_id) {
	return axios.get(url.StudentGender, {
		sex: sex,
		type: type,
		school_id: school_id,
		grade_id: grade_id
	})
},
// 班级审核人数统计
API.classCheckCount = function (id) {
	return axios.get(url.ClassCheckCount, {
		id: id
	})
},
// 统计详情
API.statistics = function (school_id, grade_id) {
	return axios.get(url.Statistics, {
		school_id: school_id,
		grade_id: grade_id
	})
}

// 更换家长人脸
API.updateFace = function (data) {
	return axios.post(url.UpdateFace, data)
}

// 签到列表
API.sign = function (page, limit, name, start, end) {
	return axios.get(url.Sign, {
		page: page,
		limit: limit,
		name: name,
		start: start,
		end: end
	})
}


API.signs = function (user_id) {
	return axios.get(url.Signs, {
		user_id: user_id
	})
}

export default API