const dynamicRouter = [{
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/user.vue'),
        meta: {
            title: '用户列表',
            icon: 'el-icon-document'
        }
    },
    {
        path: '/student',
        name: 'student',
        component: () => import('@/views/student/index.vue'),
        meta: {
            title: '学生管理',
            icon: 'el-icon-user-solid',
        },
        children: [{
                path: '/infomation',
                name: 'infomation',
                component: () => import('@/views/student/infomation.vue'),
                meta: {
                    title: '学生列表',
                }
            },
            {
                path: '/grade',
                name: 'grade',
                component: () => import('@/views/student/grade.vue'),
                meta: {
                    title: '年级管理'
                }
            },
            {
                path: '/announcement',
                name: 'announcement',
                component: () => import('@/views/student/announcement.vue'),
                meta: {
                    title: '公告管理'
                }
            },
            {
                path: '/achievement',
                name: 'achievement',
                component: () => import('@/views/student/achievement.vue'),
                meta: {
                    title: '成绩管理'
                }
            },
            {
                path: '/family',
                name: 'family',
                component: () => import('@/views/student/family.vue'),
                meta: {
                    title: '家长信息'
                }
            }
        ]
    },
    {
        path: '/teacher',
        name: 'teacher',
        component: () => import('@/views/teacher/teacher.vue'),
        meta: {
            title: '教职工管理',
            icon: 'el-icon-user'
        }
    },
    {
        path: '/attendanceSystem',
        name: 'attendanceSystem',
        component: () => import('@/views/attendance-system/attendance-system.vue'),
        meta: {
            title: '考勤系统',
            icon: 'el-icon-document-checked'
        }
    },
    {
        path: '/school',
        name: 'school',
        component: () => import('@/views/school/school.vue'),
        meta: {
            title: '学校管理',
            icon: 'el-icon-school'
        }
    },
    {
        path: '/picture',
        name: 'picture',
        component: () => import('@/views/picture/index.vue'),
        meta: {
            title: '图文管理',
            icon: 'el-icon-picture-outline',
        },
        children: [{
                path: '/banner',
                name: 'banner',
                component: () => import('@/views/picture/banner.vue'),
                meta: {
                    title: '轮播图管理'
                }
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('@/views/picture/message.vue'),
                meta: {
                    title: '资讯管理'
                }
            },
            {
                path: '/document',
                name: 'document',
                component: () => import('@/views/picture/document.vue'),
                meta: {
                    title: '文档管理'
                }
            }
        ]
    },
    {
        path: '/buy',
        name: 'buy',
        component: () => import('@/views/buy/buy.vue'),
        meta: {
            title: '购买服务管理',
            icon: 'el-icon-bank-card'
        }
    },
    {
        path: '/total',
        name: 'total',
        component: () => import('@/views/total/index.vue'),
        meta: {
            title: '统计',
            icon: 'el-icon-pie-chart'
        },
        children: [{
                path: '/studentsTotal',
                name: 'studentsTotal',
                component: () => import('@/views/total/total.vue'),
                meta: {
                    title: '学生总统计'
                }
            },
        ]
    },
    {
		path: '/switch',
		name: 'switch',
		component: () => import('@/views/switch/index'),
		meta: {
            title: '人脸开关管理',
            icon: 'el-icon-key',
        }
	},
    {
        path: '/permission',
        name: 'permission',
        component: () => import('@/views/permission/permission.vue'),
        meta: {
            title: '权限管理',
            icon: 'el-icon-setting'
        }
    }

]

export default dynamicRouter