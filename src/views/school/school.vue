<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <el-button type="primary" @click="addSchool">添加学校</el-button>
      </div>
    </div>

    <el-dialog title="添加学校" :visible.sync="dialogSchool" :close-on-click-modal="false">
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
                step: '00:01',
                end: '21:30',
              }">
            </el-time-select>
            <el-time-select placeholder="请选择下班时间" v-model="form.below_time" is-range :picker-options="{
                start: '06:00',
                step: '00:01',
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
              <el-dropdown-item>
                <el-button size="mini" type="primary" @click="handleShowFinancial(scope.$index, scope.row)">查看财务
                </el-button>
              </el-dropdown-item>
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
            <el-pagination @current-change="handleUserChange" :current-page.sync="currentUserPage"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="userPageSize" layout="sizes, prev, pager, next, jumper"
              :total="userTotalPage" @size-change="handleUserSizeChange"></el-pagination>
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
            <el-pagination @current-change="handleStudentChange" :current-page.sync="currentStudentPage"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="studentPageSize" layout="sizes, prev, pager, next, jumper"
              :total="studentTotalPage" @size-change="handleStudentSizeChange"></el-pagination>
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
            <el-pagination @current-change="handleTeacherChange" :current-page.sync="currentTeacherPage"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="teacherPageSize" layout="sizes, prev, pager, next, jumper"
              :total="teacherTotalPage" @size-change="handleTeacherSizeChange"></el-pagination>
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
            <el-pagination @current-change="handleVisitorChange" :current-page.sync="currentVisitorPage"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="visitorPageSize" layout="sizes, prev, pager, next, jumper"
              :total="visitorTotalPage" @size-change="handleVisitorSizeChange"></el-pagination>
          </div>
        </template>
      </div>
    </el-dialog>
    <el-dialog title="查看财务" :visible.sync="dialogFinancial" width="80%" @close="closeFinancial">
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
            <el-pagination @current-change="handleOrderChange" :current-page.sync="currentOrderPage"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="orderPageSize" layout="sizes, prev, pager, next, jumper"
              :total="orderTotalPage" @size-change="handleOrderSizeChange"></el-pagination>
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
            <el-pagination @current-change="handleFinanceChange" :current-page.sync="currentFinancePage"
              :page-sizes="[10, 20, 30, 40, 50]" :page-size="financePageSize" layout="sizes, prev, pager, next, jumper"
              :total="financeTotalPage" @size-change="handleFinanceSizeChange"></el-pagination>
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- 删除提示框 -->
    <el-dialog :visible.sync="dialogDel" title="删除学校" width="20%" align="center" :close-on-click-modal="false">
      <div style="font-size: 20px; margin-bottom: 30px">是否删除该学校</div>
      <span>
        <el-button type="primary" @click="toDel">删除</el-button>
        <el-button type="danger" @click="dialogDel = false">取消</el-button>
      </span>
    </el-dialog>

    <div class="block">
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]" :page-size="10" layout="sizes, prev, pager, next, jumper" :total="totalPage"
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
        user: "访客",
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
        userPageSize: 10,
        userTotalPage: 0,
        currentUserPage: 1,

        teacherData: [], // 教师列表
        teacherPageSize: 10,
        teacherTotalPage: 0,
        currentTeacherPage: 1,

        studentData: [], // 学生列表
        studentPageSize: 10,
        studentTotalPage: 0,
        currentStudentPage: 1,

        visitorData: [], // 访客列表
        visitorPageSize: 10,
        visitorTotalPage: 0,
        currentVisitorPage: 1,

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
        orderPageSize: 10, // 订单列表
        orderTotalPage: 0,
        currentOrderPage: 1,
        financialData: [],
        financePageSize: 10, // 财务统计
        financeTotalPage: 0,
        currentFinancePage: 1,

        tableDate: [],

        // 分页
        currentPage: 1,
        totalPage: 0,
        school_id: "",

      };
    },
    mounted() {
      this.getSchool();
      this.generateData();
    },
    methods: {
      // 获取学校列表
      getSchool() {
        var self = this;
        API.schools(self.currentPage)
          .then((res) => {
            self.tableDate = res.data;
            self.totalPage = res.total;
            self.loading = false;
          })
          .catch((err) => {
            self.loading = false;
          });
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
          self.getSchool();
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
            allow_parent_in: 0,
            up_time: "",
            below_time: "",
          };
          self.$message.success("提交成功");
          self.currentPage = 1;
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
      },
      closeShowUser() {
        var self = this;
        self.user = "访客";
        self.userData = [];
        self.studentData = [];
        self.teacherData = [];
        self.visitorData = [];
      },
      handleUser(value) {
        var self = this;
        switch (value) {
          case 1:
            self.$nextTick(() => {
              self.user = "用户";
              API.schoolUser(
                self.currentUserPage,
                self.userPageSize,
                self.id
              ).then((res) => {
                self.userData = res.data;
                self.userTotalPage = res.total;
                self.$message.success("获取数据成功");
              });
            });
            break;
          case 2:
            self.$nextTick(() => {
              self.user = "学生";
              API.studentInfo(
                self.currentStudentPage,
                self.studentPageSize,
                self.id
              ).then((res) => {
                self.studentData = res.data;
                self.studentTotalPage = res.total;
                self.$message.success("获取数据成功");
              });
            });
            break;
          case 3:
            self.$nextTick(() => {
              self.user = "教师";
              API.teacherUser(
                self.currentTeacherPage,
                self.teacherPageSize,
                self.id
              ).then((res) => {
                self.teacherData = res.data;
                self.teacherTotalPage = res.total;
                self.$message.success("获取数据成功");
              });
            });
            break;
          case 4:
            self.$nextTick(() => {
              self.user = "访客";
              API.visitors(
                self.currentVisitorPage,
                self.visitorPageSize,
                self.id
              ).then((res) => {
                self.visitorData = res.data;
                self.visitorTotalPage = res.total;
                self.$message.success("获取数据成功");
              });
            });
            break;
        }
      },
      handleShowFinancial(index, row) {
        var self = this;
        self.dialogFinancial = true;
        self.id = row.id;
      },
      handleFinancial(value) {
        var self = this;
        switch (value) {
          case 1:
            self.$nextTick(() => {
              self.financial = "订单列表";
              API.orders(1, 10, self.id).then((res) => {
                self.orderData = res.data;
                self.orderTotalPage = res.total;
                self.$message.success("获取数据成功");
              });
            });
            break;
          case 2:
            self.financial = "财务统计";
            API.orders(1, 10, self.id).then((res) => {
              self.financialData = res.data;
              self.financeTotalPage = res.total;
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
      handleDelete(index, row) {
        var self = this;
        console.log(row);
        self.school_id = row.id;
        self.dialogDel = true;
      },
      toDel() {
        var self = this;
        API.delSchool(self.school_id).then((res) => {
          self.dialogDel = false;
          self.$message.success("删除成功");
          self.getSchool();
        });
      },

      // 添加学校
      addSchool() {
        var self = this;
        self.dialogSchool = true;
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
          allow_parent_in: 0,
          up_time: "",
          below_time: "",
        };
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

      // 分页
      handleCurrentChange(val) {
        var self = this;
        self.getSchool();
      },
      // 每页多少条
      handleSizeChange(val) {
        var self = this;
        API.schools(self.currentPage, val).then((res) => {
          self.tableDate = res.data;
          self.totalPage = res.total;
        });
      },

      // 分页
      handleCurrentChange(val) {
        var self = this;
        self.getSchool();
      },
      // 每页多少条
      handleSizeChange(val) {
        var self = this;
        API.schools(self.currentPage, val).then((res) => {
          self.tableDate = res.data;
          self.totalPage = res.total;
        });
      },

      // 访客分页
      handleVisitorChange(val) {
        var self = this;
        self.currentVisitorPage = val;
        API.visitors(val, self.visitorPageSize, self.id).then((res) => {
          self.visitorData = res.data;
          self.visitorTotalPage = res.total;
        });
      },
      // 当前分页
      handleVisitorSizeChange(val) {
        var self = this;
        API.visitors(self.currentVisitorPage, val, self.id).then((res) => {
          self.visitorData = res.data;
          self.visitorTotalPage = res.total;
        });
      },

      // 老师分页
      handleTeacherChange(val) {
        var self = this;
        self.currentTeacherPage = val;
        API.teacherUser(val, self.teacherPageSize, self.id).then((res) => {
          self.teacherData = res.data;
          self.teacherTotalPage = res.total;
        });
      },
      // 当前分页
      handleTeacherSizeChange(val) {
        var self = this;
        API.teacherUser(self.currentTeacherPage, val, self.id).then((res) => {
          self.teacherData = res.data;
          self.teacherTotalPage = res.total;
        });
      },

      // 用户分页
      handleUserChange(val) {
        var self = this;
        self.currentUserPage = val;
        API.schoolUser(val, self.userPageSize, self.id).then((res) => {
          self.userData = res.data;
          self.userTotalPage = res.total;
        });
      },
      // 当前分页
      handleUserSizeChange(val) {
        var self = this;
        API.schoolUser(self.currentUserPage, val, self.id).then((res) => {
          self.userData = res.data;
          self.userTotalPage = res.total;
        });
      },
      // 学生分页
      handleStudentChange(val) {
        var self = this;
        self.currentStudentPage = val;
        API.studentInfo(val, self.studentPageSize, self.id).then((res) => {
          self.studentData = res.data;
          self.studentTotalPage = res.total;
        });
      },
      // 当前分页
      handleStudentSizeChange(val) {
        var self = this;
        API.studentInfo(self.currentStudentPage, val, self.id).then((res) => {
          self.studentData = res.data;
          self.studentTotalPage = res.total;
        });
      },
      // 订单列表分页
      handleOrderChange(val) {
        var self = this;
        self.currentOrderPage = val;
        API.orders(val, self.orderPageSize, self.id).then((res) => {
          self.orderData = res.data;
          self.orderTotalPage = res.total;
        });
      },
      // 当前分页
      handleOrderSizeChange(val) {
        var self = this;
        API.orders(val, self.currentOrderPage, self.id).then((res) => {
          self.orderData = res.data;
          self.orderTotalPage = res.total;
        });
      },
      // 财务统计分页
      handleFinanceChange(val) {
        var self = this;
        self.currentFinancePage = val;
        API.orders(val, self.financePageSize, self.id).then((res) => {
          self.financialData = res.data;
          self.financeTotalPage = res.total;
        });
      },
      // 当前分页
      handleFinanceSizeChange(val) {
        var self = this;
        API.orders(val, self.currentFinancePage, self.id).then((res) => {
          self.financialData = res.data;
          self.financeTotalPage = res.total;
        });
      },
    },
  };
</script>

<style>
</style>