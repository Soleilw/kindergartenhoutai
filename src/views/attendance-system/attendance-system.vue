<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <el-input
          placeholder="请输入用户名"
          v-model="name"
          @keyup.enter.native="search(name)"
          class="input-with-select"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="search(name)"
          ></el-button>
          <el-button
            slot="append"
            icon="el-icon-refresh"
            @click="refresh"
          ></el-button>
        </el-input>
      </div>
      <div class="btn">
        <el-date-picker
          v-model="time"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          @change="timeChange"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>

    <el-table
      :data="tableDate"
      border
      :header-cell-style="{ background: '#f0f0f0' }"
    >
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="user_id" label="用户ID"></el-table-column>
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column prop="count" label="签到总数"></el-table-column>
      <el-table-column prop="up_count" label="上班签到"></el-table-column>
      <el-table-column prop="below_count" label="下班签到"></el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleDetail(scope.$index, scope.row)"
            >签到详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="签到详情"
      :visible.sync="dialogDetail"
      :close-on-click-modal="false"
      width="1200px"
    >
      <el-table
        :data="detailData"
        border
        :header-cell-style="{ background: '#f0f0f0' }"
      >
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="user_id" label="用户ID"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="type" label="签到方式">
          <template slot-scope="scope">
            <span v-if="scope.row.type == 1">刷脸签到</span>
            <span v-else-if="scope.row.type == 2">手动打卡签到</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="签到时间">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 1">上班</span>
            <span v-else-if="scope.row.status == 2">下班</span>
          </template>
        </el-table-column>
        <el-table-column prop="created_at" label="创建时间"></el-table-column>
      </el-table>
    </el-dialog>

    <div class="block">
      <el-pagination
        @current-change="currentChange"
        :current-page.sync="current"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="size"
        layout="sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="sizeChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import API from "@/api//index.js";

export default {
  inject: ["reload"],

  data() {
    return {
      loading: true,
      tableDate: [],
      current: 1,
      total: 0,
      size: 10,
      name: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      time: "",
      start: "",
      end: "",
      user_id: "",
      dialogDetail: false,
      detailData: [],
    };
  },
  mounted() {
    this.getSign();
  },
  methods: {
    getSign() {
      var self = this;
      API.sign(self.current, self.size)
        .then((res) => {
          self.loading = false;
          self.tableDate = res.data;
          self.total = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
    },
    currentChange(val) {
      var self = this;
      self.loading = true;
      self.current = val;
      if (self.name) {
        API.sign(val, self.size, self.name)
          .then((res) => {
            self.loading = false;
            self.tableDate = res.data;
            self.total = res.total;
          })
          .catch((err) => {
            self.loading = false;
          });
      } else if (self.time) {
        API.sign(val, self.size, self.name, self.start, self.end).then(
          (res) => {
            self.loading = false;
            self.tableDate = res.data;
            self.total = res.total;
          }
        );
      } else {
        API.sign(val, self.size)
          .then((res) => {
            self.loading = false;
            self.tableDate = res.data;
            self.total = res.total;
          })
          .catch((err) => {
            self.loading = false;
          });
      }
    },
    sizeChange(val) {
      var self = this;
      self.loading = true;
      self.size = val;
      if (self.name) {
        API.sign(self.current, val, self.name)
          .then((res) => {
            self.loading = false;
            self.tableDate = res.data;
            self.total = res.total;
          })
          .catch((err) => {
            self.loading = false;
          });
      } else if (self.time) {
        API.sign(self.current, val, self.name, self.start, self.end).then(
          (res) => {
            self.loading = false;
            self.tableDate = res.data;
            self.total = res.total;
          }
        );
      } else {
        API.sign(self.current, val)
          .then((res) => {
            self.loading = false;
            self.tableDate = res.data;
            self.total = res.total;
          })
          .catch((err) => {
            self.loading = false;
          });
      }
    },

    search() {
      var self = this;
      self.time = "";
      API.sign(self.current, self.size, self.name)
        .then((res) => {
          self.$message.success("搜索成功");
          self.loading = false;
          self.tableDate = res.data;
          self.total = res.total;
        })
        .catch((err) => {
          self.loading = false;
        });
    },

    timeChange(value) {
      var self = this;
      self.start = value[0];
      self.end = value[1];
      self.loading = true;
      API.sign(self.current, self.size, self.name, self.start, self.end).then(
        (res) => {
          self.loading = false;
          self.tableDate = res.data;
          self.total = res.total;
        }
      );
    },

    handleDetail(index, row) {
      var self = this;
      self.dialogDetail = true;
      self.user_id = row.user_id;
      API.signs(self.user_id).then((res) => {
        self.$message.success("获取数据成功");
        self.detailData = res;
      });
    },

    refresh() {
      this.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>