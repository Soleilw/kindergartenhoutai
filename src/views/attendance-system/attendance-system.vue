<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <el-table
      :data="tableDate"
      border
      :header-cell-style="{ background: '#f0f0f0' }"
    >
      <el-table-column prop="id" label="用户ID"></el-table-column>
      <el-table-column prop="id" label="姓名"></el-table-column>
      <el-table-column prop="detail" label="商品描述"></el-table-column>
      <el-table-column prop="created_at" label="创建时间"></el-table-column>
      <el-table-column prop="updated_at" label="更新时间"></el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑服务</el-button
          >
          <el-button
            size="mini"
            type="success"
            @click="handleOrder(scope.$index, scope.row)"
            >服务订单</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @current-change="currentChange"
        :current-page.sync="current"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="size"
        layout="sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="sizeChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import API from "@/api//index.js";

export default {
  data() {
    return {
      loading: false,
      tableDate: [],
      current: 1,
      total: 0,
      size: 10,
    };
  },
  methods: {
      currentChange() {},
      sizeChange() {},
  },
};
</script>

<style lang="scss" scoped>
</style>