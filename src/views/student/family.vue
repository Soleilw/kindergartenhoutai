<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <el-input
          v-model="number"
          placeholder="输入学生学号"
          class="search"
          @keyup.enter.native="search(number)"
        ></el-input>
      </div>
      <div class="btn">
        <el-button type="primary" @click="search(number)">搜索</el-button>
      </div>
      <div class="btn">
        <el-button type="primary" @click="refresh">刷新页面</el-button>
      </div>
    </div>

    <el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0'}">
      <el-table-column prop="student.number" label="学号"></el-table-column>
      <el-table-column prop="student.name" label="学生姓名"></el-table-column>
      <el-table-column prop="UserInfo.name" label="家长姓名"></el-table-column>
      <el-table-column prop="UserInfo.phone" label="家长手机号"></el-table-column>
      <el-table-column prop="WxUser.nickname" label="家长微信名" width="200px"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column prop="master" label="家长性质">
        <template slot-scope="scope">
          <span v-text="scope.row.master === 1 ? '默认家长' : '家庭成员' "></span>
        </template>
      </el-table-column>
      <el-table-column prop="updated_at" label="更新时间" width="150px"></el-table-column>
      <el-table-column label="操作" width="400px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleMore(scope.$index, scope.row)">查看更多</el-button>
          <el-button
            v-if="scope.row.master != 1"
            size="mini"
            type="primary"
            @click="handleFamilyChange(scope.$index, scope.row)"
          >更换默认家长</el-button>
          <el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)">解除关系</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next, jumper"
        :total="totalPage"
        @size-change="handleSizeChange"
      ></el-pagination>
    </div>

    <el-dialog
      title="更换默认家长"
      :visible.sync="dialogFamilyChange"
      width="20%"
      align="center"
      :close-on-click-modal="false"
    >
      <div style="font-size: 20px; margin-bottom: 30px;">是否更换为默认家长</div>
      <span>
        <el-button type="primary" @click="toChange">更换</el-button>
        <el-button type="danger" @click="dialogFamilyChange = false">取消</el-button>
      </span>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogDel"
      title="解除关系"
      width="20%"
      align="center"
      :close-on-click-modal="false"
    >
      <div style="font-size: 20px; margin-bottom: 30px;">是否解除关系</div>
      <span>
        <el-button type="primary" @click="toDel">解除</el-button>
        <el-button type="danger" @click="dialogDel = false">取消</el-button>
      </span>
    </el-dialog>

    <el-dialog title="学生家庭成员列表" :visible.sync="dialogFamily" width="90%" align="center">
      <table border="1" width="1000px" class="table" :model="studentList">
        <tr class="trHeight">
          <td rowspan="2" width="150px">学生信息</td>
          <td class="bgcolor" width="250px">学号</td>
          <td class="bgcolor" width="150px">学生姓名</td>
          <td class="bgcolor" width="150px">性别</td>
          <td class="bgcolor" width="150px">年龄</td>
          <td class="bgcolor" width="150px">班级</td>
        </tr>
        <tr>
          <td>{{studentList.number}}</td>
          <td>{{studentList.name}}</td>
          <td>{{studentList.sex === 1 ? '男' : '女'}}</td>
          <td>{{studentList.age}}</td>
          <td>{{studentList.class}}</td>
        </tr>
      </table>
      <table border="1" width="1000px" class="table" :model="tableList">
        <tr class="trHeight">
          <td rowspan="2" width="150px" v-if="master === 1">默认家长</td>
          <td rowspan="2" width="150px" v-if="master === 2">家庭成员</td>
          <td class="bgcolor" width="90px">家长ID</td>
          <td class="bgcolor" width="90px">家长名称</td>
          <td class="bgcolor" width="90px">性别</td>
          <td class="bgcolor" width="130px">电话</td>
          <td class="bgcolor" width="150px">身份证</td>
          <td class="bgcolor" width="300px">地址</td>
        </tr>
        <tr>
          <td>{{tableList.id}}</td>
          <td>{{tableList.name}}</td>
          <td>{{tableList.sex === 1 ? '男' : '女'}}</td>
          <td>{{tableList.phone}}</td>
          <td>{{tableList.id_card === 'NONE' ? '无' : tableList.id_card}}</td>
          <td style="text-align: start;padding: 5px;">{{tableList.address}}</td>
        </tr>
      </table>
      <!-- 			<div v-for="(item,index) in tableList" :key="index">
				<table border="1" width="1300px" class="table">
					<tr class="trHeight">
						<td rowspan='2'>家长信息</td>
						<td class="bgcolor">家长ID</td>
						<td class="bgcolor">家长名称</td>
						<td class="bgcolor">性别</td>
						<td class="bgcolor">电话</td>
						<td class="bgcolor">身份证</td>
						<td class="bgcolor">地址</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
      </div>-->
    </el-dialog>
  </div>
