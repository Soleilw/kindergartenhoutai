<template>
  <div>
    <div class="btn">
      <el-button type="primary" @click="addSchool">添加学校</el-button>
    </div>

    <el-dialog title="添加学校" :visible.sync="dialogSchool">
      <div class="box">
        <el-form :model="form" label-width="100px">
          <el-form-item label="学校名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="学校地址">
            <el-input type="textarea" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="人脸库(进)">
            <el-input v-model="form.in_group"></el-input>
          </el-form-item>
          <el-form-item label="人脸库(出)">
            <el-input v-model="form.out_group"></el-input>
          </el-form-item>
          <el-form-item label="收费模式">
            <el-input v-model="form.mode"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.user.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.user.password"></el-input>
          </el-form-item>
          <div v-for="(item,index) in form.grades" :key="index">
            <el-form-item label="填写年级">
              <el-input v-model="item.title"></el-input>
              <!-- <el-select v-model="item.title" placeholder="请选择">
								<el-option v-for="selectItem in grade" :key="selectItem.value" :label="selectItem.label" :value="selectItem.value">
								</el-option>
              </el-select>-->
            </el-form-item>
            <el-form-item label="班级" v-for="(classItem, index) in item.classes" :key="index">
              <el-input v-model="classItem.title"></el-input>
              <!-- <el-transfer v-model="item.classes" :data="classList" :titles="['班级', '选中班级']" :button-texts="['取消', '确定']"></el-transfer> -->
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click="addClass(item.classes)">添加班级</el-button>
              <el-button type="primary" size="mini" @click="delClass(item.classes)">删除班级</el-button>
            </el-form-item>
          </div>
          <el-form-item label="操作">
            <el-button type="success" @click="addGrade">添加年级</el-button>
            <el-button type="success" @click="delGrade">删除年级</el-button>
          </el-form-item>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" @click="newSchool">提交</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>

    <el-table :data="tableDate">
      <el-table-column prop="id" label="学校ID" align="center"></el-table-column>
      <el-table-column prop="name" label="学校名称" align="center"></el-table-column>
      <el-table-column prop="address" label="学校地址" align="center"></el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="400px">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleShowUser(scope.$index, scope.row)"
          >查看用户</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleShowFinancial(scope.$index, scope.row)"
          >查看财务</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除学校</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="查看学校所有" :visible.sync="dialogUser" width="80%">
      <div class="box">
        <div class="btn">
          <el-select v-model="user" @change="handleUser" placeholder="请选择">
            <el-option
              v-for="item in userList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>

        <div v-if="user === '用户'">
          <el-table :data="userData">
            <el-table-column prop="id" label="用户ID" align="center"></el-table-column>
            <el-table-column prop="name" label="头像" align="center"></el-table-column>
            <el-table-column prop="address" label="姓名" align="center"></el-table-column>
            <el-table-column prop="created_at" label="性别" align="center"></el-table-column>
            <el-table-column prop="id" label="手机号码" align="center"></el-table-column>
            <el-table-column prop="name" label="身份证" align="center"></el-table-column>
            <el-table-column prop="address" label="是否老师" align="center"></el-table-column>
            <el-table-column prop="created_at" label="是否班主任" align="center"></el-table-column>
            <el-table-column prop="address" label="是否教职工" align="center"></el-table-column>
          </el-table>
        </div>
        <div v-if="user === '学生'">
          <el-table :data="userData">
            <el-table-column prop="id" label="学号" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" align="center"></el-table-column>
            <el-table-column prop="address" label="性别" align="center"></el-table-column>
            <el-table-column prop="created_at" label="年龄" align="center"></el-table-column>
            <el-table-column prop="id" label="年级" align="center"></el-table-column>
            <el-table-column prop="name" label="班级" align="center"></el-table-column>
            <el-table-column prop="address" label="生活头像" align="center"></el-table-column>
            <el-table-column prop="created_at" label="人脸头像" align="center"></el-table-column>
            <el-table-column prop="address" label="默认家长ID" align="center"></el-table-column>
            <el-table-column prop="address" label="默认家长姓名" align="center"></el-table-column>
            <el-table-column prop="address" label="默认家长手机" align="center"></el-table-column>
          </el-table>
        </div>
        <div v-if="user === '老师'">
          <el-table :data="userData">
            <el-table-column prop="id" label="用户ID" align="center"></el-table-column>
            <el-table-column prop="name" label="头像" align="center"></el-table-column>
            <el-table-column prop="address" label="昵称" align="center"></el-table-column>
            <el-table-column prop="created_at" label="姓名" align="center"></el-table-column>
            <el-table-column prop="created_at" label="性别" align="center"></el-table-column>
            <el-table-column prop="id" label="手机号码" align="center"></el-table-column>
            <el-table-column prop="name" label="身份证" align="center"></el-table-column>
            <el-table-column prop="address" label="工号" align="center"></el-table-column>
            <el-table-column prop="created_at" label="年级" align="center"></el-table-column>
            <el-table-column prop="address" label="班级" align="center"></el-table-column>
            <el-table-column prop="address" label="学科" align="center"></el-table-column>
            <el-table-column prop="address" label="人脸头像" align="center"></el-table-column>
            <el-table-column prop="address" label="是否是班主任" align="center"></el-table-column>
            <el-table-column prop="address" label="创建时间" align="center"></el-table-column>
          </el-table>
        </div>
        <div v-if="user === '访客'">
          <el-table :data="userData">
            <el-table-column prop="id" label="访客ID" align="center"></el-table-column>
            <el-table-column prop="name" label="用户ID" align="center"></el-table-column>
            <el-table-column prop="address" label="姓名" align="center"></el-table-column>
            <el-table-column prop="created_at" label="手机号" align="center"></el-table-column>
            <el-table-column prop="id" label="拜访人" align="center"></el-table-column>
            <el-table-column prop="name" label="拜访理由" align="center"></el-table-column>
            <el-table-column prop="address" label="访客人脸" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="totalPage"
          ></el-pagination>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="查看财务" :visible.sync="dialogFinancial" width="80%">
      <div class="box">
        <div class="btn">
          <el-select v-model="financial" @change="handleFinancial" placeholder="请选择">
            <el-option
              v-for="item in financialList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>

        <div v-if="financial === '订单列表'">
          <el-table :data="financialData">
            <el-table-column prop="id" label="学校ID" align="center"></el-table-column>
            <el-table-column prop="name" label="订单ID" align="center"></el-table-column>
            <el-table-column prop="address" label="用户ID" align="center"></el-table-column>
            <el-table-column prop="created_at" label="用户名" align="center"></el-table-column>
            <el-table-column prop="id" label="商品名称" align="center"></el-table-column>
            <el-table-column prop="name" label="商品价格" align="center"></el-table-column>
            <el-table-column prop="address" label="商品时长" align="center"></el-table-column>
            <el-table-column prop="created_at" label="订单状态" align="center"></el-table-column>
            <el-table-column prop="address" label="创建时间" align="center"></el-table-column>
          </el-table>
        </div>
        <div v-if="financial === '财务统计'">
          <el-table :data="financialData">
            <el-table-column prop="id" label="周总额" align="center"></el-table-column>
            <el-table-column prop="name" label="月总额" align="center"></el-table-column>
            <el-table-column prop="address" label="季度总额" align="center"></el-table-column>
            <el-table-column prop="created_at" label="上一季度总额" align="center"></el-table-column>
            <el-table-column prop="id" label="年总额" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="totalPage"
          ></el-pagination>
        </div>
      </div>
    </el-dialog>

    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="totalPage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import API from "@/api/school.js";

