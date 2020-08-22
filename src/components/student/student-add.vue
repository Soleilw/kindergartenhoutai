<template>
  <div>
    <div class="handle-box">
      <div class="btn">
        <el-button type="primary" @click="dialogStudent = true">批量录入学生（上传EXCEL文件）</el-button>
      </div>
    </div>

    <!-- 导入Excel表 -->
    <el-dialog
      title="添加学生信息"
      :visible.sync="dialogStudent"
      width="500px"
      :close-on-click-modal="false"
    >
      <div class="handle-box">
        <div class="btn">
          <el-select v-model="grade" placeholder="请选择年级" @change="gradeOnChange">
            <el-option
              v-for="item in gradeList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="btn">
          <el-select v-model="class_id" placeholder="请选择班级">
            <el-option
              v-for="item in classList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        
      </div>
      <div class="btn">
        <el-button type="primary" icon="el-icon-download">点击下载文件示例</el-button>
      </div>
      <el-upload
        class="upload-demo"
        ref="upload"
        drag
        action="https://school.fengniaotuangou.cn/import/students"
        :data="classData"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        :on-success="handleSuccess"
        :headers="uploadHeader"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div slot="tip" class="el-upload__tip">只能上传EXCEL文件</div>
      </el-upload>
      <div class="upload-btn">
        <el-button type="primary" @click="upload">导入数据</el-button>
      </div>
    </el-dialog>

    <el-table
      :data="tableDate"
      ref="multipleTable"
      class="aip-table"
      border
      :header-cell-style="{background:'#f0f0f0'}"
    >
      <el-table-column label="名称" type="selection"></el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="文件名"></el-table-column>
      <el-table-column prop="remark" label="上传时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDel(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="totalPage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import API from "@/api/index.js";

export default {
  name: "studentadd",
  data() {
    return {
      dialogStudent: false,
      grade: "",
      gradeList: [],
      class_id: "",
      classList: [],
      fileList: [],
      classData: {
        class_id: "", // 上传文件带参数
      },

      tableDate: [],
      currentPage: 1,
      totalPage: 0,
    };
  },
  computed: {
    uploadHeader() {
      return {
        token: localStorage.getItem("token"),
      };
    },
  },
  mounted() {
    this.getGrade();
    this.getClass();
  },
  methods: {
    // 获取年级
    getGrade() {
      var self = this;
      API.grades(self.currentPage).then((res) => {
        self.gradeList = res.data;
      });
    },
    getClass(grade_id) {
      var self = this;
      // API.classes1(grade_id,30).then(res => {
      // 	self.classList = res.data;
      // })
      API.classes(1, 1000, grade_id).then((res) => {
        self.classList = res.data;
      });
    },
    // 年级选中
    gradeOnChange(value) {
      var self = this;
      self.grade = value;
      self.getClass(value);
    },
    // 操作
    handleDel() {},
    // 导入文档
    upload() {
      this.classData.class_id = this.class_id;
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleSuccess(file, fileList) {
      this.dialogStudent = false;
      this.$message.success("导入成功");
      this.fileList = [];
    },
    // 分页
    handleCurrentChange() {},
  },
};
</script>


<style scoped>
.upload-btn {
  margin-top: 10px;
}
</style>
