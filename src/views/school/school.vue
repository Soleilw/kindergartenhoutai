<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <el-button type="primary" @click="addSchool">添加学校</el-button>
      </div>
    </div>

    <el-dialog title="添加学校" :visible.sync="dialogSchool" :close-on-click-modal="false" @close="close">
      <div class="box">
        <el-form :model="form" label-width="100px">
          <el-form-item label="学校名称">
            <el-input v-model="form.name" placeholder="请输入学校名称"></el-input>
          </el-form-item>
          <el-form-item label="学校地址">
            <el-input type="textarea" v-model="form.address" placeholder="请输入学校地址"></el-input>
          </el-form-item>
          <el-form-item label="上下班时间">
            <el-time-select placeholder="请选择上班时间" v-model="form.up_time" is-range :picker-options="{
                start: '06:00',
                step: '00:05',
                end: '21:30',
              }">
            </el-time-select>
            <el-time-select placeholder="请选择下班时间" v-model="form.below_time" is-range :picker-options="{
                start: '06:00',
                step: '00:05',
                end: '21:30',
                minTime: form.up_time,
              }">
            </el-time-select>
          </el-form-item>
          <el-form-item label="人脸库(进)">
            <el-input v-model="form.in_group" placeholder="请输入人脸库(进)"></el-input>
          </el-form-item>
          <el-form-item label="人脸库(出)">
            <el-input v-model="form.out_group" placeholder="请输入人脸库(出)"></el-input>
          </el-form-item>
          <el-form-item label="收费模式">
            <el-input v-model="form.mode"></el-input>
          </el-form-item>
          <el-form-item label="家长进校模式">
            <el-input v-model="form.allow_parent_in"></el-input>
          </el-form-item>
          <div v-for="(item, index) in form.grades" :key="index">
            <el-form-item label="年级选择">
              <el-select v-model="item.title" placeholder="请选择年级" @change="gradeChange">
                <el-option v-for="selectItem in grade" :key="selectItem.value" :label="selectItem.label"
                  :value="selectItem.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="班级">
              <el-transfer v-model="item.classes" :data="classList" :titles="['班级', '选中班级']"
                :button-texts="['取消', '确定']"></el-transfer>
            </el-form-item>
          </div>
          <el-form-item label="操作">
            <el-button type="primary" @click="addGrade">添加年级</el-button>
            <el-button type="primary" @click="delGrade">删除年级</el-button>
          </el-form-item>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" @click="newSchool">提交</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>

    <el-table :data="tableDate" border :header-cell-style="{ background: '#f0f0f0' }" max-height="620">
      <el-table-column prop="id" label="学校ID"></el-table-column>
      <el-table-column prop="name" label="学校名称"></el-table-column>
      <el-table-column prop="address" label="学校地址"></el-table-column>
      <el-table-column prop="created_at" label="创建时间"></el-table-column>
      <el-table-column label="操作" width="400px">
        <template slot-scope="scope">
          <el-dropdown>
            <el-button type="primary">
              操作
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button size="mini" type="primary" @click="handleShowUser(scope.$index, scope.row)">查看用户</el-button>
              </el-dropdown-item>
              <!-- <el-dropdown-item>
                <el-button size="mini" type="primary" @click="handleShowFinancial(scope.$index, scope.row)">查看财务
                </el-button>
              </el-dropdown-item> -->
              <el-dropdown-item>
                <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除学校</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="查看学校所有" :visible.sync="dialogUser" width="80%" @close="closeShowUser">
      <div class="box">
        <div class="btn">
          <el-select v-model="user" @change="handleUser" placeholder="请选择">
            <el-option v-for="item in userList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>

        <template v-if="user == '用户'">
          <el-table :data="userData" border :header-cell-style="{ background: '#f0f0f0' }" max-height="620">
            <el-table-column prop="id" label="用户ID"></el-table-column>
            <el-table-column prop="href" label="头像">
              <template slot-scope="scope">
                <img :src="scope.row.href" alt style="max-width: 180px; max-height: 80px" />
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="sex" label="性别">
              <template slot-scope="scope">
                <span v-text="scope.row.sex == 1 ? '男' : '女'"></span>
              </template>
            </el-table-column>
            <el-table-column prop="phone" label="手机号码"></el-table-column>
            <el-table-column prop="worker" label="是否老师">
              <template slot-scope="scope">
                <span v-if="scope.row.worker == 0">否</span>
                <span v-else-if="scope.row.worker == 1">否</span>
                <span v-else-if="scope.row.worker == 2">是</span>
                <span v-else-if="scope.row.worker == 3">否</span>
              </template>
            </el-table-column>
            <el-table-column prop="worker" label="是否班主任">
              <template slot-scope="scope">
                <span v-if="scope.row.worker == 0">否</span>
                <span v-else-if="scope.row.worker == 1">否</span>
                <span v-else-if="scope.row.worker == 2">是</span>
                <span v-else-if="scope.row.worker == 3">否</span>
              </template>
            </el-table-column>
            <el-table-column prop="worker" label="是否教职工">
              <template slot-scope="scope">
                <span v-if="scope.row.worker == 0">否</span>
                <span v-else-if="scope.row.worker == 1">否</span>
                <span v-else-if="scope.row.worker == 2">是</span>
                <span v-else-if="scope.row.worker == 3">否</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination @current-change="userChange" :current-page.sync="userCurrent"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="userSize" layout="sizes, prev, pager, next, jumper"
              :total="userTotal" @size-change="userSizeChange"></el-pagination>
          </div>
        </template>
        <template v-if="user == '学生'">
          <el-table :data="studentData" border :header-cell-style="{ background: '#f0f0f0' }" max-height="620">
            <el-table-column prop="id" label="学号"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="sex" label="性别">
              <template slot-scope="scope">
                <span v-text="scope.row.sex == 1 ? '男' : '女'"></span>
              </template>
            </el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="grades.title" label="年级"></el-table-column>
            <el-table-column prop="class.title" label="班级"></el-table-column>
            <el-table-column prop="face_id" label="生活头像">
              <template slot-scope="scope">
                <img :src="scope.row.face_id" alt style="max-width: 180px; max-height: 80px" />
              </template>
            </el-table-column>
            <el-table-column prop="face_image" label="人脸头像">
              <template slot-scope="scope">
                <img :src="scope.row.face_image" alt style="max-width: 180px; max-height: 80px" />
              </template>
            </el-table-column>
            <el-table-column prop="userInfo.user_id" label="默认家长ID"></el-table-column>
            <el-table-column prop="userInfo.name" label="默认家长姓名"></el-table-column>
            <el-table-column prop="userInfo.phone" label="默认家长手机"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination @current-change="studentChange" :current-page.sync="studentCurrent"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="studentSize" layout="sizes, prev, pager, next, jumper"
              :total="studentTotal" @size-change="studentSizeChange"></el-pagination>
          </div>
        </template>
        <template v-if="user == '教师'">
          <el-table :data="teacherData" border :header-cell-style="{ background: '#f0f0f0' }" max-height="620">
            <el-table-column prop="id" label="用户ID"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="wxUser.nickname" label="昵称"></el-table-column>
            <el-table-column prop="sex" label="性别">
              <template slot-scope="scope">
                <span v-text="scope.row.sex == 1 ? '男' : '女'"></span>
              </template>
            </el-table-column>
            <el-table-column prop="phone" label="手机号码"></el-table-column>

            <el-table-column prop="grades.title" label="年级">
              <template slot-scope="scope">
                <span v-text="
                    scope.row.grades.title == null
                      ? '无'
                      : scope.row.grades.title
                  "></span>
              </template>
            </el-table-column>
            <el-table-column prop="class.title" label="班级">
              <template slot-scope="scope">
                <span v-text="
                    scope.row.class.title == null ? '无' : scope.row.class.title
                  "></span>
              </template>
            </el-table-column>
            <el-table-column prop="href" label="人脸头像">
              <template slot-scope="scope">
                <img :src="scope.row.href" alt style="max-width: 180px; max-height: 80px" />
              </template>
            </el-table-column>
            <el-table-column prop="worker" label="是否是班主任">
              <template slot-scope="scope">
                <span v-if="scope.row.worker == 0">否</span>
                <span v-else-if="scope.row.worker == 1">否</span>
                <span v-else-if="scope.row.worker == 2">是</span>
                <span v-else-if="scope.row.worker == 3">否</span>
              </template>
            </el-table-column>
            <el-table-column prop="state" label="审核状态">
              <template slot-scope="scope">
                <span v-if="scope.row.state == 1">待审核</span>
                <span v-else-if="scope.row.state == 2">已通过</span>
                <span v-else-if="scope.row.state == 3">未通过</span>
              </template>
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination @current-change="teacherChange" :current-page.sync="teacherCurrent"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="teacherSize" layout="sizes, prev, pager, next, jumper"
              :total="teacherTotal" @size-change="teacherSizeChange"></el-pagination>
          </div>
        </template>

        <template v-if="user == '访客'">
          <el-table :data="visitorData" border :header-cell-style="{ background: '#f0f0f0' }" max-height="620">
            <el-table-column prop="id" label="访客ID"></el-table-column>
            <el-table-column prop="user_id" label="用户ID"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
            <el-table-column prop="user_name" label="拜访人"></el-table-column>
            <el-table-column prop="reason" label="拜访理由"></el-table-column>
            <el-table-column prop="href" label="访客人脸">
              <template slot-scope="scope">
                <img :src="scope.row.href" alt style="max-width: 180px; max-height: 80px" />
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination @current-change="visitorChange" :current-page.sync="visitorCurrent"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="visitorSize" layout="sizes, prev, pager, next, jumper"
              :total="visitorTotal" @size-change="sisitorSizeChange"></el-pagination>
          </div>
        </template>
      </div>
    </el-dialog>
    <!-- <el-dialog title="查看财务" :visible.sync="dialogFinancial" width="80%" @close="closeFinancial">
      <div class="box">
        <div class="btn">
          <el-select v-model="financial" @change="handleFinancial" placeholder="请选择">
            <el-option v-for="item in financialList" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div v-if="financial === '订单列表'">
          <el-table :data="orderData" border :header-cell-style="{ background: '#f0f0f0' }" max-height="620">
            <el-table-column prop="school_id" label="学校ID"></el-table-column>
            <el-table-column prop="no" label="订单ID"></el-table-column>
            <el-table-column prop="user_id" label="用户ID"></el-table-column>
            <el-table-column prop="user_name" label="用户名"></el-table-column>
            <el-table-column prop="name" label="商品名称"></el-table-column>
            <el-table-column prop="price" label="商品价格"></el-table-column>
            <el-table-column prop="time" label="商品时长"></el-table-column>
            <el-table-column prop="status" label="订单状态">
              <template slot-scope="scope">
                <span v-if="scope.row.status == 1">提交</span>
                <span v-else-if="scope.row.status == 2">已付款</span>
                <span v-else-if="scope.row.status == 3">无效</span>
              </template>
            </el-table-column>
            <el-table-column prop="created_id" label="创建时间"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination @current-change="orderChange" :current-page.sync="orderCurrent"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="orderSize" layout="sizes, prev, pager, next, jumper"
              :total="orderTotal" @size-change="orderSizeChange"></el-pagination>
          </div>
        </div>
        <div v-if="financial === '财务统计'">
          <el-table :data="financialData" border :header-cell-style="{ background: '#f0f0f0' }" max-height="620">
            <el-table-column prop="id" label="周总额"></el-table-column>
            <el-table-column prop="name" label="月总额"></el-table-column>
            <el-table-column prop="address" label="季度总额"></el-table-column>
            <el-table-column prop="created_at" label="上一季度总额"></el-table-column>
            <el-table-column prop="id" label="年总额"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination @current-change="handleFinanceChange" :current-page.sync="financeCurrent"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="financeSize" layout="sizes, prev, pager, next, jumper"
              :total="financeTotal" @size-change="handleFinanceSizeChange"></el-pagination>
          </div>
        </div>
      </div>
    </el-dialog> -->

    <!-- 删除提示框 -->
    <el-dialog :visible.sync="dialogDel" title="删除学校" width="20%" align="center" :close-on-click-modal="false">
      <div style="font-size: 20px; margin-bottom: 30px">是否删除该学校</div>
      <span>
        <el-button type="primary" @click="toDel">删除</el-button>
        <el-button type="danger" @click="dialogDel = false">取消</el-button>
      </span>
    </el-dialog>

    <div class="block">
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="current"
        :page-sizes="[10, 20, 30, 40, 50]" :page-size="10" layout="sizes, prev, pager, next, jumper" :total="total"
        @size-change="handleSizeChange"></el-pagination>
    </div>
  </div>
