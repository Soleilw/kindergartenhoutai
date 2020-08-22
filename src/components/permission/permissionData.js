// 学校所需权限
export const school = [
	// 学校管理
	// 学生列表
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '1',
		way_name: '增加学生',
		way_title: 'infomationAdd'
	}, // 新增学生
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '2',
		way_name: '删除学生',
		way_title: 'infomationDel'
	}, // 删除学生
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '3',
		way_name: '编辑学生',
		way_title: 'infomationEdit'
	}, // 编辑学生
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '4',
		way_name: '查询学生列表',
		way_title: 'infomationGet'
	}, // 查询学生列表
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '5',
		way_name: '查看进出记录',
		way_title: 'infomationFaceLogs'
	}, // 查看进出记录
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '6',
		way_name: '更换人脸',
		way_title: 'infomationChangeFace'
	}, // 更换人脸
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '7',
		way_name: '绑定家长',
		way_title: 'infomationBindFamily'
	}, // 绑定家长
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '8',
		way_name: '批量录入学生',
		way_title: 'infomationMore'
	}, // 批量录入学生

	// 班级管理
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '2',
		two_name: '班级管理',
		two_title: 'grade',
		way_id: '9',
		way_name: '增加年级',
		way_title: 'gradeAdd'
	}, // 新增年级
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '2',
		two_name: '班级管理',
		two_title: 'grade',
		way_id: '10',
		way_name: '删除年级',
		way_title: 'gradeDel'
	}, // 删除年级
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '2',
		two_name: '班级管理',
		two_title: 'grade',
		way_id: '11',
		way_name: '查询年级列表',
		way_title: 'gradeGet'
	}, // 查询年级列表
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '2',
		two_name: '班级管理',
		two_title: 'grade',
		way_id: '12',
		way_name: '增加班级',
		way_title: 'classAdd'
	}, // 新增班级
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '2',
		two_name: '班级管理',
		two_title: 'grade',
		way_id: '13',
		way_name: '删除班级',
		way_title: 'classDel'
	}, // 删除班级
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '2',
		two_name: '班级管理',
		two_title: 'grade',
		way_id: '14',
		way_name: '查询班级列表',
		way_title: 'classGet'
	}, // 查询班级列表

	// 家长信息
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '3',
		two_name: '家长信息',
		two_title: 'family',
		way_id: '15',
		way_name: '查看家长列表',
		way_title: 'familyGet'
	}, // 查看家长列表

	// 教职工管理
	{
		one_router: '2',
		one_name: '教职工管理',
		one_title: 'teacher',
		way_id: '16',
		way_name: '删除教职工',
		way_title: 'teacherDel'
	}, // 删除教职工
	{
		one_router: '2',
		one_name: '教职工管理',
		one_title: 'teacher',
		way_id: '17',
		way_name: '查询教职工列表',
		way_title: 'teacherGet'
	}, // 查询教职工列表
	{
		one_router: '2',
		one_name: '教职工管理',
		one_title: 'teacher',
		way_id: '18',
		way_name: '审核教职工',
		way_title: 'teacherAudit'
	}, // 审核教职工

	// 权限管理
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '19',
		way_name: '新增角色',
		way_title: 'roleAdd'
	}, // 新增角色
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '20',
		way_name: '删除角色',
		way_title: 'roleDel'
	}, // 删除角色
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '21',
		way_name: '编辑角色权限',
		way_title: 'roleEdit'
	}, // 编辑角色权限
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '22',
		way_name: '查询角色列表',
		way_title: 'roleGet'
	}, // 查询角色列表
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '23',
		way_name: '新增用户管理',
		way_title: 'manageAdd'
	}, // 新增用户管理
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '24',
		way_name: '删除用户管理',
		way_title: 'manageDel'
	}, // 删除用户管理
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '25',
		way_name: '编辑用户管理',
		way_title: 'manageEdit'
	}, // 编辑用户管理
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '26',
		way_name: '查询用户管理',
		way_title: 'manageGet'
	}, // 查询用户管理
	{
		one_router: '3',
		one_name: '权限管理',
		one_title: 'permission',
		way_id: '27',
		way_name: '重置密码',
		way_title: 'manageResetPwd'
	}, // 重置密码

	// 用户管理
]