export default {
  name: "school",
  data() {
    return {
      // 添加学校
      dialogSchool: false,
      form: {
        name: "",
        address: "",
        in_group: "",
        out_group: "",
        mode: 1,
        user: {
          username: "",
          password: ""
        },
        grades: []
      },
      grade: [
        {
          value: "一年级",
          label: "一年级"
        },
        {
          value: "二年级",
          label: "二年级"
        },
        {
          value: "三年级",
          label: "三年级"
        },
        {
          value: "四年级",
          label: "四年级"
        },
        {
          value: "五年级",
          label: "五年级"
        },
        {
          value: "六年级",
          label: "六年级"
        },
        {
          value: "初一",
          label: "初一"
        },
        {
          value: "初二",
          label: "初二"
        },
        {
          value: "初三",
          label: "初三"
        }
      ],
      classList: [],

      // 操作
      // 查看用户
      dialogUser: false,
      user: "访客",
      userList: [
        {
          value: 1,
          label: "用户"
        },
        {
          value: 2,
          label: "学生"
        },
        {
          value: 3,
          label: "老师"
        },
        {
          value: 4,
          label: "访客"
        }
      ],
      userData: [],
      // 查看财务
      dialogFinancial: false,
      financial: "订单列表",
      financialList: [
        {
          value: 1,
          label: "订单列表"
        },
        {
          value: 2,
          label: "财务统计"
        }
      ],
      financialData: [],

      tableDate: [],

      // 分页
      currentPage: 1,
      totalPage: 0
    };
  },
  mounted() {
    // this.generateData();
    this.getSchool();
  },
  methods: {
    // 获取学校列表
    getSchool() {
      var self = this;
      API.schools(self.currentPage).then(res => {
        self.tableDate = res.data;
        self.totalPage = res.total;
      });
    },
    newSchool() {
      var self = this;
      // self.form.grades.forEach(item => {
      // 	for (var i = 0; i < item.classes.length; i++) {
      // 		item.classes[i] = {
      // 			title: item.classes[i]
      // 		}
      // 	}
      // })
      API.school(self.form).then(res => {
        self.dialogSchool = false;
        self.getSchool();
        self.form = {
          name: "",
          address: "",
          in_group: "",
          out_group: "",
          mode: 1,
          user: {
            username: "",
            password: ""
          },
          grades: []
        };
        self.$message.success("提交成功");
        self.currentPage = 1;
      });
    },
    // 操作
    handleEdit(index, row) {
      var self = this;
      self.dialogSchool = true;
      self.form = {
        name: row.name,
        address: row.address,
        in_group: row.in_group,
        out_group: row.out_group,
        mode: row.mode,
        user: {
          username: "",
          password: ""
        },
        grades: []
      };
    },
    handleShowUser(index, row) {
      var self = this;
      self.dialogUser = true;
    },
    handleUser(value) {
      var self = this;
      if (value === 1) {
        self.user = "用户";
      }
      if (value === 2) {
        self.user = "学生";
      }
      if (value === 3) {
        self.user = "老师";
      }
      if (value === 4) {
        self.user = "访客";
      }
    },
    handleShowFinancial(index, row) {
      var self = this;
      self.dialogFinancial = true;
    },
    handleFinancial(value) {
      var self = this;
      if (value === 1) {
        self.financial = "订单列表";
      }
      if (value === 2) {
        self.financial = "财务统计";
      }
    },
    handleDelete(index, row) {},

    // 添加学校
    addSchool() {
      var self = this;
      self.dialogSchool = true;
      self.form = {
        name: "ceshi",
        address: "ceshi",
        in_group: "ceshi",
        out_group: "ceshi",
        mode: 1,
        user: {
          username: "ceshi",
          password: "ceshi"
        },
        grades: []
      };
    },
    // 年级操作
    addGrade() {
      var self = this;
      self.form.grades.push({
        classes: []
      });
    },
    delGrade() {
      self.form.grades.pop({});
    },
    addClass(val) {
      var self = this;
      val.push({
        title: ""
      });
      console.log(val);
    },
    delClass(val) {
      var self = this;
      val.pop({});
    },
    // generateData(_) {
    // 	var self = this;
    // 	var classData = ['一班', '二班', '三班', '四班', '五班', '六班', '七班', '八班', '九班', '十班']
    // 	for (let i = 0; i < classData.length; i++) {
    // 		self.classList.push({
    // 			key: classData[i],
    // 			label: classData[i]
    // 		});
    // 	}
    // 	return self.classList
    // },

    // 分页
    handleCurrentChange(val) {
      var self = this;
      self.getSchool();
    }
  }
};
</script>

<style>
</style>
