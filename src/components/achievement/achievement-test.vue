<template>
  <div>
    <div class="handle-box">
      <div class="btn">
        <el-button type="primary" @click="addTest">添加考试</el-button>
      </div>
    </div>

    <el-dialog title="添加考试" :visible.sync="dialogTest">
      <div class="box">
        <el-form :model="form" label-width="80px">
          <el-form-item label="时间">
            <el-date-picker
              v-model="form.time"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="form.title" placeholder="请输入标题(例:期中考试)"></el-input>
          </el-form-item>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" @click="newTest">提交</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>

    <el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0'}">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleDetail(scope.$index, scope.row)">考试详情</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    <!-- 查看考试详情 -->
    <el-dialog :visible.sync="dialogDetail" title="考试详情" :close-on-click-modal="false" width="80%">
      <!-- <div class="handle-box">
        <div class="btn">
          <el-select v-model="grade" placeholder="请选择年级" @change="gradeChange">
            <el-option
              v-for="item in gradeList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="btn">
          <el-select v-model="classes" placeholder="请选择班级">
            <el-option
              v-for="item in classesList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>

        <div class="btn">
          <el-button type="primary" @click="search()">搜索</el-button>
        </div>
      </div>-->

      <el-table :data="testDetail">
        <!-- <el-table-column prop="id" label="ID"></el-table-column> -->
        <el-table-column prop="grade" label="年级"></el-table-column>
        <el-table-column prop="class" label="班级"></el-table-column>
        <el-table-column prop="number" label="学号"></el-table-column>
        <el-table-column prop="name" label="学生姓名"></el-table-column>
        <el-table-column prop="score" label="总分"></el-table-column>
        <el-table-column prop="class_ranking" label="班级排名"></el-table-column>
        <el-table-column prop="grade_ranking" label="年级排名"></el-table-column>
        <el-table-column prop="class_advance" label="班级进退步"></el-table-column>
        <el-table-column prop="grade_advance" label="年级进退步"></el-table-column>
        <el-table-column prop="scores[0].subject" label="科目"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleDel(scope.$index,scope.row)">查看各科成绩</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleTestDetailCurrent"
          :current-page.sync="testDetailCurrentPage"
          :page-sizes="[10, 20, 30, 40, 50]"
          :page-size="testDetailPageSize"
          layout="sizes, prev, pager, next, jumper"
          :total="testDetailTotalPage"
          @size-change="handleTestDetailSizeChange"
        ></el-pagination>
      </div>
    </el-dialog>
    <!-- 删除提示框 -->
    <el-dialog
      :visible.sync="dialogDel"
      title="删除资讯"
      width="20%"
      align="center"
      :close-on-click-modal="false"
    >
      <div style="font-size: 20px; margin-bottom: 30px;">是否删除</div>
      <span>
        <el-button type="primary" @click="toDel">删除</el-button>
        <el-button type="danger" @click="dialogDel = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import API from "@/api/index.js";

export default {
  name: "messagetype",
  data() {
    return {
      dialogTest: false,
      id: "",
      dialogDel: false,
      dialogDetail: false, // 查看考试详情
      testDetail: [],
      testDetailCurrentPage: 1,
      testDetailPageSize: 10,
      testDetailTotalPage: 0,
      gradeList: [],
      classesList: [],
      grade: "", // 选择年级
      classes: "", // 选择班级
      form: {
        title: "",
        time: "",
      },
      tableDate: [],

      currentPage: 1,
      pageSize: 10,
      totalPage: 0,
      exam_id: "",
      grade_id: "",
    };
  },
  mounted() {
    this.getExams();
    // this.getDetail();
  },
  methods: {
    getExams() {
      var self = this;
      API.exams(self.currentPage).then((res) => {
        self.tableDate = res.data;
        self.totalPage = res.total;
      });
    },
    // 考试详情
    getDetail() {
      var self = this;
      API.examsDetail(
        self.testDetailCurrentPage,
        self.testDetailPageSize,
        self.exam_id
      ).then((res) => {
        console.log("考试详情", res);
        self.testDetail = res.data;
        self.testDetailTotalPage = res.total;
      });
    },

    // 获取年级
    /*   getGrade() {
      var self = this;
      API.grades(self.currentPage, self.pageSize).then((res) => {
        console.log("getGrade", res);
        self.gradeList = res.data;
      });
    },
    gradeChange(val) {
      var self = this;
      self.grade_id = val;
      self.getClass();
    },
    // 获取班级
    getClass() {
      var self = this;
      API.classes(self.currentPage, self.pageSize, self.grade_id).then(
        (res) => {
          console.log("getclass", res);
          self.classesList = res.data;
        }
      );
    },
  */
    addTest() {
      var self = this;
      self.dialogTest = true;
      self.form = {
        title: "",
        time: "",
      };
    },

    newTest() {
      var self = this;
      self.form.title = self.form.time + " " + self.form.title;
      API.exam(self.form).then((res) => {
        self.$message.success("提交成功");
        self.dialogTest = false;
        self.getExams();
        self.form = {
          title: "",
          time: "",
        };
      });
    },

    handleDetail(index, row) {
      var self = this;
      self.dialogDetail = true;
      self.exam_id = row.id;
      // console.log(row);
      self.getDetail();
      self.getGrade();
    },

    handleDelete(index, row) {
      var self = this;
      self.dialogDel = true;
      self.id = row.id;
    },

    toDel() {
      var self = this;
      API.delExam(self.id).then((res) => {
        self.$message.success("删除成功");
        self.dialogDel = false;
        self.getExams();
      });
    },

    // 分页
    handleCurrentChange(val) {
      var self = this;
      self.currentPage = val;
      API.exams(val, self.pageSize).then((res) => {
        self.tableDate = res.data;
        self.totalPage = res.total;
      });
    },

    handleSizeChange(val) {
      var self = this;
      self.pageSize = val;
      API.exams(1, val).then((res) => {
        self.tableDate = res.data;
        self.totalPage = res.total;
      });
    },
    // 详情分页
    handleTestDetailCurrent(val) {
      var self = this;
      self.testDetailCurrentPage = val;
      API.examsDetail(val, self.testDetailPageSize, self.exam_id).then(
        (res) => {
          self.testDetail = res.data;
        }
      );
    },
    handleTestDetailSizeChange(val) {
      var self = this;
      self.testDetailPageSize = val;
      API.examsDetail(1, val, self.exam_id).then((res) => {
        self.testDetail = res.data;
      });
    },
  },
};
</script>

<style scoped>
.upload-btn {
  margin-top: 10px;
}

.pic-box {
  max-width: 100%;
  height: 200px;
}
</style>
