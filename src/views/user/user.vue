<template>
  <div v-loading="loading" element-loading-text="获取数据中">
    <div class="handle-box">
      <div class="btn">
        <el-input
          placeholder="请输入用户ID"
          v-model="user_id"
          class="search"
          @keyup.enter.native="search(user_id)"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="search(user_id)"
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
      <el-table-column prop="id" label="用户ID"></el-table-column>
      <el-table-column prop="avatarUrl" label="头像">
        <template slot-scope="scope">
          <img
            :src="scope.row.avatarUrl"
            style="max-width: 180px; max-height: 80px"
          />
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span v-text="scope.row.sex == 1 ? '男' : '女'"></span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号码"></el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleOpenPermission(scope.$index, scope.row)"
            >开通权限</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="handleBanUsePermission(scope.$index, scope.row)"
            >禁止使用权限</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="开通权限"
      :visible.sync="dialogOpenPermission"
      :close-on-click-modal="false"
      width="500px"
      @close="closePermissionForm"
    >
      <div class="box">
        <el-form :model="openPermissionForm">
          <div v-for="(item, index) in openPermissionForm.service" :key="index">
            <el-form-item label="选择学校">
              <el-select
                v-model="item.school_id"
                placeholder="请选择学校"
                @change="schoolChange"
              >
                <el-option
                  v-for="item in schools"
                  :label="item.name"
                  :value="item.id"
                  :key="item.index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="选择商品">
              <el-select v-model="item.product_id" placeholder="选择商品">
                <el-option
                  v-for="item in products"
                  :label="item.title"
                  :value="item.id"
                  :key="item.index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="选择学生">
              <el-select v-model="item.student_id" placeholder="选择学生">
                <el-option
                  v-for="item in students"
                  :label="item.name"
                  :value="item.id"
                  :key="item.index"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item label="操作">
            <el-button type="primary" @click="addopenPermissionForm"
              >添加</el-button
            >
            <el-button type="primary" @click="delopenPermissionForm"
              >删除</el-button
            >
          </el-form-item>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" @click="newOpenPermission"
                >提交</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>

    <el-dialog
      title="禁止使用权限"
      :visible.sync="dialogBanUsePermission"
      :close-on-click-modal="false"
    >
      <div class="box">
        <el-form>
          <el-form-item label="选择禁用的学校">
            <el-transfer
              v-model="banSchoolList"
              :data="schoolList"
              :titles="['选择学校', '禁用学校']"
              :button-texts="['取消', '禁用']"
              @left-check-change="changeLeft"
              @right-check-change="changeRight"
              @change="newBanUsePermission"
            ></el-transfer>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>

    <div class="block">
      <el-pagination
        @current-change="currentChange"
        :current-page.sync="current"
        :page-size="size"
        layout="sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="sizeChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import API from "@/api/index.js";
export default {
  name: "user",
  data() {
    return {
      loading: true,
      tableData: [],
      dialogOpenPermission: false, // 开通权限
      schools: [], // 开通权限--学校
      products: [], // 开通权限--商品
      students: [], // 开通权限--学生
      schoolList: [],
      id: "", // 用户id
      cancalSchool: [], // 取消学校
      banSchool: [], // 禁用学校
      goodsList: [],
      banSchoolList: [],
      openPermissionForm: {
        user_id: "",
        service: [],
      },
      dialogBanUsePermission: false, // 禁止使用权限
      activeName: "school",
      user_id: "", // 搜索用户id
      mode: 2,

      // 分页
      current: 1,
      total: 0,
      size: 10,
    };
  },
  mounted() {
    this.getWxUser();
  },
  methods: {
    changeLeft(val) {
      var self = this;
      self.banSchool = val;
    },

    changeRight(val) {
      var self = this;
      self.cancalSchool = val;
    },
    search() {
      var self = this;
      API.userSearch(self.user_id).then((res) => {
        self.tableData = res.data;
        self.total = res.total;
        self.$message.success("搜索成功！");
      });
    },
    schoolChange(value) {
      var self = this;
      self.getGoods(self.openPermissionForm.school);
      self.school_id = value;
      API.jurisdictionProducts(self.school_id).then((res) => {
        self.products = res;
      });
      API.jurisdictionStudent(self.user_id, self.school_id).then((res) => {
        self.students = res;
      });
    },

    // 获取商品列表
    getGoods(value) {
      var self = this;
      API.goods(value).then((res) => {
        self.goodsList = res.data;
      });
    },
    getWxUser() {
      var self = this;
      API.wxUser(self.current)
        .then((res) => {
          self.loading = false;
          self.tableData = res.data;
          self.total = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
    },
    addopenPermissionForm() {
      var self = this;
      self.openPermissionForm.service.push({});
    },
    delopenPermissionForm() {
      var self = this;
      self.openPermissionForm.service.pop({});
    },

    handleOpenPermission(index, row) {
      var self = this;
      self.dialogOpenPermission = true;
      self.addopenPermissionForm();
      self.user_id = row.id;
      API.jurisdictionSchool(self.user_id, self.mode).then((res) => {
        res.data.forEach((item) => {
          self.schools = res.data;
        });
      });
    },

    closePermissionForm() {
      var self = this;
      self.delopenPermissionForm();
      self.openPermissionForm.service = [];
    },
    newOpenPermission() {
      var self = this;
      self.openPermissionForm.user_id = self.user_id;
      API.setProduct(self.openPermissionForm).then((res) => {
        self.$message.success("提交成功");
        self.openPermissionForm = {
          user_id: "",
          service: [],
        };
        self.dialogOpenPermission = false;
      });
    },

    handleBanUsePermission(index, row) {
      var self = this;
      self.dialogBanUsePermission = true;
      self.id = row.id;
      self.schoolList = [];
      self.banSchoolList = [];
      API.banProducts(self.id).then((res) => {
        res.forEach((item) => {
          self.schoolList.push({
            label: item.name,
            key: item.id,
            type: item.type,
          });

          if (item.type === 1) {
            self.banSchoolList.push(item.id);
          }
        });
      });
    },

    newBanUsePermission(val, direction) {
      var self = this;
      var cancalform = {
        user_id: self.id,
        type: 2,
        school_id: self.cancalSchool,
      };
      if (direction === "left") {
        API.banProduct(cancalform).then((res) => {
          self.$message.success("提交成功");
        });
      }
      var banform = {
        user_id: self.id,
        type: 1,
        school_id: self.banSchool,
      };
      if (direction === "right") {
        API.banProduct(banform).then((res) => {
          self.$message.success("提交成功");
        });
      }
      self.dialogBanUsePermission = false;
    },

    currentChange(val) {
      var self = this;
      self.loading = true;
      self.current = val;
      API.wxUser(val, self.size)
        .then((res) => {
          self.loading = false;
          self.tableData = res.data;
          self.total = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
    },

    sizeChange(val) {
      var self = this;
      self.loading = true;
      self.size = val;
      API.wxUser(self.current, val)
        .then((res) => {
          self.loading = false;
          self.tableData = res.data;
          self.total = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
    },
  },
};
</script>

<style>
</style>
