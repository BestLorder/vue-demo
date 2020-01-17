<template>
  <my-table :data="tableData" :rowHeader="rowHeader"></my-table>
</template>
<script>
import myTable from "./my-table.vue";
export default {
  components: {
    myTable
  },
  data() {
    return {
      tableData: [
        {
          name: "老王",
          sex: 0,
          age: 18,
          score: 60
        }
      ],
      rowHeader: [
        // 未做任何格式化处理的数据
        {
          prop: "name",
          label: "姓名"
        },
        // 格式化为字符串
        {
          prop: "sex",
          label: "性别",
          render: (h, params) => {
            return h("div", params.row.sex === 0 ? "男" : "女");
          }
        },
        {
          prop: "age",
          label: "年龄",
          render: (h, params) => {
            return h(
              "div",
              {
                style: {
                  color: "#333",
                  border: "1px solid #ccc"
                }
              },
              [params.row.age + "岁", h("span", 123)]
            );
          }
        },
        // 插入组件或标签内容（例：进度条组件）
        {
          prop: "score",
          label: "分数",
          render: (h, params) => {
            return h("el-progress", {
              props: {
                textInside: true,
                strokeWidth: 18,
                percentage: params.row.score
              }
            });
          }
        },
        // 添加操作按钮
        {
          prop: "",
          label: "分数",
          render: (h, params) => {
            return h("div", [
              h(
                "el-button",
                {
                  prop: {
                    type: "primary"
                  },
                  on: {
                    click: () => {
                      console.log(params.row.score);
                      console.log("删除");
                    }
                  }
                },
                "删除"
              ),
              h(
                "el-button",
                {
                  prop: {
                    type: "primary"
                  },
                  on: {
                    click: () => {
                      console.log(params.row.score);
                      console.log("确认");
                    }
                  }
                },
                "确认"
              )
            ]);
          }
        }
      ]
    };
  }
};
</script>