</template>

<script>
import API from "@/api/index.js";
export default {
  name: "family",
  inject: ["reload"],
  data() {
    return {
      loading: true,
      tableData: [],
      dialogFamily: false,
      studentList: {},
      tableList: [],
      familyList: [],
      number: "", // 搜索
      master: 1, // 默认家长
      dialogFamilyChange: false,
      dialogDel: false,
      ID: {
        id: "",
      },
      student_id: "",
      user_id: "",
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      permissions: localStorage.getItem("permissions"),
      role: localStorage.getItem("role"),
    };
  },
  mounted() {
    this.getFamily();
  },
  methods: {
    // 获取家长
    getFamily() {
      var self = this;
      self.pageSize = 10;
      API.family(1)
        .then((res) => {
          self.loading = false;
          self.tableData = res.data;
          self.totalPage = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
    },
    handleMore(index, row) {
      var self = this;
      self.dialogFamily = true;
      self.studentList = row.student;
      self.master = row.master;
      // self.tableList = row.UserInfo;
      if (row.UserInfo) {
        self.tableList = row.UserInfo;
      } else {
        self.dialogFamily = false;
        self.$message.warning("暂无家长更多信息");
      }
    },
    handleFamilyChange(index, row) {
      var self = this;
      self.dialogFamilyChange = true;
      self.ID.id = row.id;
    },
    toChange() {
      var self = this;
      API.masterFamily(self.ID).then((res) => {
        self.$message.success("更换成功");
        self.getFamily();
        self.dialogFamilyChange = false;
        self.currentPage = 1;
      });
    },
    handleDel(index, row) {
      var self = this;
      self.dialogDel = true;
      self.student_id = row.student.id;
      self.user_id = row.student.id;
      self.ID.id = row.id;
    },
    toDel() {
      var self = this;
      API.delFamily(self.ID.id)
        .then((res) => {
          self.$message.success("解除成功");
          self.dialogDel = false;
          self.getFamily();
          self.currentPage = 1;
        })
        .catch((err) => {});
    },
    // 搜索
    search() {
      var self = this;
      if (self.number) {
        API.familySearch(1, self.pageSize, self.number).then((res) => {
          self.tableData = res.data;
          self.totalPage = res.total;
          // self.number = '';
          self.$message.success("搜索成功！");
        });
      }
    },

    // 获取家长列表
    refresh() {
      this.reload();
    },

    // 返回得数据有多个家长信息，推入一个表格
    // getMoreInfo() {
    // 	this.familyList.push({})
    // },

    // 分页
    handleCurrentChange(val) {
      var self = this;
      if (self.number) {
        API.familySearch(val, self.pageSize, self.number).then((res) => {
          self.tableData = res.data;
          self.totalPage = res.total;
        });
      } else {
        API.family(val, self.pageSize).then((res) => {
          self.tableData = res.data;
          self.totalPage = res.total;
        });
      }
    },
    // 每页多少条
    handleSizeChange(val) {
      var self = this;
      self.pageSize = val;
      if (self.number) {
        API.familySearch(1, val, self.number).then((res) => {
          self.tableData = res.data;
          self.totalPage = res.total;
        });
      } else {
        API.family(1, self.pageSize).then((res) => {
          self.tableData = res.data;
          self.totalPage = res.total;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  height: 100px;
  text-align: center;
  box-shadow: 0 2px 4px 0;
  margin-top: 20px;
}

.table .bgcolor {
  background-color: #ebeef5;
}

.table .trHeight {
  height: 40px;
}

// .table td {
// 	width: 40px;
// }
</style>
