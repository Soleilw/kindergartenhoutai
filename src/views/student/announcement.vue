<template>
  <div>
    <div class="handle-box">
      <div class="btn">
        <el-select placeholder="请选择年级">
          <el-option
            v-for="item in gradeList"
            :label="item.label"
            value="item.value"
            :key="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-select placeholder="请选择班级">
          <el-option
            v-for="item in classList"
            :label="item.label"
            value="item.value"
            :key="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-button type="primary">确定</el-button>
      </div>
    </div>

    <el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0'}">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="id" label="年级"></el-table-column>
      <el-table-column prop="id" label="班级"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradeList: [], // 班级列表
      classList: [], // 班级列表

      tableData: [],
      currentPage: 1,
      pageSize: 10,
      totalPage: 1,
    };
  },
  methods: {
    handleCurrentChange(val) {},
    handleSizeChange(val) {},
  },
};
</script>

<style>
</style>
