<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addStudent">添加学生</el-button>
			</div>
			<div class="btn">
				<el-input placeholder="输入学生学号/姓名" v-model="student" @keyup.enter.native="search(student)"
					class="input-with-select">
					<el-select v-model="type" placeholder="请选择搜索方式" slot="prepend" @change="changeType"
						style="width: 150px;">
						<el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search" @click="search(student)"></el-button>
				</el-input>
			</div>
		</div>

		<el-dialog title="添加学生" :visible.sync="dialogStudent" width="700px" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="年级">
						<el-select v-model="grade" placeholder="请选择年级" @change="gradeOnChange">
							<el-option v-for="item in gradeList" :key="item.id" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="班级">
						<el-select v-model="classValue" placeholder="请选择班级" @change="classOnChange">
							<el-option v-for="item in classList" :key="item.id" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="姓名">
						<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item label="学号">
						<el-input v-model="form.number" placeholder="请输入学号"></el-input>
					</el-form-item>
					<el-form-item label="性别">
						<el-radio-group v-model="form.sex">
							<el-radio :label="1">男</el-radio>
							<el-radio :label="2">女</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="form.age" placeholder="请输入年龄"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newStudent">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableData" ref="multipleTable" border :header-cell-style="{background:'#f0f0f0'}"
			max-height="620">
			<el-table-column prop="id" label="学生ID"></el-table-column>
			<el-table-column prop="number" label="学号"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="face_image" label="人脸信息">
				<template slot-scope="scope">
					<el-popover placement="top-start" title="" trigger="click">
						<img :src="scope.row.face_image" style="max-width:800px;max-height:800px;" />
						<img slot="reference" :src="scope.row.face_image" style="max-width:180px;max-height:80px;">
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="100px">
				<template slot-scope="scope">
					<span v-text="scope.row.sex == '1' ? '男' : '女'"></span>
				</template>
			</el-table-column>
			<el-table-column prop="age" label="年龄(岁)" width="100px"></el-table-column>
			<el-table-column prop="updated_at" label="更新时间"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-dropdown>
						<el-button type="primary">
							操作<i class="el-icon-arrow-down el-icon--right"></i>
						</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleFace(scope.$index, scope.row)">更换人脸
								</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleFamily(scope.$index, scope.row)">
									绑定家长</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleFaceLogs(scope.$index, scope.row)">
									查看进出记录</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑
								</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button type="danger" size="mini" @click="handleDel(scope.$index, scope.row)">删除
								</el-button>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="currentChange" :current-page.sync="current"
				:page-sizes="[10, 20, 30, 40, 50]" :page-size="size" layout="sizes, prev, pager, next, jumper"
				:total="total" @size-change="sizeChange"></el-pagination>
		</div>

		<!-- 绑定家长 -->
		<el-dialog title="绑定家长" :visible.sync="dialogFamily" :close-on-click-modal="false" width="500px">
			<div class="box">
				<el-form :model="bindFormFamily">
					<el-form-item label="选择家长">
						<el-select v-model="bindFormFamily.user_id" filterable remote placeholder="请选择家长"
							@change="familyChange" :remote-method="remoteMethod">
							<el-option v-for="item in familyList" :key="item.value"
								:label="item.value + ' ' + item.label" :value="item.value"></el-option>
						</el-select>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="bindFamily">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

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
						<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1"
							:before-upload="beforeAvatarUpload" :auto-upload="false" :on-success="handleAvatarSuccess"
							:on-remove="handleRemove" :on-exceed="handleExceed" :on-change="handleChange"
							:data="imgData">
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

		<!-- 进出记录 -->
		<el-dialog title="进出记录" :visible.sync="dialogFaceLogs" :close-on-click-modal="false" width="1000px">
			<div class="box">
				<el-table :data="FaceLogsDate" border :header-cell-style="{background:'#f0f0f0'}">
					<el-table-column prop="timestamp" label="时间"></el-table-column>
					<el-table-column prop="temp" label="温度"></el-table-column>
					<el-table-column prop="device.direction" label="进出校">
						<template slot-scope="scope">
							<span v-text="scope.row.device.direction == 'in' ? '进校' : '出校' "></span>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="block">
				<el-pagination @current-change="handleLogsCurrentChange" :current-page.sync="currentLogsPage"
					:page-size="10" layout="prev, pager, next, jumper" :total="logsTotalPage"></el-pagination>
			</div>
		</el-dialog>

		<!-- 删除提示框 -->
		<el-dialog :visible.sync="dialogDel" title="删除年级" width="20%" align="center" :close-on-click-modal="false">
			<div style="font-size: 20px; margin-bottom: 30px;">是否删除该学生</div>
			<span>
				<el-button type="primary" @click="toDel">删除</el-button>
				<el-button type="danger" @click="dialogDel = false">取消</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import API from "@/api/index.js";
	import md5 from "blueimp-md5";
	import axios from "axios";
	import DATE from "@/utils/date.js";

	let href;
	export default {
		name: "studentlist",
		data() {
			return {
				loading: true,
				// 操作
				dialogStudent: false, // 添加编辑学生
				grade: "",
				gradeList: [],
				classValue: "",
				classList: [],
				form: {
					name: "",
					number: "",
					sex: 1,
					age: "",
					class_id: "",
					grade_id: "",
				},
				dialogFace: false, // 查看人脸信息
				dialogDel: false, // 删除时确认
				id: "", // 删除的学生id
				dialogFamily: false, // 家长信息
				familyList: [],
				familyData: [],
				list: [],
				// nickname: '',
				disabled: false,
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
				student: "", // 搜索--学号
				type: 2, // 选中的搜索方式
				typeList: [{
						// 搜索方式
						value: 1,
						label: "按学生学号搜索",
					},
					{
						value: 2,
						label: "按学生姓名搜索",
					},
				],
				typeDisabled: false,
				bindFormFamily: {
					user_id: "",
					student_id: "",
				},
				FaceLogsDate: [],
				dialogFaceLogs: false,
				currentLogsPage: 1,
				logsTotalPage: 0,
				log_id: "",

				tableData: [],
				face_image: "",
				// 分页
				current: 1,
				total: 0,
				size: 10,

				permissions: localStorage.getItem("permissions"),
				role: localStorage.getItem("role"),
			};
		},
		mounted() {
			this.getStudent(this.current, this.size);
			this.getGrade();
			this.getFamily();
			this.getQiniuToken();
		},
		methods: {
			familyChange(val) {
				console.log("familyChange", val);
				console.log("familyChange", this.familyForm.user_id);
			},
			// 获取年级
			getGrade() {
				var self = this;
				API.grades(self.current).then((res) => {
					self.gradeList = res.data;
				});
			},
			// 获取学生列表
			getStudent(cur, list) {
				var self = this;
				API.students(cur, list)
					.then((res) => {
						self.loading = false;
						self.tableData = res.data;
						self.total = res.total;
					})
					.catch((err) => {
						self.loading = false;
					});
			},
			// 分页
			currentChange(val) {
				var self = this;
				self.current = val;
				if (self.student) {
					switch (self.type) {
						case 1:
							var number = self.student;
							self.funSearch(val, self.size, name, number);
							break;
						case 2:
							var name = self.student;
							self.funSearch(val, self.size, name, number);
					}
				} else {
					self.getStudent(val, self.size)
				}
			},
			// 每页多少条
			sizeChange(val) {
				var self = this;
				self.size = val;
				if (self.student) {
					switch (self.type) {
						case 1:
							var number = self.student;
							self.funSearch(1, val, name, number);
							break;
						case 2:
							var name = self.student;
							self.funSearch(1, val, name, number);
					}
				} else {
					self.getStudent(1, val);
				}
				self.current = 1;
			},

			// 选择搜索方式
			changeType(val) {
				var self = this;
				self.typeDisabled = true;
				self.student = "";
			},
			funSearch(cur, list, name, number) {
				var self = this;
				API.searchStudent(cur, list, name, number).then((res) => {
					self.tableData = res.data;
					self.total = res.total;
					self.$message.success("搜索成功！");
				});
			},
			search() {
				var self = this;
				self.current = 1;
				if (self.type == 1) {
					var number = self.student;
					self.funSearch(self.current, self.size, name, number);
				}
				if (self.type == 2) {
					var name = self.student;
					self.funSearch(self.current, self.size, name, number);
				}
			},

			getClass(grade_id) {
				var self = this;
				API.classes(1, 1000, grade_id).then((res) => {
					self.classList = res.data;
				});
			},
			// 年级选中
			gradeOnChange(value) {
				var self = this;
				self.grade = value;
				self.getClass(value);
				self.form.grade_id = value;
			},
			// 班级选中
			classOnChange(value) {
				var self = this;
				self.form.class_id = value;
			},
			addStudent() {
				var self = this;
				self.dialogStudent = true;
				self.grade = "";
				self.classValue = "";
				self.form = {
					name: "",
					number: "",
					sex: 1,
					age: "",
					class_id: "",
				};
			},
			newStudent() {
				var self = this;
				if (self.form.name && self.form.number && self.form.age && self.grade && self.form.class_id) {
					API.student(self.form).then((res) => {
						self.$message.success("提交成功");
						self.getStudent(self.current, self.size);
						self.dialogStudent = false;
						self.grade = "";
						self.classValue = "";
						self.form = {
							name: "",
							number: "",
							sex: 1,
							age: "",
							class_id: "",
						};
					});
				} else {
					self.$message.warning("请补充完整信息");
				}
			},

			// 操作
			// 获取家长信息
			getFamily() {
				var self = this;
				API.wxUser(self.current, 10000).then((res) => {
					self.familyData = res.data;
					self.list = self.familyData.map((item) => {
						return {
							value: `${item.id}`,
							label: `${item.nickname}`,
						};
					});
				});
			},
			// 远程搜索家长信息
			remoteMethod(query) {
				if (query !== "") {
					setTimeout(() => {
						this.familyList = this.list.filter((item) => {
							return item.label.indexOf(query) > -1;
						});
					}, 200);
				}
			},
			// 绑定家长
			handleFamily(index, row) {
				var self = this;
				self.bindFormFamily.student_id = row.id;
				self.dialogFamily = true;
				self.bindFormFamily.user_id = "";
				self.familyList = [];
			},
			// 提交绑定家长
			bindFamily() {
				var self = this;
				API.bindFamily(self.bindFormFamily).then((res) => {
					self.$message.success("绑定成功");
					self.getStudent(self.current, self.size);
					self.bindFormFamily.user_id = "";
					self.dialogFamily = false;
					self.familyList = [];
				});
			},
			// 更换人脸
			handleFace(index, row) {
				var self = this;
				self.dialogFace = true;
				self.familyForm.id = row.id;
				self.familyForm.only_in = row.only_in;
				self.old_href = row.face_image;
			},
			// 编辑学生
			handleEdit(index, row) {
				var self = this;
				self.dialogStudent = true;
				row.sex = Number(row.sex);
				self.form = row;
				self.grade = row.grade_id;
				self.classValue = row.class;
			},
			handleDel(index, row) {
				var self = this;
				self.dialogDel = true;
				self.id = row.id;
			},
			toDel() {
				var self = this;
				API.delStudent(self.id).then((res) => {
					self.$message.success("删除成功");
					self.dialogDel = false;
					self.getStudent(self.current, self.size);
				});
			},
			handleFaceLogs(index, row) {
				var self = this;
				self.dialogFaceLogs = true;
				self.log_id = row.id;
				self.currentLogsPage = 1;
				API.faceLogs(self.currentLogsPage, 10, self.log_id).then((res) => {
					self.FaceLogsDate = res.data;
					self.logsTotalPage = res.total;
					self.FaceLogsDate.forEach((item) => {
						item.timestamp = DATE.formatTime(item.timestamp, "Y-M-D h:m:s");
					});
				});
			},
			handleLogsCurrentChange(val) {
				var self = this;
				API.faceLogs(self.currentLogsPage, 10, self.log_id).then((res) => {
					self.FaceLogsDate = res.data;
					self.FaceLogsDate.forEach((item) => {
						item.timestamp = DATE.formatTime(item.timestamp, "Y-M-D h:m:s");
					});
				});
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
						self.getStudent(self.current, self.size);
						self.familyForm.href = "";
						self.dialogFace = false;
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
					self.getStudent(self.current, self.size);
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