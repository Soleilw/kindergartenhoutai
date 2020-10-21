<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <el-input
          placeholder="输入学生学号"
          v-model="number"
          @keyup.enter.native="search(number)"
          class="input-with-select"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="search(number)"
          ></el-button>
          <el-button
            slot="append"
            icon="el-icon-refresh"
            @click="refresh"
          ></el-button>
        </el-input>
      </div>
    </div>

    <el-table
      :data="tableData"
      border
      :header-cell-style="{ background: '#f0f0f0' }"
      max-height="620"
    >
      <el-table-column prop="student.number" label="学号"></el-table-column>
      <el-table-column prop="student.name" label="学生姓名"></el-table-column>
      <el-table-column prop="UserInfo.name" label="家长姓名"></el-table-column>
      <el-table-column prop="UserInfo.href" label="家长人脸信息">
        <template slot-scope="scope">
          <el-popover placement="top-start" title="" trigger="click">
            <img
              :src="scope.row.UserInfo.href"
              style="max-width: 800px; max-height: 800px"
            />
            <img
              slot="reference"
              :src="scope.row.UserInfo.href"
              style="max-width: 180px; max-height: 80px"
            />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="UserInfo.phone"
        label="家长手机号"
      ></el-table-column>
      <el-table-column
        prop="WxUser.nickname"
        label="家长微信名"
        width="200px"
      ></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column prop="master" label="家长性质">
        <template slot-scope="scope">
          <span
            v-text="scope.row.master === 1 ? '默认家长' : '家庭成员'"
          ></span>
        </template>
      </el-table-column>
      <el-table-column prop="updated_at" label="更新时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown>
            <el-button type="primary">
              操作<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleMore(scope.$index, scope.row)"
                  >查看更多</el-button
                >
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleFace(scope.$index, scope.row)"
                  >更换人脸</el-button
                >
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button
                  size="mini"
                  type="primary"
                  v-if="scope.row.master != 1"
                  @click="handleFamilyChange(scope.$index, scope.row)"
                  >更换默认家长</el-button
                >
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDel(scope.$index, scope.row)"
                  >解除关系</el-button
                >
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
      <div style="font-size: 20px; margin-bottom: 30px">是否更换为默认家长</div>
      <span>
        <el-button type="primary" @click="toChange">更换</el-button>
        <el-button type="danger" @click="dialogFamilyChange = false"
          >取消</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogDel"
      title="解除关系"
      width="20%"
      align="center"
      :close-on-click-modal="false"
    >
      <div style="font-size: 20px; margin-bottom: 30px">是否解除关系</div>
      <span>
        <el-button type="primary" @click="toDel">解除</el-button>
        <el-button type="danger" @click="dialogDel = false">取消</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="学生家庭成员列表"
      :visible.sync="dialogFamily"
      width="90%"
      align="center"
    >
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
          <td>{{ studentList.number }}</td>
          <td>{{ studentList.name }}</td>
          <td>{{ studentList.sex === 1 ? "男" : "女" }}</td>
          <td>{{ studentList.age }}</td>
          <td>{{ studentList.class }}</td>
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
          <td>{{ tableList.id }}</td>
          <td>{{ tableList.name }}</td>
          <td>{{ tableList.sex === 1 ? "男" : "女" }}</td>
          <td>{{ tableList.phone }}</td>
          <td>{{ tableList.id_card === "NONE" ? "无" : tableList.id_card }}</td>
          <td style="text-align: start; padding: 5px">
            {{ tableList.address }}
          </td>
        </tr>
      </table>
    </el-dialog>

    <el-dialog
      title="更换人脸"
      :visible.sync="dialogFace"
      :close-on-click-modal="false"
      width="500px"
    >
      <div class="box">
        <el-form :model="familyForm">
          <div class="tips">
            <p><span>提示：</span>更换后的人脸照片会覆盖掉原有的人脸照片！</p>
          </div>
          <el-form-item label="更换人脸图片">
            <el-upload
              action="https://api.fengniaotuangou.cn/api/upload"
              ref="upload"
              :limit="1"
              :before-upload="beforeAvatarUpload"
              :auto-upload="false"
              :on-success="handleAvatarSuccess"
              :on-remove="handleRemove"
              :on-exceed="handleExceed"
              :on-change="handleChange"
            >
              <el-button size="small" type="primary">选择图片</el-button>
            </el-upload>
            <div v-if="hasNewImage" style="color: red; font-size: 12px">
              * 点击文件名可删除所选图片
            </div>

            <div class="up-img" v-if="old_href">
              <span style="display: flex; justify-items: center; color: #409eff"
                >原人脸图片</span
              >
              <img class="pic-box" :src="old_href" />
            </div>
            <div class="up-img" v-if="familyForm.href">
              <span style="display: flex; justify-items: center; color: #67c23a"
                >新人脸图片</span
              >
              <img class="pic-box" :src="familyForm.href" />
            </div>
            <div class="up-img" v-else>
              <img class="pic-box" :src="change_href" />
            </div>
          </el-form-item>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" @click="changeFace">提交</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from "@/api/index.js";
