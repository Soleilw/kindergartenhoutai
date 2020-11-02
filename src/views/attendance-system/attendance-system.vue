<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <el-input placeholder="请输入用户名" v-model="name" @keyup.enter.native="search(name)" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search(name)"></el-button>
          <el-button slot="append" icon="el-icon-refresh" @click="refresh"></el-button>
        </el-input>
      </div>
      <div class="btn">
        <el-date-picker v-model="time" type="daterange" align="right" unlink-panels range-separator="至"
          start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" @change="timeChange"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
      <div class="btn" v-if="username != 'admin'">
        <span>设置上下班时间: </span>
        <el-time-select placeholder="请选择上班时间" v-model="up_time" @change="changeUp" :picker-options="{
            start: '06:00',
            step: '00:05',
            end: '21:30',
          }">
        </el-time-select>
        <el-time-select placeholder="请选择下班时间" v-model="below_time" @change="changeBelow" :picker-options="{
            start: '06:00',
            step: '00:05',
            end: '21:30',
            minTime: up_time,
          }">
        </el-time-select>
        <el-button slot="append" icon="el-icon-setting" @click="toSet"></el-button>
      </div>
    </div>
    <div class="handle-box">
      <div class="btn">
        <el-button type="primary" size="medium" icon="el-icon-download" @click="exportData">批量导出数据</el-button>
      </div>
    </div>

    <el-table :data="tableDate" border :header-cell-style="{ background: '#f0f0f0' }"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="user_id" label="用户ID"></el-table-column>
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column prop="count" label="签到总数"></el-table-column>
      <el-table-column prop="up_count" label="上班签到"></el-table-column>
      <el-table-column prop="below_count" label="下班签到"></el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleDetail(scope.$index, scope.row)">签到详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="签到详情" :visible.sync="dialogDetail" :close-on-click-modal="false" width="1200px">
      <div class="handle-box">
        <div class="btn">
          <span>签到方式: </span>
          <el-select v-model="auditState" placeholder="请选择签到方式" @change="changeAudit">
            <el-option v-for="item in auditList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="btn">
          <span>签到时间: </span>
          <el-select v-model="auditTime" placeholder="请选择签到时间" @change="changeTime">
            <el-option v-for="item in timeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="btn">
          <el-date-picker v-model="time1" type="daterange" align="right" unlink-panels range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" @change="timeChange1"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </div>
      <el-table :data="detailData" border :header-cell-style="{ background: '#f0f0f0' }">
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
        <el-table-column prop="text" label="状态"></el-table-column>
        <el-table-column prop="created_at" label="打卡时间"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @current-change="detailsCurrentChange" :current-page.sync="detailsCurrent"
          :page-sizes="[10, 20, 30, 40, 50]" :page-size="detailsSize" layout="sizes, prev, pager, next, jumper"
          :total="detailsTotal" @size-change="detailsSizeChange">
        </el-pagination>
      </div>
    </el-dialog>

    <div class="block">
      <el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="size" layout="sizes, prev, pager, next, jumper" :total="total" @size-change="sizeChange">
      </el-pagination>
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
        detailsCurrent: 1,
        detailsTotal: 0,
        detailsSize: 10,
        name: "",
        pickerOptions: {
          shortcuts: [{
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
        time1: "",
        start1: "",
        end1: "",
        user_id: "",
        dialogDetail: false,
        detailData: [],
        auditState: "",
        auditList: [{
            value: 1,
            label: "刷脸",
          },
          {
            value: 2,
            label: "手动",
          },
        ],
        auditTime: "",
        timeList: [{
            value: 1,
            label: "上班",
          },
          {
            value: 2,
            label: "下班",
          },
        ],
        type: "",
        status: "",
        up_time: "",
        below_time: "",
        username: localStorage.getItem("username"),
        idList: []
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

      handleSelectionChange(val) {
        var self = this;
        var arr = [];
        val.forEach(item => {
          arr.push(item.id);
          self.idList = Array.from(new Set(arr))
        })
      },

      exportData() {
        var self = this;
        if (self.idList.length > 0) {
          API.exportSign(self.idList).then(res => {
            console.log('导出数据res', res);
            window.open(res.request.responseURL);
            this.reload();
          })
        } else {
          self.$message.warning("请选择要导出的数据! ");
        }
      },

      search() {
        var self = this;
        self.time = "";
        self.current = 1;
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
        self.auditState = "";
        self.auditTime = "";
        self.time1 = "";
        self.status = "";
        self.type = "";
        self.detailsCurrent = 1;
        self.start1 = '';
        self.end1 = '';
        API.signs(self.detailsCurrent, self.detailsSize, self.user_id).then((res) => {
          self.$message.success("获取数据成功");
          self.detailData = res.data;
          self.detailsTotal = res.total
        });
      },
      changeAudit(val) {
        var self = this;
        self.type = val;
        self.detailsCurrent = 1;
        API.signs(
          self.detailsCurrent,
          self.detailsSize,
          self.user_id,
          self.type,
          self.status,
          self.start1,
          self.end1
        ).then((res) => {
          self.$message.success("获取数据成功");
          self.detailData = res.data;
          self.detailsTotal = res.total
        });
      },

      changeTime(val) {
        var self = this;
        self.status = val;
        self.detailsCurrent = 1;
        API.signs(
          self.detailsCurrent,
          self.detailsSize,
          self.user_id,
          self.type,
          self.status,
          self.start1,
          self.end1
        ).then((res) => {
          self.$message.success("获取数据成功");
          self.detailData = res.data;
          self.detailsTotal = res.total
        });
      },

      timeChange1(value) {
        var self = this;
        self.start1 = value[0];
        self.end1 = value[1];
        self.detailsCurrent = 1;
        if (self.type || self.status) {
          API.signs(
            self.detailsCurrent,
            self.detailsSize,
            self.user_id,
            self.type,
            self.status,
            self.start1,
            self.end1
          ).then((res) => {
            self.$message.success("获取数据成功");
            self.detailData = res.data;
            self.detailsTotal = res.total
          });
        } else {
          API.signsTime(self.detailsCurrent, self.detailsSize, self.user_id, self.start1, self.end1).then((res) => {
            self.$message.success("获取数据成功");
            self.detailData = res.data;
            self.detailsTotal = res.total
          });
        }
      },
      detailsCurrentChange(val) {
        var self = this;
        self.detailsCurrent = val;
        if (self.type || self.status) {
          API.signs(
            val,
            self.detailsSize,
            self.user_id,
            self.type,
            self.status,
            self.start1,
            self.end1
          ).then((res) => {
            self.$message.success("获取数据成功");
            self.detailData = res.data;
            self.detailsTotal = res.total
          });
        } else if (self.start1 || self.end1) {
          API.signsTime(val, self.detailsSize, self.user_id, self.start1, self.end1).then((res) => {
            self.$message.success("获取数据成功");
            self.detailData = res.data;
            self.detailsTotal = res.total
          });
        } else {
          API.signs(val, self.detailsSize, self.user_id).then((res) => {
            self.$message.success("获取数据成功");
            self.detailData = res.data;
            self.detailsTotal = res.total
          });
        }
      },
      detailsSizeChange(val) {
        var self = this;
        self.detailsSize = val;
        if (self.type || self.status) {
          API.signs(
            self.detailsCurrent,
            val,
            self.user_id,
            self.type,
            self.status,
            self.start1,
            self.end1
          ).then((res) => {
            self.$message.success("获取数据成功");
            self.detailData = res.data;
            self.detailsTotal = res.total
          });
        } else if (self.start1 || self.end1) {
          API.signsTime(self.detailsCurrent, val, self.user_id, self.start1, self.end1).then((res) => {
            self.$message.success("获取数据成功");
            self.detailData = res.data;
            self.detailsTotal = res.total
          });
        } else {
          API.signs(self.detailsCurrent, val, self.user_id).then((res) => {
            self.$message.success("获取数据成功");
            self.detailData = res.data;
            self.detailsTotal = res.total
          });
        }
      },

      changeUp(val) {
        var self = this;
        self.up_time = val;
      },
      changeBelow(val) {
        var self = this;
        self.below_time = val;
      },
      toSet() {
        var self = this;
        self.loading = true;
        API.editSchool(self.up_time, self.below_time)
          .then((res) => {
            self.loading = false;
            self.$message.success("设置成功! ");
            self.up_time = "";
            self.below_time = "";
          })
          .catch((err) => {
            self.loading = false;
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