<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="changeActive">
			<el-tab-pane label="年级管理" name="grade">
				<grade-manage></grade-manage>
			</el-tab-pane>
			<el-tab-pane label="班级管理" name="class">
				<class-manege></class-manege>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import gradeManage from '@/components/grade/grade-manage.vue'
	import classManege from '@/components/grade/class-manage.vue'
	import API from '@/api/index.js'

	export default {
		components: {
			gradeManage,
			classManege
		},
		data() {
			return {
				activeName: 'grade'
			}
		},
		methods: {
			changeActive() {
				if(this.activeName === 'grade') {
					API.grades(1).then(res => {
					})
				}
				
				if(this.activeName === 'class') {
					API.classes(1).then(res => {
					})
				}
			}
		}
	}
</script>

<style>
</style>
