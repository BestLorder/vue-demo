<!--
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2019-12-05 16:21:22
 * @LastEditors  : Lorder
 * @LastEditTime : 2020-01-02 14:35:08
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <canvas id="test" width="750" height="750"></canvas>
    <div id="result"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    // const loading = this.$loading();
    // setTimeout(() => {
    //   loading.close();
    // }, 3000);
    console.log(this.$route);
    // this.$router.push({ name: "about", params: { name: "aa", age: 17 } });
  },
  mounted() {
    var testPath = [
      {
        path: [
          {
            x: 82,
            y: 43
          },
          {
            x: 83,
            y: 43
          },
          {
            x: 84,
            y: 45
          },
          {
            x: 86,
            y: 47
          },
          {
            x: 86,
            y: 49
          },
          {
            x: 86,
            y: 54
          },
          {
            x: 86,
            y: 59
          },
          {
            x: 86,
            y: 64
          },
          {
            x: 86,
            y: 69
          },
          {
            x: 86,
            y: 74
          },
          {
            x: 86,
            y: 78
          },
          {
            x: 86,
            y: 83
          },
          {
            x: 86,
            y: 87
          },
          {
            x: 86,
            y: 89
          },
          {
            x: 86,
            y: 91
          },
          {
            x: 86,
            y: 92
          },
          {
            x: 86,
            y: 93
          },
          {
            x: 86,
            y: 94
          },
          {
            x: 86,
            y: 95
          }
        ]
      },
      {
        path: [
          {
            x: 129,
            y: 36
          },
          {
            x: 129,
            y: 39
          },
          {
            x: 129,
            y: 44
          },
          {
            x: 129,
            y: 49
          },
          {
            x: 129,
            y: 54
          },
          {
            x: 129,
            y: 59
          },
          {
            x: 128,
            y: 65
          },
          {
            x: 127,
            y: 73
          },
          {
            x: 125,
            y: 78
          },
          {
            x: 125,
            y: 81
          },
          {
            x: 124,
            y: 88
          },
          {
            x: 123,
            y: 91
          },
          {
            x: 123,
            y: 94
          },
          {
            x: 123,
            y: 96
          },
          {
            x: 123,
            y: 97
          },
          {
            x: 123,
            y: 98
          },
          {
            x: 123,
            y: 99
          },
          {
            x: 122,
            y: 100
          }
        ]
      },
      {
        path: [
          {
            x: 656.55,
            y: 428.84
          },
          {
            x: 656.56,
            y: 428.84
          },
          {
            x: 662.95,
            y: 428.46
          }
        ]
      },
      {
        path: [
          {
            x: 669.35,
            y: 428.09
          },
          {
            x: 675.37,
            y: 427.71
          }
        ]
      },
      {
        path: [
          {
            x: 681.39,
            y: 427.34
          },
          {
            x: 691.92,
            y: 426.96
          }
        ]
      }
    ];
    var lineIndex = 0,
      pointIndex = 0,
      line2;
    var obj = document.getElementById("test");
    var cxt = obj.getContext("2d");
    cxt.lineWidth = 1;
    cxt.strokeStyle = "red";
    cxt.lineCap = "round";
    cxt.clearRect(0, 0, 600, 200);
    function drawBegin() {
      cxt.beginPath();
      pointIndex = 0;
      var intervalHandle = window.setInterval(function() {
        line2 = testPath[lineIndex].path[pointIndex];
        if (!line2) {
          window.clearInterval(intervalHandle);
          if (lineIndex < testPath.length - 1) {
            lineIndex = lineIndex + 1;
            drawBegin();
          }
        } else {
          if (pointIndex == 0) {
            cxt.moveTo(line2.x / 2, line2.y / 2);
          }
          pointIndex = pointIndex + 1;
          cxt.lineTo(line2.x / 2, line2.y / 2);
          cxt.stroke();
        }
      }, 0);
    }
    drawBegin();
  }
};
</script>
