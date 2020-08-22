<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="welcome">
      管理员：
      <span style="color: #2a9f93;">{{username}}</span>
      当前时间：
      <span style="color: #F56C6C;">{{ nowDate + ' ' + nowTime + ' ' + nowWeek }}</span>
    </div>
    <div class="box">
      <div class="box-item">
        <div class="handle-box">
          <div class="btn">
            <router-link to="/infomation">更多学生信息</router-link>
          </div>
          <div class="btn total">总数：{{studentTotal}}</div>
        </div>

        <el-table :data="studentData" border :header-cell-style="{background:'#f0f0f0'}">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="number" label="学号"></el-table-column>
          <el-table-column prop="sex" label="性别">
            <template slot-scope="scope">
              <span v-text="scope.row.sex == 1 ? '男' : '女' "></span>
            </template>
          </el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
        </el-table>
      </div>
      <div class="box-item">
        <div class="handle-box">
          <div class="btn">
            <router-link to="/grade">更多班级信息</router-link>
          </div>
          <div class="btn total">总数：{{classTotal}}</div>
        </div>
        <el-table :data="classData" border :header-cell-style="{background:'#f0f0f0'}">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="grade" label="年级"></el-table-column>
          <el-table-column prop="title" label="班级"></el-table-column>
          <el-table-column prop="teacher.name" label="班主任"></el-table-column>
        </el-table>
      </div>
      <div class="box-item">
        <div class="handle-box">
          <div class="btn">
            <router-link to="/family">更多家长信息</router-link>
          </div>
          <div class="btn total">总数：{{familyTotal}}</div>
        </div>
        <el-table :data="familyData" border :header-cell-style="{background:'#f0f0f0'}">
          <el-table-column prop="student.name" label="学生姓名"></el-table-column>
          <el-table-column prop="UserInfo.name" label="家长姓名"></el-table-column>
          <el-table-column prop="UserInfo.phone" label="手机号"></el-table-column>
          <el-table-column prop="WxUser.nickname" label="微信名"></el-table-column>
        </el-table>
      </div>
      <div class="box-item">
        <div class="handle-box">
          <div class="btn">
            <router-link to="/teacher">更多教职工信息</router-link>
          </div>
          <div class="btn total">总数：{{teacherTotal}}</div>
        </div>
        <el-table :data="teacherData" border :header-cell-style="{background:'#f0f0f0'}">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="state" label="是否为班主任">
            <template slot-scope="scope">
              <el-tag disable-transitions v-if="scope.row.worker == 0">否</el-tag>
              <el-tag disable-transitions v-else-if="scope.row.worker == 1">否</el-tag>
              <el-tag disable-transitions v-else-if="scope.row.worker == 2">是</el-tag>
              <el-tag disable-transitions v-else-if="scope.row.worker == 3">>否</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="状态">
            <template slot-scope="scope">
              <el-tag disable-transitions v-if="scope.row.state == 1">待审核</el-tag>
              <el-tag disable-transitions v-else-if="scope.row.state == 2">已通过</el-tag>
              <el-tag disable-transitions v-else-if="scope.row.state == 3">>未通过</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api/index.js";
export default {
  data() {
    return {
      loading: true,
      username: localStorage.getItem("username"),
      // currentTime: '',
      studentData: [],
      classData: [],
      familyData: [],
      teacherData: [],
      studentTotal: "",
      classTotal: "",
      familyTotal: "",
      teacherTotal: "",
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "", // 当前星期

      permissions: localStorage.getItem("permissions"),
      role: localStorage.getItem("role"),
    };
  },
  mounted() {
    this.getInfo();
    this.currentTime();
  },
  methods: {
    currentTime() {
      setInterval(this.getDate, 500);
    },
    getDate() {
      var self = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let week = new Date().getDay();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss = new Date().getSeconds();
      switch (week) {
        case 1:
          self.nowWeek = "星期一";
          break;
        case 2:
          self.nowWeek = "星期二";
          break;
        case 3:
          self.nowWeek = "星期三";
          break;
        case 4:
          self.nowWeek = "星期四";
          break;
        case 5:
          self.nowWeek = "星期五";
          break;
        case 6:
          self.nowWeek = "星期六";
          break;
        case 7:
          self.nowWeek = "星期日";
      }
      self.nowTime = hh + ":" + mf + ":" + ss;
      self.nowDate = yy + "-" + mm + "-" + dd;
    },
    getInfo() {
      var self = this;
      API.students(1, 5)
        .then((res) => {
          self.loading = false;
          self.studentData = res.data;
          self.studentTotal = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
      API.classes(1, 5)
        .then((res) => {
          self.loading = false;
          self.classData = res.data;
          self.classTotal = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
      API.family(1, 5)
        .then((res) => {
          self.loading = false;
          self.familyData = res.data;
          self.familyTotal = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
      API.teacher(1, 5)
        .then((res) => {
          self.loading = false;
          self.teacherData = res.data;
          self.teacherTotal = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
    },
  },
  // 销毁定时器
  beforeDestroy: function () {
    if (this.getDate) {
      clearInterval(this.getDate);
    }
  },
};
</script>

<style scoped lang="scss">
.welcome {
  padding: 20px 10px;
  box-shadow: 1px 1px 5px #ccc;
  font-size: 16px;
}

.welcome span {
  padding: 20px 5px;
}

.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .box-item {
    width: 48%;
    margin-top: 30px;
    // margin-left: 50px;
    padding: 10px;
    box-shadow: 1px 1px 5px #ccc;

    .btn {
      padding: 10px;
      border-radius: 5px;
      background: #2a9f93;

      a {
        color: #fff;
      }
    }

    .total {
      background: #f0f0f0;
      color: #2a9f93;
    }
  }
}
</style>
