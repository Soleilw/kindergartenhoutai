<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <div class="handle-box">
      <div class="btn">
        <el-button type="primary" @click="addClass">添加班级</el-button>
      </div>
      <div class="btn">
        <el-select v-model="grade" placeholder="请选择年级" @change="gradeChange">
          <el-option v-for="item in gradeList" :key="item.id" :label="item.title" :value="item.id"></el-option>
        </el-select>
      </div>
    </div>
    <el-dialog title="添加班级" :visible.sync="dialogClass" width="600px" :close-on-click-modal="false">
      <div class="box">
        <el-form :model="form" label-width="80px">
          <el-form-item label="选择年级">
            <el-select v-model="form.grade_id" placeholder="请选择年级">
              <el-option v-for="item in formGradeList" :key="item.id" :label="item.title" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="班级名称">
            <el-input v-model="form.title" placeholder="请输入班级名称"></el-input>
          </el-form-item>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" @click="newClass">提交</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>

    <el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0'}" ref="multipleTable">
      <el-table-column prop="id" label="班级ID" width="150px"></el-table-column>
      <el-table-column prop="grade" label="年级" width="150px"></el-table-column>
      <el-table-column prop="title" label="班级" width="150px"></el-table-column>
      <el-table-column prop="teacher.name" label="班主任" width="150px"></el-table-column>
      <el-table-column prop="updated_at" label="更新时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleStudent(scope.$index,scope.row)">查看学生</el-button>
          <el-button size="mini" type="primary" @click="handleTeacher(scope.$index,scope.row)">教师列表</el-button>
          <el-button size="mini" type="danger" @click="handleDel(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogDel" title="删除年级" width="20%" align="center" :close-on-click-modal="false">
      <div style="font-size: 20px; margin-bottom: 30px;">是否删除该班级</div>
      <span>
        <el-button type="primary" @click="toDel">删除</el-button>
        <el-button type="danger" @click="dialogDel = false">取消</el-button>
      </span>
    </el-dialog>

    <!-- 更换人脸图片 -->
    <el-dialog title="更换人脸" :visible.sync="dialogFace" :close-on-click-modal="false" width="500px">
      <div class="box">
        <el-form :model="familyForm">
          <!-- 提示 -->
          <el-form-item label="只允许进校">
            <el-radio-group v-model="familyForm.only_in">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="2">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="tips">
            <p>
              <span>提示：</span>更换后的人脸照片会覆盖掉原有的人脸照片！
            </p>
          </div>
          <el-form-item label="更换人脸图片">
            <el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1" :before-upload="beforeAvatarUpload"
              :auto-upload="false" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-exceed="handleExceed"
              :on-change="handleChange" :data="imgData">
              <el-button size="small" type="primary">选择图片</el-button>
            </el-upload>
            <div v-if="hasNewImage" style="color: red; font-size: 12px;">* 点击文件名可删除所选图片</div>

            <div class="up-img" v-if="old_href">
              <span style="display: flex;justify-items: center;color: #409eff;">原人脸图片</span>
              <img class="pic-box" :src="old_href" />
            </div>
            <div class="up-img" v-if="familyForm.href">
              <span style="display: flex;justify-items: center;color: #67C23A;">新人脸图片</span>
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

    <!-- 手动更换人脸 -->
    <el-dialog title="手动更换人脸" :visible.sync="dialogMoanulFace" :close-on-click-modal="false" width="500px">
      <div class="box">
        <el-form :model="moanulFaceForm">
          <div class="tips">
            <p>
              <span>提示：</span>更换后的人脸照片会覆盖掉原有的人脸照片！
            </p>
          </div>
          <el-form-item label="更换人脸图片">
            <el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1"
              :before-upload="beforeAvatarUpload1" :auto-upload="false" :on-success="handleAvatarSuccess1"
              :on-remove="handleRemove1" :on-exceed="handleExceed1" :on-change="handleChange1" :data="imgData">
              <el-button size="small" type="primary">选择图片</el-button>
            </el-upload>
            <div v-if="hasNewImage" style="color: red; font-size: 12px;">* 点击文件名可删除所选图片</div>

            <div class="up-img" v-if="old_href">
              <span style="display: flex;justify-items: center;color: #409eff;">原人脸图片</span>
              <img class="pic-box" :src="old_href" />
            </div>
            <div class="up-img" v-if="moanulFaceForm.create_face">
              <span style="display: flex;justify-items: center;color: #67C23A;">新人脸图片</span>
              <img class="pic-box" :src="moanulFaceForm.create_face" />
            </div>
            <div class="up-img" v-else>
              <img class="pic-box" :src="change_href" />
            </div>
          </el-form-item>
          <div class="submit">
            <el-form-item>
              <el-button type="primary" @click="changeFace1">提交</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>

    <!-- 查看学生 -->
    <el-dialog title="查看学生" :visible.sync="dialogStudent" width="1000px" :close-on-click-modal="false">
      <div class="box">
        <div style="margin-bottom: 20px;">
          <span style="margin-right: 20px">班级总人数：{{studentTotal}}</span>
          <span style="margin-right: 20px">审核通过人数：{{approved}}</span>
          <span style="margin-right: 20px">审核中人数：{{underReview}}</span>
          <span style="margin-right: 20px">未提交审核人数：{{notSubmitted}}</span>
        </div>
        <el-table :data="studentDate" border :header-cell-style="{background:'#f0f0f0'}" max-height="620">
          <el-table-column prop="number" label="学号"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="sex" label="性别">
            <template slot-scope="scope">
              <span v-text="scope.row.sex == '1' ? '男' : '女'"></span>
            </template>
          </el-table-column>
          <el-table-column prop="face_image" label="人脸头像">
            <template slot-scope="scope">
              <img :src="scope.row.face_image" alt style="max-width:180px;max-height:80px;" />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300px">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="handleFace(scope.$index,scope.row)">更换人脸照片</el-button>
              <el-button size="mini" type="primary" @click="handleManualFace(scope.$index, scope.row)">手动上传人脸
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="block">
          <el-pagination @current-change="studentCurrentChange" :current-page.sync="studentCurrent"
            :page-size="studentSize" layout="prev, pager, next, jumper" :total="studentTotal"></el-pagination>
        </div>
      </div>
    </el-dialog>
    <!-- 查看教师 -->
    <el-dialog title="查看教师" :visible.sync="dialogTeacher" width="600px" align="center" :close-on-click-modal="false">
      <div class="box">
        <el-table :data="TeacherDate" ref="multipleTable" border :header-cell-style="{background:'#f0f0f0'}">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="href" label="人脸图像">
            <template slot-scope="scope">
              <img :src="scope.row.href" alt style="max-width:180px;max-height:80px;" />
            </template>
          </el-table-column>
        </el-table>
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
  import API from "@/api/index.js";
  import md5 from "blueimp-md5";
  import axios from "axios";

  export default {
    name: "classms",
    data() {
      return {
        loading: true,
        dialogClass: false,
        form: {
          grade_id: "",
          title: "",
        },
        formGradeList: [],
        grade: "",
        gradeList: [{
          value: 0,
          title: "全部",
        }, ],

        // 操作
        dialogDel: false,
        id: "", // 删除班级的id
        dialogStudent: false,
        studentDate: [{}],
        approved: "", // 审核通过人数
        underReview: "", // 审核中人数
        notSubmitted: "", // 为提交审核
        dialogTeacher: false,
        TeacherDate: [],
        dialogFace: false,
        familyList: [],
        // nickname: '',
        imgData: {
          key: "",
          token: "",
        },
        fileName: "",
        suffix: "",
        qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
        familyForm: {
          href: "",
          only_in: "",
          id: "",
        },
        old_href: "", // 原人脸图片
        change_href: "",
        hasNewImage: false,
        new_file: "",

        dialogMoanulFace: false,
        moanulFaceForm: {
          only_in: "",
          id: "",
          create_face: "",
        },

        tableData: [],
        current: 1,
        total: 0,
        size: 10,
        studentCurrent: 1,
        studentTotal: 0,
        studentSize: 10,
        permissions: localStorage.getItem("permissions"),
        role: localStorage.getItem("role"),
      };
    },
    mounted() {
      this.getGrade();
      this.getClass(this.current);
      this.getQiniuToken();
    },
    methods: {
      // 获取年级列表
      getGrade() {
        var self = this;
        API.grades(1, 20).then((res) => {
          self.gradeList = res.data;
        });
      },
      addClass() {
        var self = this;
        self.dialogClass = true;
        API.grades(self.current).then((res) => {
          self.formGradeList = res.data;
        });
      },
      // 获取班级列表
      getClass(cur, list, grade) {
        var self = this;
        API.classes(cur, list, grade)
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
        self.current = val;
        self.loading = true;
        self.getClass(val, self.size, self.grade);
      },
      // 每页多少条
      sizeChange(val) {
        var self = this;
        self.size = val;
        self.loading = true;
        self.getClass(1, val, self.grade);
        self.current = 1;
      },

      newClass() {
        var self = this;
        API._class(self.form).then((response) => {
          self.$message.success("提交成功");
          self.dialogClass = false;
          self.getClass(self.current);
          self.grade = "";
          self.form = {};
        });
      },

      // 根据年级筛选
      gradeChange() {
        var self = this;
        self.current = 1;
        self.loading = true;
        API.classes(1, self.size, self.grade).then((res) => {
          self.loading = false;
          self.tableData = res.data;
          self.total = res.total;
        }).catch(err => {
          self.loading = false;
        });
      },
      // 操作
      getStudents(cur, list, id) {
        var self = this;
        API.students(cur, list, id).then(
          (res) => {
            self.$message.success("获取数据成功");
            self.studentDate = res.data;
            self.studentTotal = res.total;
          }
        );
      },
      // 查看学生的分页
      studentCurrentChange(val) {
        var self = this;
        self.studentCurrent = val;
        self.getStudents(val, self.studentSize, self.id);
      },

      handleStudent(index, row) {
        var self = this;
        self.dialogStudent = true;
        self.id = row.id;
        self.studentCurrent = 1;
        self.getStudents(self.studentCurrent, self.studentSize, self.id);
        API.classCheckCount(self.id).then((res) => {
          self.approved = res.pass;
          self.underReview = res.toAudit;
          self.notSubmitted = res.noSubmit;
        });
      },
      handleTeacher(index, row) {
        var self = this;
        if (row.teacher) {
          self.dialogTeacher = true;
          self.TeacherDate = [row.teacher];
        } else {
          self.$message.warning("暂无教师信息");
        }
      },
      handleDel(index, row) {
        var self = this;
        self.dialogDel = true;
        self.id = row.id;
      },
      toDel() {
        var self = this;
        API.delClass(self.id).then((res) => {
          self.$message.success("删除成功");
          self.dialogDel = false;
          self.gradeChange();
        });
      },
      // 更换人脸
      handleFace(index, row) {
        var self = this;
        self.change_href = "";
        self.dialogFace = true;
        self.familyForm.id = row.id;
        self.familyForm.only_in = row.only_in;
        self.old_href = row.face_image;
      },

      // 人脸信息
      handleChange(file) {
        var self = this;
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
        self.fileName = md5(file.name);
        self.suffix = file.name.substring(file.name.lastIndexOf(".") + 1);
        self.imgData.key = `tmp_${self.fileName}.${self.suffix}`;
      },
      changeFace() {
        var self = this;
        if (self.change_href === "") {
          self.familyForm.href = self.old_href;
          API.studentFace(self.familyForm).then((res) => {
            self.$message.success("上传成功");
            self.familyForm.href = "";
            self.dialogFace = false;
            self.getStudents(self.studentCurrent, self.studentSize, self.id);
          });
        } else {
          this.$refs.upload.submit();
        }
      },
      handleAvatarSuccess(res, file) {
        var self = this;
        file.url = `${self.qiniuaddr}/${res.key}`;
        self.familyForm.href = file.url;
        API.studentFace(self.familyForm).then((res) => {
          self.$message.success("上传成功");
          self.getStudents(self.studentCurrent, self.studentSize, self.id);
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

      // 手动更换人脸
      handleManualFace(index, row) {
        var self = this;
        self.change_href = "";
        self.dialogMoanulFace = true;
        self.moanulFaceForm.id = row.id;
        self.moanulFaceForm.only_in = row.only_in;
        self.old_href = row.face_image;
      },

      // 人脸信息
      handleChange1(file) {
        var self = this;
        self.change_href = URL.createObjectURL(file.raw);
        self.hasNewImage = true;
      },
      handleRemove1(file) {
        var self = this;
        self.change_href = "";
        self.hasNewImage = false;
      },
      beforeAvatarUpload1(file) {
        var self = this;
        self.fileName = md5(file.name);
        self.suffix = file.name.substring(file.name.lastIndexOf(".") + 1);
        self.imgData.key = `tmp_${self.fileName}.${self.suffix}`;
      },
      changeFace1() {
        var self = this;
        if (self.change_href === "") {
          self.moanulFaceForm.create_face = self.old_href;
          API.studentEditFace(self.moanulFaceForm).then((res) => {
            self.$message.success("上传成功");
            self.moanulFaceForm.create_face = "";
            self.dialogMoanulFace = false;
            self.dialogStudent = true;
            self.getStudents(self.studentCurrent, self.studentSize, self.id);
          });
        } else {
          this.$refs.upload.submit();
        }
      },
      handleAvatarSuccess1(res, file) {
        var self = this;
        file.url = `${self.qiniuaddr}/${res.key}`;
        self.moanulFaceForm.create_face = file.url;
        API.studentEditFace(self.moanulFaceForm).then((res) => {
          self.$message.success("上传成功");
          self.dialogStudent = true;
          self.getStudents(self.studentCurrent, self.studentSize, self.id);
          self.$refs.upload.clearFiles();
          self.moanulFaceForm.create_face = "";
          self.change_href = "";
          self.old_href = "";
          self.imgData.key = "";
          self.moanulFaceForm.user_id = "";
          self.dialogMoanulFace = false;
        });
      },
      handleExceed1(file, fileList) {
        //图片上传超过数量限制
        var self = this;
        self.$message.error("上传图片不能超过1张!重新上传");
        self.$refs.upload.clearFiles();
        self.moanulFaceForm.create_face = "";
        self.imgData.key = "";
        self.moanulFaceForm.user_id = "";
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

<style scoped>
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
</style>