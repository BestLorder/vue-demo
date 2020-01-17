<!--
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2020-01-08 19:41:09
 * @LastEditors  : Lorder
 * @LastEditTime : 2020-01-08 21:43:20
 -->
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      width="180"
      v-for="(item, index) in columns"
      :label="item.label"
      :key="index"
    >
      <template slot-scope="scope">
        <ex-slot
          v-if="item.render"
          :render="item.render"
          :row="scope.row"
          :index="scope.$index"
          :column="item"
        ></ex-slot>
        <span v-else>{{ scope.row[item.index] }}</span>
      </template>
    </el-table-column>
    <!-- <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column> -->
  </el-table>
</template>

<script>
// 自定义内容的组件
var exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },

  render: (h, data) => {
    console.log(data);
    const params = {
      row: data.props.row,
      index: data.props.index
    };

    if (data.props.column) params.column = data.props.column;
    return data.props.render(h, params);
  }
};
export default {
  components: {
    "ex-slot": exSlot
  },
  data() {
    return {
      columns: [
        {
          label: "日期",
          index: "date",
          render: (h, params) => {
            return params.row.date + "岁";
          }
        },
        {
          label: "姓名",
          index: "name"
        },
        {
          label: "地址",
          index: "address"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
