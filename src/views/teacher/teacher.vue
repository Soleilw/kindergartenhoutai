<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <span>状态：</span>
        <el-select
          v-model="auditState"
          placeholder="请选择状态"
          @change="changeAudit"
        >
          <el-option
            v-for="item in auditList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="btn">
        <span>职位：</span>
        <el-select
          v-model="workerState"
          placeholder="请选择职位"
          @change="changeWorker"
        >
          <el-option
            v-for="item in workerList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </div>
    </div>

    <el-table
      :data="tableData"
      ref="multipleTable"
      border
      :header-cell-style="{ background: '#f0f0f0' }"
    >
      <el-table-column prop="id" label="用户ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="href" label="人脸图形">
        <template slot-scope="scope">
          <div v-if="scope.row.href">
            <el-popover placement="top-start" title trigger="click">
              <img
                :src="scope.row.href"
                style="max-width: 800px; max-height: 800px"
              />
              <img
                slot="reference"
                :src="scope.row.href"
                style="max-width: 180px; max-height: 80px"
              />
            </el-popover>
          </div>
          <div v-else>
            <span>--暂无图片--</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="worker" label="是否为班主任">
        <template slot-scope="scope">
          <span v-if="scope.row.worker == 0">否</span>
          <span v-if="scope.row.worker == 1">否</span>
          <span v-if="scope.row.worker == 2">是</span>
          <span v-if="scope.row.worker == 3">否</span>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.state == 1">待审核</span>
          <span v-if="scope.row.state == 2">已通过</span>
          <span v-if="scope.row.state == 3">未通过</span>
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间"></el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleTeacher(scope.$index, scope.row)"
            >查看详情</el-button
          >
          <el-button
            v-if="scope.row.state == '1'"
            type="primary"
            size="mini"
            @click="handleAudit(scope.$index, scope.row)"
            >审核</el-button
          >
          <el-button
            type="danger"
            size="mini"
            @click="handleDel(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :visible.sync="dialogDel"
      title="删除年级"
      width="20%"
      align="center"
      :close-on-click-modal="false"
    >
      <div style="font-size: 20px; margin-bottom: 30px">是否删除该教师</div>
      <span>
        <el-button type="primary" @click="toDel">删除</el-button>
        <el-button type="danger" @click="dialogDel = false">取消</el-button>
      </span>
    </el-dialog>

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
      :visible.sync="dialogTeacher"
      title="教师详情"
      width="500px"
      :close-on-click-modal="false"
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.id_card" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input
            v-model="form.address"
            type="textarea"
            :disabled="disabled"
          ></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="form.class" :disabled="disabled"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogAudit"
      title="审核"
      width="20%"
      align="center"
    >
      <div style="font-size: 20px; margin-bottom: 30px">是否通过审核</div>
      <span>
        <el-button type="primary" @click="toAudit">通过</el-button>
        <el-button type="danger" @click="unAudit">不通过</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import API from "@/api/index.js";

export default {
  name: "teacher",
  data() {
    return {
      loading: true,
      auditState: 4,
      state: "",
      auditList: [
        {
          value: 4,
          label: "全部",
        },
        {
          value: 1,
          label: "待审核",
        },
        {
          value: 2,
          label: "已通过",
        },
        {
          value: 3,
          label: "未通过",
        },
      ],
      workerState: 4,
      worker: "",
      workerList: [
        {
          value: 4,
          label: "全部",
        },
        {
          value: 1,
          label: "职工",
        },
        {
          value: 2,
          label: "班主任",
        },
        {
          value: 3,
          label: "保安员",
        },
      ],
      tableData: [],
      dialogTeacher: false,
      disabled: false,
      form: {},
      dialogAudit: false,

      dialogDel: false, // 删除
      id: "",
      // 分页
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      info_id: "", // 审核教师
      permissions: localStorage.getItem("permissions"),
      role: localStorage.getItem("role"),
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    // 获取教师
    changeAudit() {
      var self = this;
      switch (self.auditState) {
        case 4:
          self.state = 0;
          break;
        case 1:
          self.state = 1;
          break;
        case 2:
          self.state = 2;
          break;
        case 3:
          self.state = 3;
      }
    },
    changeWorker() {
      var self = this;
      switch (self.workerState) {
        case 4:
          self.worker = 0;
          break;
        case 1:
          self.worker = 1;
          break;
        case 2:
          self.worker = 2;
          break;
        case 3:
          self.worker = 3;
      }
    },
    search() {
      var self = this;
      if (self.auditState && self.workerState) {
        API.teacher(1, self.pageSize, self.state, self.worker)
          .then((res) => {
            self.tableData = res.data;
            self.totalPage = res.total;
            self.currentPage = 1;
            self.loading = false;
          })
          .catch((err) => {
            self.loading = false;
          });
      }
    },

    // 操作
    handleTeacher(index, row) {
      var self = this;
      self.disabled = true;
      self.dialogTeacher = true;
      row.sex = Number(row.sex);
      self.form = row;
    },

    // 审核
    handleAudit(index, row) {
      var self = this;
      self.info_id = row.id;
      console.log(self.info_id);
      self.dialogAudit = true;
    },
    toAudit() {
      var self = this;
      var userId1 = {
        state: 2,
        id: self.info_id,
      };
      API.audit(userId1).then((res) => {
        self.dialogAudit = false;
        self.$message.success("提交成功");
        self.search();
      });
    },
    unAudit() {
      var self = this;
      var userId2 = {
        state: 3,
        id: self.info_id,
      };
      API.audit(userId2).then((res) => {
        self.dialogAudit = false;
        self.$message.success("提交成功");
        self.search();
      });
    },
    handleDel(index, row) {
      var self = this;
      self.dialogDel = true;
      self.id = row.id;
    },
    toDel() {
      var self = this;
      API.delTeacher(self.id).then((res) => {
        self.$message.success("删除成功");
        self.dialogDel = false;
        self.search();
        self.currentPage = 1;
      });
    },

    // 分页
    handleCurrentChange(val) {
      var self = this;
      API.teacher(val, self.pageSize, self.state, self.worker).then((res) => {
        self.tableData = res.data;
        self.totalPage = res.total;
      });
    },
    // 每页多少条
    handleSizeChange(val) {
      var self = this;
      self.pageSize = val;
      if (self.auditState && self.workerState) {
        API.teacher(1, self.pageSize, self.state, self.worker).then((res) => {
          self.tableData = res.data;
          self.totalPage = res.total;
          self.currentPage = 1;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
