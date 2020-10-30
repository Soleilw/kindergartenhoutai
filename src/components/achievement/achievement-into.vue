<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="dialogExam = true">批量上传成绩单（上传EXCEL文件）</el-button>
			</div>
			<div class="btn">
				<el-popover placement="bottom" width="400" v-model="visible">
					<div style="margin-bottom: 10px; color: #2a9f93;">请选择科目生成成绩单示例模板</div>
					<div class="permission">
						<div v-for="(item,index) in subList" :key="index">
							<el-checkbox-group v-model="subjects" class="permission-item">
								<el-checkbox :label="subList[index]">{{subList[index]}}</el-checkbox>
							</el-checkbox-group>
						</div>
					</div>
					<!-- downloadTranscripte -->
					<div style="text-align: right; margin: 0">
						<el-button type="primary" size="mini" @click="downExample">确定</el-button>
					</div>
					<el-button type="warning" icon="el-icon-download" slot="reference">点击下载成绩单示例</el-button>
				</el-popover>
			</div>
		</div>

		<!-- 导入Excel表 -->
		<el-dialog title="添加成绩单" :visible.sync="dialogExam" width="500px" :close-on-click-modal="false">
			<div class="btn">
				<el-select v-model="test" placeholder="请选择考试场次" @change="examOnChange">
					<el-option v-for="item in testList" :key="item.id" :label="item.title" :value="item.id"></el-option>
				</el-select>
			</div>

			<el-upload class="upload-demo" ref="upload" drag action="https://school.fengniaotuangou.cn/import/exam" :data="examData"
			 :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" :on-success="handleSuccess" :headers="uploadHeader">
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

		<el-table :data="tableDate" class="aip-table" border :header-cell-style="{background:'#f0f0f0'}">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="file_name" label="文件名"></el-table-column>
			<el-table-column prop="updated_at" label="上传时间"></el-table-column>
			<el-table-column prop="status" label="导入情况">
				<template slot-scope="scope">
					<span v-if="scope.row.status == 1">成功</span>
					<span v-else-if="scope.row.status == 2">失败</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" @click="handleDownload(scope.$index,scope.row)">下载成绩表</el-button>
					<el-button size="mini" type="danger" @click="handleDel(scope.$index,scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 删除提示框 -->
		<el-dialog :visible.sync="dialogDel" title="删除成绩表" width="20%" align="center" :close-on-click-modal="false">
			<div style="font-size: 20px; margin-bottom: 30px;">是否删除该成绩表</div>
			<span>
				<el-button type="primary" @click="toDel">删除</el-button>
				<el-button type="danger" @click="dialogDel = false">取消</el-button>
			</span>
		</el-dialog>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 40, 50]"
			 :page-size="pageSize" layout="sizes, prev, pager, next, jumper" :total="totalPage" @size-change="handleSizeChange"></el-pagination>
		</div>
	</div>
</template>

<script>
	import API from "@/api/index.js";

	export default {
		name: "studentadd",
		data() {
			return {
				dialogDel: false,
				dialogExam: false,
				id: "",
				test: "",
				testList: [],
				exam_id: "",
				examList: [],
				fileList: [],
				examData: {
					exam_id: "", // 上传文件带参数
				},
				visible: false,
				subList: [], // 科目列表
				subjects: [], // 全选列表
				tableDate: [],
				currentPage: 1,
				totalPage: 0,
				pageSize: 10,
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
			this.getSubjects();
			this.getExams();
			this.getList();
		},
		methods: {
			// 获取列表
			getList() {
				var self = this;
				API.imports(self.currentPage, self.pageSize).then((res) => {
					console.log(res);
					self.tableDate = res.data;
					self.totalPage = res.total;
				});
			},
			// 考试场次选中
			examOnChange(value) {
				var self = this;
				self.test = value;
			},
			// 获取科目
			getSubjects() {
				var self = this;
				API.subjects().then((res) => {
					// console.log("获取科目", res);
					res.forEach((item) => {
						//   console.log(item.name);
						self.subList.push(item.name);
					});
				});
			},
			// 导出成绩单示例
			downExample() {
				var self = this;
				console.log(self.subjects);
				API.example(self.subjects).then((res) => {
					console.log(res);
					window.open(res.request.responseURL)
				});
			},
			// 获取考试场次
			getExams() {
				var self = this;
				API.exams(self.currentPage).then((res) => {
					console.log("getExams", res.data);
					self.testList = res.data;
					res.data.forEach((item) => {
						self.exam_id = item.id;
					});
				});
			},
			// 操作--删除
			handleDel(index, row) {
				var self = this;
				self.id = row.id;
				console.log(row);
				self.dialogDel = true;
			},
			toDel() {
				var self = this;
				API.delImport(self.id).then((res) => {
					self.$message.success("删除成功");
					self.dialogDel = false;
					self.getList();
				});
			},

			// 操作--下载成绩表
			handleDownload() {},

			// 导入文档
			upload() {
				this.examData.exam_id = this.exam_id;
				this.$refs.upload.submit();
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handleSuccess(file, fileList) {
				var self = this;
				self.dialogExam = false;
				self.$message.success("导入成功");
				self.getList();
				self.fileList = [];
				self.test = "";
			},
			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.currentPage = val;
				API.imports(val, self.pageSize).then((res) => {
					// console.log(res);
					self.tableDate = res.data;
					self.totalPage = res.total;
				});
			},
			handleSizeChange(val) {
				var self = this;
				self.pageSize = val;
				API.imports(self.currentPage, val).then((res) => {
					// console.log(res);
					self.tableDate = res.data;
					self.totalPage = res.total;
				});
			},
		},
	};
</script>


<style scoped>
	.upload-btn {
		margin-top: 10px;
	}

	.permission {
		display: flex;
		flex-wrap: wrap;
	}

	.permission-item {
		width: 80px;
		padding: 10px 0;
	}
</style>
