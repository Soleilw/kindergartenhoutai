<template>
	<div v-loading="loading" element-loading-text="拼命加载中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addBuy">添加购买服务</el-button>
			</div>
			<div class="btn">
				<span>学校：</span>
				<el-select v-model="form.school" placeholder="请选择学校">
					<el-option v-for="item in schoolList" :key="item.id" :label="item.name" :value="item.id"></el-option>
				</el-select>
			</div>
		</div>

		<el-dialog title="添加购买服务" :visible.sync="dialogBuy">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="选择学校">
						<el-select v-model="form.school" placeholder="请选择学校">
							<el-option v-for="item in schoolList" :key="item.id" :label="item.name" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择服务">
						<el-checkbox v-model="checkAll" @change="handleCheckAllService">全选</el-checkbox>
						<div class="service">
							<div v-for="(item,index) in serviceList" :key="index">
								<el-checkbox-group v-model="form.service" class="service-item">
									<el-checkbox :label="item" @change="oneChange">{{item.name}}</el-checkbox>
								</el-checkbox-group>
							</div>
						</div>
					</el-form-item>
					<el-form-item label="商品名称">
						<el-input v-model="form.title"></el-input>
					</el-form-item>
					<el-form-item label="商品价格">
						<el-input v-model="form.price"></el-input>
					</el-form-item>
					<el-form-item label="商品时长">
						<el-input v-model="form.time"></el-input>
					</el-form-item>
					<el-form-item label="商品描述">
						<el-input v-model="form.detail"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newBuy" v-if="isAdd">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>
		<el-dialog title="订单列表" :visible.sync="showServiceOrder" width="80%">
			<div class="box">
				<div>
					<el-table :data="orderData" border :header-cell-style="{background:'#f0f0f0'}">
						<el-table-column prop="no" label="订单ID"></el-table-column>
						<el-table-column prop="user_id" label="用户ID"></el-table-column>
						<el-table-column prop="user_name" label="用户名"></el-table-column>
						<el-table-column prop="name" label="商品名称"></el-table-column>
						<el-table-column prop="price" label="商品价格"></el-table-column>
						<el-table-column prop="time" label="商品时长"></el-table-column>
						<el-table-column prop="status" label="订单状态">
							<template slot-scope="scope">
								<span v-if="scope.row.status == 1">提交</span>
								<span v-else-if="scope.row.status == 2">已付款</span>
								<span v-else-if="scope.row.status == 3">无效</span>
							</template>
						</el-table-column>
						<el-table-column prop="create_id" label="创建时间"></el-table-column>
					</el-table>
					<div class="block">
						<el-pagination @current-change="orderCurrentChange" :current-page.sync="orderCurrent" :page-sizes="[10, 20, 30, 40, 50]"
						 :page-size="orderSize" layout="sizes, prev, pager, next, jumper" :total="orderTotal" @size-change="orderSizeChange"></el-pagination>
					</div>
				</div>
			</div>
		</el-dialog>

		<el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0'}" max-height="620">
			<el-table-column prop="id" label="商品ID" width="100px"></el-table-column>
			<el-table-column prop="title" label="商品名称"></el-table-column>
			<el-table-column prop="price" label="商品价格"></el-table-column>
			<el-table-column prop="time" label="商品时长(天)"></el-table-column>
			<el-table-column prop="detail" label="商品描述"></el-table-column>
			<el-table-column prop="service[0].name" label="服务权限"></el-table-column>
			<el-table-column prop="created_at" label="创建时间"></el-table-column>
			<el-table-column prop="updated_at" label="更新时间"></el-table-column>
			<el-table-column label="操作" width="300px">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" @click="handleEdit(scope.$index,scope.row)">查看服务</el-button>
					<el-button size="mini" type="primary" @click="handleOrder(scope.$index,scope.row)">服务订单</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 30, 40, 50]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" :total="total" @size-change="sizeChange"></el-pagination>
		</div>
	</div>
</template>

