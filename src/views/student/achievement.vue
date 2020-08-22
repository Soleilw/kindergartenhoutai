<template>
	<div>
		<el-tabs v-model="activeName">
			<el-tab-pane label="考试列表" name="test">
				<achievement-test></achievement-test>
			</el-tab-pane>
			<el-tab-pane label="导入成绩" name="into">
				<achievement-into></achievement-into>
			</el-tab-pane>
			<!-- <el-tab-pane label="导入记录" name="record">
				<achievement-record></achievement-record>
			</el-tab-pane> -->
		</el-tabs>
	</div>
</template>

<script>
	import achievementInto from '@/components/achievement/achievement-into.vue'
	// import achievementRecord from '@/components/achievement/achievement-record.vue'
	import achievementTest from '@/components/achievement/achievement-test.vue'

	export default {
		components: {
			achievementTest,
			achievementInto,
			// achievementRecord
		},
		data() {
			return {
				activeName: 'test'
			}
		}
	}
</script>

<style>
</style>
