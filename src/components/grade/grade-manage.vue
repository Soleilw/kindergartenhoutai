<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <el-button type="primary" @click="addGrade">添加年级</el-button>
      </div>
    </div>

    <el-dialog title="添加年级" :visible.sync="dialogGrade" width="600px" :close-on-click-modal="false">
      <div class="box">
        <el-form :model="form" label-width="80px">
          <el-form-item label="年级">
            <el-select v-model="grade" placeholder="请选择年级" @change="gradeChange">
              <el-option v-for="item in gradeList" :key="item.index" :label="item.name" :value="item.num"></el-option>
            </el-select>
          </el-form-item>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" @click="newGrade">提交</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>

    <el-table :data="tableData" ref="multipleTable" border :header-cell-style="{background:'#f0f0f0'}">
      <el-table-column prop="id" label="年级ID"></el-table-column>
      <el-table-column prop="title" label="年级名称"></el-table-column>
      <el-table-column prop="updated_at" label="更新时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDel(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogDel" title="删除年级" width="20%" align="center" :close-on-click-modal="false">
      <div style="font-size: 20px; margin-bottom: 30px;">是否删除该年级</div>
      <span>
        <el-button type="primary" @click="toDel">删除</el-button>
        <el-button type="danger" @click="dialogDel = false">取消</el-button>
      </span>
    </el-dialog>

    <div class="block">
      <el-pagination @current-change="currentChange" :current-page.sync="current"
        :page-sizes="[10, 20, 30, 40, 50]" :page-size="size" layout="sizes, prev, pager, next, jumper" :total="total"
        @size-change="sizeChange"></el-pagination>
    </div>
  </div>
</template>

<script>
  import API from "@/api/index.js";

  export default {
    name: "gradems",
    data() {
      return {
        loading: true,
        dialogGrade: false,
        form: {
          grade: "",
        },
        tableData: [],
        classList: [],
        dialogDel: false,
        grade_id: "",
        current: 1,
        total: 0,
        size: 10,

        permissions: localStorage.getItem("permissions"),
        role: localStorage.getItem("role"),
        grade: "",
        gradeList: [{
            num: 1,
            name: "一年级",
          },
          {
            num: 2,
            name: "二年级",
          },
          {
            num: 3,
            name: "三年级",
          },
          {
            num: 4,
            name: "四年级",
          },
          {
            num: 5,
            name: "五年级",
          },
          {
            num: 6,
            name: "六年级",
          },
          {
            num: 7,
            name: "初一",
          },
          {
            num: 8,
            name: "初二",
          },
          {
            num: 9,
            name: "初三",
          },

          {
            num: 10,
            name: "高一",
          },
          {
            num: 11,
            name: "高二",
          },
          {
            num: 12,
            name: "高三",
          },
          {
            num: 13,
            name: "小班",
          },
          {
            num: 14,
            name: "中班",
          },
          {
            num: 15,
            name: "大班",
          },
        ],
      };
    },
    mounted() {
      this.getGrade(this.current);
    },
    methods: {
      // 获取年级列表
      getGrade(cur, list) {
        var self = this;
        API.grades(cur, list)
          .then((res) => {
            self.tableData = res.data;
            self.total = res.total;
            self.loading = false;
          })
          .catch((err) => {
            self.loading = false;
          });
      },
      // 分页
      currentChange(val) {
        var self = this;
        self.loading = true;
        self.current = val;
        self.getGrade(val);
      },
      // 每页多少条
      sizeChange(val) {
        var self = this;
        self.size = val;
        self.getGrade(1, val);
        self.current = 1;
      },

      // 增加年级
      addGrade() {
        var self = this;
        self.dialogGrade = true;
      },
      gradeChange(value) {
        var self = this;
        self.form.grade = value;
      },
      newGrade() {
        var self = this;
        API.grade(self.form).then((res) => {
          self.$message.success("提交成功");
          self.dialogGrade = false;
          self.getGrade(self.current);
          self.form = {};
          window.location.reload();
        });
      },
      // 操作
      handleDel(index, row) {
        var self = this;
        self.dialogDel = true;
        self.grade_id = row.id;
      },
      toDel() {
        var self = this;
        API.delGrade(self.grade_id)
          .then((res) => {
            self.$message.success("删除成功");
            self.dialogDel = false;
            self.getGrade(self.current);
          })
          .catch((err) => {});
      },
    },
  };
</script>

<style>
</style>