import md5 from "blueimp-md5";

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
      imgData: {
        key: "",
        token: "",
      },
      fileName: "",
      suffix: "",
      qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
      familyForm: {
        href: "",
        user_id: "",
      },
      old_href: "", // 原人脸图片
      change_href: "",
      hasNewImage: false,
      new_file: "",
      dialogFace: false,
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

    // 更换人脸
    handleFace(index, row) {
      var self = this;
      console.log(row);
      if (row.UserInfo.worker == 0) {
        self.dialogFace = true;
      } else {
        self.$message.warning("改用户无法修改人脸");
      }
      self.familyForm.user_id = row.user_id;
      // self.familyForm.only_in = row.only_in;
      self.old_href = row.UserInfo.href;
    },

    // 人脸信息
    handleChange(file) {
      var self = this;
      console.log(file);
      self.change_href = URL.createObjectURL(file.raw);
      self.hasNewImage = true;
    },
    handleRemove(file) {
      var self = this;
      self.change_href = "";
      self.hasNewImage = false;
    },
    beforeAvatarUpload(file) {
      var self = this;
      // self.familyForm.href = file.name;
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    changeFace() {
      var self = this;
      if (self.change_href === "") {
        API.updateFace(self.familyForm).then((res) => {
          self.$message.success("上传成功");
          self.currentPage = 1;
          self.getFamily();
          self.familyForm.href = "";
          self.dialogFace = false;
        });
      } else {
        this.$refs.upload.submit();
      }
    },
    handleAvatarSuccess(res, file) {
      var self = this;
      console.log(111, res);
      file.url = `${res.data}`;
      self.familyForm.href = file.url;
      API.updateFace(self.familyForm).then((res) => {
        self.$message.success("上传成功");
        self.currentPage = 1;
        self.getFamily();
        self.$refs.upload.clearFiles();
        self.familyForm.href = "";
        self.change_href = "";
        self.old_href = "";
        self.imgData.key = "";
        self.familyForm.user_id = "";
        self.dialogFace = false;
      });
    },
    handleExceed(file, fileList) {
      //图片上传超过数量限制
      var self = this;
      self.$message.error("上传图片不能超过1张!重新上传");
      self.$refs.upload.clearFiles();
      self.familyForm.href = "";
      self.imgData.key = "";
      self.familyForm.user_id = "";
    },

    getQiniuToken() {
      var self = this;
      axios
        .get("https://api.fengniaotuangou.cn/api/upload/token")
        .then((res) => {
          self.imgData.token = res.data.uptoken;
        });
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

.upload-btn {
  margin-top: 10px;
}

.up-img {
  display: inline-block;
  margin: 0 50px;
}

.pic-box {
  max-width: 100%;
  height: 200px;
}

.tips {
  margin-bottom: 20px;
  color: red;
}

// .table td {
// 	width: 40px;
// }
</style>