</template>

<script>
  import API from "@/api/index.js";

  export default {
    name: "school",
    data() {
      return {
        loading: true,
        // 添加学校
        dialogSchool: false,
        dialogDel: false,
        form: {
          name: "",
          address: "",
          in_group: "",
          out_group: "",
          mode: 1,
          user: {
            username: "",
            password: "",
          },
          grades: [],
          id: "",
          allow_parent_in: 0,
          up_time: "",
          below_time: "",
        },
        grade: [{
            value: "小班",
            label: "小班",
          },
          {
            value: "中班",
            label: "中班",
          },
          {
            value: "大班",
            label: "大班",
          },
        ],
        classList: [],

        // 操作
        // 查看用户
        dialogUser: false,
        user: "用户",
        userList: [{
            value: 1,
            label: "用户",
          },
          {
            value: 2,
            label: "学生",
          },
          {
            value: 3,
            label: "教师",
          },
          {
            value: 4,
            label: "访客",
          },
        ],
        id: "",
        userData: [], // 用户列表
        userSize: 10,
        userTotal: 0,
        userCurrent: 1,

        teacherData: [], // 教师列表
        teacherSize: 10,
        teacherTotal: 0,
        teacherCurrent: 1,

        studentData: [], // 学生列表
        studentSize: 10,
        studentTotal: 0,
        studentCurrent: 1,

        visitorData: [], // 访客列表
        visitorSize: 10,
        visitorTotal: 0,
        visitorCurrent: 1,

        // 查看财务
        dialogFinancial: false,
        financial: "订单列表",
        financialList: [{
            value: 1,
            label: "订单列表",
          },
          {
            value: 2,
            label: "财务统计",
          },
        ],
        orderData: [],
        orderSize: 10, // 订单列表
        orderTotal: 0,
        orderCurrent: 1,
        financialData: [],
        financeSize: 10, // 财务统计
        financeTotal: 0,
        financeCurrent: 1,

        tableDate: [],

        // 分页
        current: 1,
        total: 0,
        school_id: "",

      };
    },
    mounted() {
      this.getSchool(this.current);
      this.generateData();
    },
    methods: {
      // 获取学校列表
      getSchool(cur, list) {
        var self = this;
        API.schools(cur, list)
          .then((res) => {
            self.tableDate = res.data;
            self.total = res.total;
            self.loading = false;
          })
          .catch((err) => {
            self.loading = false;
          });
      },
      // 分页
      handleCurrentChange(val) {
        var self = this;
        self.loading = true;
        self.getSchool(val);
      },
      // 每页多少条
      handleSizeChange(val) {
        var self = this;
        self.loading = true;
        self.getSchool(1, val);
        self.current = 1;
      },

      // 添加学校
      addSchool() {
        var self = this;
        self.dialogSchool = true;
      },
      close() {
        var self = this;
        self.form = {
          name: "",
          address: "",
          in_group: "",
          out_group: "",
          mode: 1,
          user: {
            username: "",
            password: "",
          },
          grades: [],
          id: "",
          allow_parent_in: 0,
          up_time: "",
          below_time: "",
        };
      },
      newSchool() {
        var self = this;
        self.form.grades.forEach((item) => {
          for (var i = 0; i < item.classes.length; i++) {
            item.classes[i] = {
              title: item.classes[i],
            };
          }
        });
        API.school(self.form).then((res) => {
          self.dialogSchool = false;
          self.getSchool(self.current);
          self.$message.success("提交成功");
        });
      },
      // 操作
      handleEdit(index, row) {
        var self = this;
        self.dialogSchool = true;
        console.log(row);
        self.form = {
          name: row.name,
          address: row.address,
          in_group: row.in_group,
          out_group: row.out_group,
          mode: row.mode,
          user: {
            username: "",
            password: "",
          },
          grades: [],
          id: row.id,
          allow_parent_in: row.allow_parent_in,
          up_time: row.up_time,
          below_time: row.below_time,
        };
      },
      handleShowUser(index, row) {
        var self = this;
        self.dialogUser = true;
        self.id = row.id;
        self.userCurrent = 1;
        self.getSclUser(self.userCurrent, self.userSize);
      },
      closeShowUser() {
        var self = this;
        self.user = "用户";
        self.userData = [];
        self.studentData = [];
        self.teacherData = [];
        self.visitorData = [];
      },

      // 用户
      getSclUser(cur, list) {
        var self = this;
        API.schoolUser(cur, list, self.id).then(
          (res) => {
            self.userData = res.data;
            self.userTotal = res.total;
            self.$message.success("获取数据成功");
          }
        );
      },
      // 学生
      getStu(cur, list) {
        var self = this;
        API.studentInfo(cur, list, self.id).then((res) => {
          self.studentData = res.data;
          self.studentTotal = res.total;
          self.$message.success("获取数据成功");
        });
      },
      // 教师
      getTeacher(cur, list) {
        var self = this;
        API.teacherUser(cur, list, self.id).then((res) => {
          self.teacherData = res.data;
          self.teacherTotal = res.total;
          self.$message.success("获取数据成功");
        });
      },
      // 访客
      getVistor(cur, list) {
        var self = this;
        API.visitors(cur, list, self.id).then(
          (res) => {
            self.visitorData = res.data;
            self.visitorTotal = res.total;
            self.$message.success("获取数据成功");
          }
        );
      },
      handleUser(value) {
        var self = this;
        self.userCurrent = 1;
        self.studentCurrent = 1;
        self.teacherCurrent = 1;
        self.visitorCurrent = 1;
        switch (value) {
          case 1:
            self.$nextTick(() => {
              self.user = "用户";
              self.getSclUser(self.userCurrent, self.userSize);
            });
            break;
          case 2:
            self.$nextTick(() => {
              self.user = "学生";
              self.getStu(self.studentCurrent, self.studentSize);
            });
            break;
          case 3:
            self.$nextTick(() => {
              self.user = "教师";
              self.getTeacher(self.teacherCurrent, self.teacherSize);
            });
            break;
          case 4:
            self.$nextTick(() => {
              self.user = "访客";
              self.getVistor(self.visitorCurrent, self.visitorSize);
            });
            break;
        }
      },
      // 访客分页
      visitorChange(val) {
        var self = this;
        self.visitorCurrent = val;
        self.getVistor(val, self.visitorSize);
      },
      // 当前分页
      sisitorSizeChange(val) {
        var self = this;
        self.visitorSize = val;
        self.getVistor(1, val);
        self.visitorCurrent = 1;
      },
      // 老师分页
      teacherChange(val) {
        var self = this;
        self.teacherCurrent = val;
        self.getTeacher(val, self.teacherSize);
      },
      // 当前分页
      teacherSizeChange(val) {
        var self = this;
        self.teacherSize = val;
        self.getTeacher(1, val);
        self.teacherCurrent = 1;
      },
      // 用户分页
      userChange(val) {
        var self = this;
        self.userCurrent = val;
        self.getSclUser(val, self.userSize);
      },
      // 当前分页
      userSizeChange(val) {
        var self = this;
        self.getSclUser(1, val);
        self.userCurrent = 1;
      },
      // 学生分页
      studentChange(val) {
        var self = this;
        self.studentCurrent = val;
        self.getStu(val, self.studentSize);
      },
      // 当前分页
      studentSizeChange(val) {
        var self = this;
        self.studentSize = val;
        self.getStu(1, val);
        self.studentCurrent = 1;
      },

      handleShowFinancial(index, row) {
        var self = this;
        self.dialogFinancial = true;
        self.id = row.id;
      },
      /*       handleFinancial(value) {
              var self = this;
              switch (value) {
                case 1:
                  self.$nextTick(() => {
                    self.financial = "订单列表";
                    API.orders(1, 10, self.id).then((res) => {
                      self.orderData = res.data;
                      self.orderTotal = res.total;
                      self.$message.success("获取数据成功");
                    });
                  });
                  break;
                case 2:
                  self.financial = "财务统计";
                  API.orders(1, 10, self.id).then((res) => {
                    self.financialData = res.data;
                    self.financeTotal = res.total;
                    self.$message.success("获取数据成功");
                  });
                  break;
              }
            },
            closeFinancial() {
              var self = this;
              self.financial = "订单列表";
              self.orderData = [];
              self.financialData = [];
            },
            // 订单列表分页
            orderChange(val) {
              var self = this;
              self.orderCurrent = val;
              API.orders(val, self.orderSize, self.id).then((res) => {
                self.orderData = res.data;
                self.orderTotal = res.total;
              });
            },
            // 当前分页
            orderSizeChange(val) {
              var self = this;
              API.orders(val, self.orderCurrent, self.id).then((res) => {
                self.orderData = res.data;
                self.orderTotal = res.total;
              });
            },
            // 财务统计分页
            handleFinanceChange(val) {
              var self = this;
              self.financeCurrent = val;
              API.orders(val, self.financeSize, self.id).then((res) => {
                self.financialData = res.data;
                self.financeTotal = res.total;
              });
            },
            // 当前分页
            handleFinanceSizeChange(val) {
              var self = this;
              API.orders(val, self.financeCurrent, self.id).then((res) => {
                self.financialData = res.data;
                self.financeTotal = res.total;
              });
            }, */
      handleDelete(index, row) {
        var self = this;
        self.school_id = row.id;
        self.dialogDel = true;
      },
      toDel() {
        var self = this;
        API.delSchool(self.school_id).then((res) => {
          self.dialogDel = false;
          self.$message.success("删除成功");
          self.getSchool(self.current);
        });
      },

      // 年级操作
      addGrade() {
        var self = this;
        self.form.grades.push({});
      },
      delGrade() {
        var self = this;
        self.form.grades.pop({});
      },
      // 选中年级
      gradeChange(val) {
        var self = this;
        // var classData
        // switch (val) {
        // 	case '小班':
        // 		self.classList = []
        // 		classData = [
        // 			"小一",
        // 			"小二",
        // 			"小三",
        // 			"小四",
        // 			"小五",
        // 			"小六"
        // 		];
        // 		for (let i = 0; i < classData.length; i++) {
        // 			self.classList.push({
        // 				key: classData[i],
        // 				label: classData[i],
        // 			});
        // 		}
        // 		return self.classList;
        // 		break;
        // 	case '中班':
        // 		self.classList = []
        // 		classData = [
        // 			"中一",
        // 			"中二",
        // 			"中三",
        // 			"中四",
        // 			"中五",
        // 			"中六",
        // 			"中七"
        // 		];
        // 		for (let i = 0; i < classData.length; i++) {
        // 			self.classList.push({
        // 				key: classData[i],
        // 				label: classData[i],
        // 			});
        // 		}
        // 		return self.classList;
        // 		break;
        // 	case '大班':
        // 		self.classList = []
        // 		classData = [
        // 			"大一",
        // 			"大二",
        // 			"大三",
        // 			"大四",
        // 			"大五",
        // 			"大六",
        // 			"大七"
        // 		];
        // 		for (let i = 0; i < classData.length; i++) {
        // 			self.classList.push({
        // 				key: classData[i],
        // 				label: classData[i],
        // 			});
        // 		}
        // 		return self.classList;
        // }
      },
      generateData() {
        var self = this;
        var classData = [
          "小一",
          "小二",
          "小三",
          "小四",
          "小五",
          "小六",
          "中一",
          "中二",
          "中三",
          "中四",
          "中五",
          "中六",
          "中七",
          "大一",
          "大二",
          "大三",
          "大四",
          "大五",
          "大六",
          "大七",
        ];
        // var classData = ['小班', '1班','2班','3班','4班','5班']
        for (let i = 0; i < classData.length; i++) {
          self.classList.push({
            key: classData[i],
            label: classData[i],
          });
        }
        return self.classList;
      },
    },
  };
</script>

<style>
</style>