// admin权限
export const admin = [
	// 学校管理
	// 学生列表
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '1',
		way_name: '增加学生',
		way_title: 'infomationAdd'
	},

	// 班级管理
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '1',
		way_name: '增加学生',
		way_title: 'infomationAdd'
	},

	// 家长信息
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '1',
		way_name: '增加学生',
		way_title: 'infomationAdd'
	},

	// 教职工管理
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '1',
		way_name: '增加学生',
		way_title: 'infomationAdd'
	},

	// 权限管理
	// 角色管理
	{
		one_router: '1',
		one_name: '学生管理',
		one_title: 'student',
		two_router: '1',
		two_name: '学生列表',
		two_title: 'infomation',
		way_id: '1',
		way_name: '增加学生',
		way_title: 'infomationAdd'
	},

	// 用户管理
]

// "user", // 用户
// "userGet", // 获取用户权限
// "grantPermission", // 开通权限
// "forbidPermission", // 禁止使用权限

// "announcement", // 公告管理
// "achievement", // 成绩管理

// "school", // 学校管理
// "schoolGet",
// "schoolAdd",
// "schoolUser",
// "schoolFinance",
// "schoolDel",
// "schoolEdit",

// "picture", // 图文管理
// "banner", // 轮播图
// "bannerAdd", 
// "bannerGet",
// "bannerDel",
// "message", // 资讯管理
// "messageAdd",
// "messageGet",
// "messageDel",
// "messageEdit",
// "typeAdd",
// "typeGet",
// "typeDel",
// "document", // 文档管理
// "documentAdd",
// "documentGet",
// "documentDel",
// "documentEdit",

// "buy", // 购买服务管理
// "buyGet",
// "buyAdd",
// "buyEdit",




"student", // 学生管理
"infomation", // 学生列表
"infomationGet",
"infomationAdd",
"infomationMore",
"infomationEdit",
"infomationDel",
'infomationChangeFace',
'infomationBindFamily',
'infomationFaceLogs',


"grade", // 年级管理
"gradeGet",
"gradeAdd",
"gradeDel",
"classGet",
"classAdd",
"studentDetail",
"classDel",





"family", // 家长信息
"familyGet",

"teacher", // 教职工管理
"teacherGet",
// "teacherDetail",
"teacherDel",
"teacherAudit",

"permission", // 角色管理
"roleGet",
"roleAdd",
"roleEdit",
"roleDel",
"manageGet",
"manageAdd",
"manageEdit",
"manageDel",
'manageResetPwd' // 重置密码


var getBasicInfo = false
function RegexpMatchIdCard(str, getBasicInfo)
{
    //校验身份证位数和出生日期部分
    var pattern = "/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/";
    preg_match(pattern, str, match);
    result = match ? true : false;
    if (!result) {
        return false;
    }

    //校验前两位是否是所有省份代码
    province_code = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45', '46', '50', '51', '52', '53', '54', '61', '62', '63', '64', '65', '71', '81', '82', '91'];
    if (!in_array(substr(str, 0, 2), province_code)) {
        return false;
    }

    //校验身份证最后一位
    ahead17_char = substr(str, 0, 17);
    last_char = substr($str, -1);
    factor = array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); // 前17位的权重
    c = array(1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2); //模11后的对应校验码
    t_res = 0;
    for ($i = 0; $i < 17; $i++) {
        $t_res += intval($ahead17_char[$i]) * $factor[$i];
    }
    $calc_last_char = $c [$t_res % 11];
    if ($last_char != $calc_last_char) {
        return false;
    }

    if (!$getBasicInfo) {
        return $result;
    }

    //从身份证号码中提取出生日期和性别
    $birth_year = substr($str, 6, 4);
    $birth_month = substr($str, 10, 2);
    $birth_day = substr($str, 12, 2);
    if (!checkdate($birth_month, $birth_day, $birth_year)) {
        return false;
    }
    $brithday = $birth_year . "-" . $birth_month . "-" . $birth_day;
    $gender_char = substr($str, -2, 1);
    if ($gender_char % 2 == 0) {
        $gender = 2; //女
    } else {
        $gender = 1; //男
    }

    return [
        'birthday' => $brithday,
        'age' => getAge(strtotime($brithday)),
        'gender' => $gender,
    ];
}

/**
 * 根据出生日期获取年龄
 * @param string $birthday 出生日期时间戳
 * @return false|string
 */
function getAge($birthday)
{
    //格式化出生时间年月日
    $byear = date('Y', $birthday);
    $bmonth = date('m', $birthday);
    $bday = date('d', $birthday);

    //格式化当前时间年月日
    $tyear = date('Y');
    $tmonth = date('m');
    $tday = dat
}