<script>
	import API from "@/api//index.js";

	export default {
		name: "buy",
		data() {
			return {
				loading: true,
				schoolList: [],
				school: "",
				dialogBuy: false,
				showServiceOrder: false,
				checkAll: false, // 全选
				serviceIdList: [],
				serviceList: [{
						title: "sendInfo",
						name: "消息推送",
					},
					{
						title: "classesNotice",
						name: "班级公告",
					},
					{
						title: "studentLocal",
						name: "学生定位",
					},
					{
						title: "out-inRecord",
						name: "学生进出记录",
					},
					{
						title: "markInquire",
						name: "成绩查询",
					},
					{
						title: "buyLocator",
						name: "购买定位器",
					},
				],
				form: {
					title: "",
					price: "",
					detail: "",
					service: [],
					school: "",
					time: "",
				},
				financial: "订单列表",
				financialList: [{
						value: 1,
						label: "订单列表",
					},
					{
						value: 2,
						label: "财务统计",
					},
				],
				orderData: [],
				orderSize: 10, // 订单列表
				orderTotal: 0,
				orderCurrent: 1,
				tableDate: [],
				current: 1,
				total: 0,
				size: 10,
				isAdd: true,
			};
		},
		mounted() {
			this.getBuys();
			this.getSchool();
		},
		methods: {
			getBuys() {
				var self = this;
				API.buys(self.current)
					.then((res) => {
						self.tableDate = res.data;
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
				API.buys(val)
					.then((res) => {
						self.loading = false;
						self.tableDate = res.data;
						self.total = res.total;
					})
					.catch((err) => {
						self.loading = false;
					});
			},
			// 每页多少条
			sizeChange(val) {
				var self = this;
				self.size = val;
				self.loading = true;
				API.buys(self.current, val).then((res) => {
					self.loading = false;
					self.tableDate = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				});
			},
			newBuy() {
				var self = this;
				API.buy(self.form).then((res) => {
					self.dialogBuy = false;
					self.$message.success("提交成功");
					self.getBuys();
					self.current = 1;
					self.form = {};
					self.form.service = [];
				});
			},
			addBuy() {
				var self = this;
				self.dialogBuy = true;
				self.checkAll = false;
				self.isAdd = true;
				self.form = {
					title: "",
					price: "",
					detail: "",
					service: [],
					school: "",
					time: "",
				};
			},
			// 获取学校列表
			getSchool() {
				var self = this;
				API.schools(self.current, 100, 2).then((res) => {
					self.schoolList = res.data;
				});
			},
			// 全选服务
			handleCheckAllService(val) {
				var self = this;
				self.form.service = val ? self.serviceList : [];
			},
			oneChange() {
				var self = this;
				self.form.service.length === 6 ?
					(self.checkAll = true) :
					(self.checkAll = false);
			},
			// 操作
			handleEdit(index, row) {
				var self = this;
				self.dialogBuy = true;
				self.isAdd = false;
				self.form = row;
				self.form.service = self.serviceList;
				row.service.length === 6 ?
					(self.checkAll = true) :
					(self.checkAll = false);
			},
			handleOrder(index, row) {
				var self = this;
				self.showServiceOrder = true;
				self.product_id = row.id;
				API.server(self.orderCurrent, self.size, self.product_id).then((res) => {
					self.$message.success("获取数据成功");
					self.orderData = res.data;
					self.orderTotal = res.total;
				});
			},

			
			// 订单列表分页
			orderCurrentChange(val) {
				var self = this;
				self.orderCurrent = val;
				API.server(val, self.orderSize, self.product_id).then((res) => {
					self.$message.success("获取数据成功");
					self.orderData = res.data;
					self.orderTotal = res.total;
				});
			},
			// 当前分页
			orderSizeChange(val) {
				var self = this;
				self.orderSize = val;
				API.server(self.orderCurrent, val, self.product_id).then((res) => {
					self.$message.success("获取数据成功");
					self.orderData = res.data;
					self.orderTotal = res.total;
				});
			},
		},
	};
</script>

<style scoped>
	.service {
		display: flex;
		flex-wrap: wrap;
	}

	.service-item {
		margin: 10px;
		padding: 0 10px;
	}
</style>
