<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="changeActive">
			<el-tab-pane label="学生信息" name="info">
				<student-list></student-list>
			</el-tab-pane>
			<el-tab-pane label="批量导入学生" name="more">
				<student-add></student-add>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import studentList from '@/components/student/student-list.vue'
	import studentAdd from '@/components/student/student-add.vue'
	import API from '@/api/index.js'

	export default {
		name: 'student',
		components: {
			studentList,
			studentAdd
		},
		data() {
			return {
				activeName: 'info'
			}
		},
		methods: {
			changeActive() {
				if(this.activeName === 'info') {
					API.students(1).then(res => {
					})
				}
				
				if(this.activeName === 'more') {
					console.log(111)
				}
			}
		}
	}
</script>

<style>
</style>
