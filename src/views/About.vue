<!--
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2019-12-05 16:21:22
 * @LastEditors: Lorder
 * @LastEditTime: 2020-05-29 16:26:37
 -->
<template>
  <div class="about">
    <div class="canvasBox">
      <img
        src="https://qnunion.feierlaiedu.com//902d0d5c-5aa7-4fb5-ba35-33e643b4795f.jpg"
        alt=""
        class="ppt"
      />

      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
      b: 2
    };
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
    var doc = document.getElementById("canvas");
    var docW = document.body.clientWidth;
    var docH = document.body.clientWidth / (1280 / 960);
    doc.width = docW;
    doc.height = docH;
    var scale = 1280 / docW;
    let a = this.drawSerialize(1, {
      c:
        "me_1577103003570_d127|16711680|4|1|M,798.07,880.96,M,798.07,880.96,C,798.07,880.96,800,881.93,C,801.93,882.89,805.78,883.86,C,809.64,884.82,813.49,885.78,C,817.35,886.75,821.2,888.67,C,825.06,890.6,831.81,891.57,C,838.55,892.53,845.3,893.49,C,852.05,894.46,859.76,895.42,C,867.47,896.39,874.22,898.31,C,880.96,900.24,889.64,901.2,C,898.31,902.17,906.02,904.1,C,913.73,906.02,921.45,906.99,C,929.16,907.95,936.87,908.92,C,944.58,909.88,952.29,910.84,C,960,911.81,965.78,911.81,C,971.57,911.81,976.39,911.81,C,981.2,911.81,986.99,911.81,C,992.77,911.81,997.59,911.81,C,1002.41,911.81,1007.23,911.81,C,1012.05,911.81,1017.83,911.81,C,1023.61,911.81,1028.43,911.81,C,1033.25,911.81,1037.11,911.81,C,1040.96,911.81,1046.75,911.81,C,1052.53,911.81,1140.24,897.35,C,1227.95,882.89,1229.88,881.93,C,1231.81,880.96,1234.7,878.07,C,1237.59,875.18,1237.59,873.25,C,1237.59,871.33,1237.59,870.36,C,1237.59,869.4,1237.59,867.47,C,1237.59,865.54,1237.59,862.65,C,1237.59,859.76,1237.59,856.87,C,1237.59,853.98,1237.59,851.08,C,1237.59,848.19,1237.59,845.3,C,1237.59,842.41,1236.63,840.48,C,1235.66,838.55,1234.7,836.63,C,1233.73,834.7,1233.73,831.81,C,1233.73,828.92,1231.81,826.02,C,1229.88,823.13,1227.95,819.28,C,1226.02,815.42,1224.1,811.57,C,1222.17,807.71,1221.2,804.82,C,1220.24,801.93,1217.35,798.07,C,1214.46,794.22,1213.49,791.33,C,1212.53,788.43,1210.6,784.58,C,1208.67,780.72,1206.75,777.83,C,1204.82,774.94,1203.86,772.05,C,1202.89,769.16,1200.96,767.23,C,1199.04,765.3,1198.07,763.37,C,1197.11,761.45,1195.18,760.48,C,1193.25,759.52,1192.29,757.59,C,1191.33,755.66,1189.4,752.77,C,1187.47,749.88,1186.51,747.95,C,1185.54,746.02,1183.61,745.06,C,1181.69,744.1,1180.72,742.17,C,1179.76,740.24,1177.83,739.28,C,1175.9,738.31,1174.94,736.39,C,1173.98,734.46,1173.01,733.49,C,1172.05,732.53,1170.12,730.6,C,1168.19,728.67,1167.23,727.71,C,1166.27,726.75,1164.34,725.78,C,1162.41,724.82,1161.45,722.89,C,1160.48,720.96,1159.52,720,C,1158.55,719.04,1156.63,718.07,C,1154.7,717.11,1153.73,716.14,C,1152.77,715.18,1150.84,714.22,C,1148.92,713.25,1146.99,712.29,C,1145.06,711.33,1144.1,711.33,C,1143.13,711.33,1140.24,709.4,C,1137.35,707.47,1134.46,706.51,C,1131.57,705.54,1126.75,703.61,C,1121.93,701.69,1116.14,700.72,C,1110.36,699.76,1105.54,698.8,C,1100.72,697.83,1094.94,695.9,C,1089.16,693.98,1082.41,692.05,C,1075.66,690.12,1069.88,688.19,C,1064.1,686.27,1058.31,684.34,C,1052.53,682.41,1047.71,681.45,C,1042.89,680.48,1037.11,679.52,C,1031.33,678.55,1026.51,677.59,C,1021.69,676.63,1015.9,676.63,C,1010.12,676.63,1006.27,675.66,C,1002.41,674.7,992.77,674.7,C,983.13,674.7,979.28,674.7,C,975.42,674.7,970.6,674.7,C,965.78,674.7,961.93,674.7,C,958.07,674.7,952.29,674.7,C,946.51,674.7,941.69,674.7,C,936.87,674.7,931.08,674.7,C,925.3,674.7,920.48,674.7,C,915.66,674.7,909.88,674.7,C,904.1,674.7,899.28,674.7,C,894.46,674.7,888.67,674.7,C,882.89,674.7,878.07,675.66,C,873.25,676.63,867.47,677.59,C,861.69,678.55,857.83,679.52,C,853.98,680.48,848.19,682.41,C,842.41,684.34,836.63,685.3,C,830.84,686.27,826.02,687.23,C,821.2,688.19,815.42,690.12,C,809.64,692.05,803.86,692.05,C,798.07,692.05,793.25,693.01,C,788.43,693.98,783.61,694.94,C,778.8,695.9,775.9,697.83,C,773.01,699.76,770.12,699.76,C,767.23,699.76,764.34,700.72,C,761.45,701.69,760.48,702.65,C,759.52,703.61,757.59,704.58,C,755.66,705.54,754.7,706.51,C,753.73,707.47,752.77,709.4,C,751.81,711.33,748.92,712.29,C,746.02,713.25,744.1,715.18,C,742.17,717.11,741.2,718.07,C,740.24,719.04,738.31,720,C,736.39,720.96,735.42,722.89,C,734.46,724.82,732.53,725.78,C,730.6,726.75,729.64,728.67,C,728.67,730.6,726.75,731.57,C,724.82,732.53,723.86,734.46,C,722.89,736.39,721.93,737.35,C,720.96,738.31,719.04,740.24,C,717.11,742.17,716.14,744.1,C,715.18,746.02,713.25,747.95,C,711.33,749.88,710.36,751.81,C,709.4,753.73,709.4,754.7,C,709.4,755.66,708.43,757.59,C,707.47,759.52,707.47,760.48,C,707.47,761.45,707.47,762.41,C,707.47,763.37,707.47,765.3,C,707.47,767.23,706.51,768.19,C,705.54,769.16,705.54,770.12,C,705.54,771.08,705.54,773.01,C,705.54,774.94,705.54,775.9,C,705.54,776.87,705.54,777.83,C,705.54,778.8,706.51,780.72,C,707.47,782.65,707.47,783.61,C,707.47,784.58,708.43,785.54,C,709.4,786.51,711.33,788.43,C,713.25,790.36,713.25,791.33,C,713.25,792.29,723.86,807.71,C,734.46,823.13,735.42,824.1,C,736.39,825.06,737.35,826.99,C,738.31,828.92,739.28,828.92,C,740.24,828.92,741.2,829.88,C,742.17,830.84,743.13,832.77,C,744.1,834.7,745.06,834.7,C,746.02,834.7,746.99,836.63,C,747.95,838.55,748.92,839.52,C,749.88,840.48,750.84,842.41,C,751.81,844.34,753.73,845.3,C,755.66,846.27,756.63,848.19,C,757.59,850.12,759.52,851.08,C,761.45,852.05,762.41,853.98,C,763.37,855.9,765.3,856.87,C,767.23,857.83,768.19,858.8,C,769.16,859.76,770.12,861.69,C,771.08,863.61,773.01,864.58,C,774.94,865.54,775.9,867.47,C,776.87,869.4,778.8,870.36,C,780.72,871.33,781.69,873.25,C,782.65,875.18,783.61,876.14,C,784.58,877.11,785.54,878.07,C,786.51,879.04,787.47,880,C,788.43,880.96,788.43,881.93,C,788.43,882.89,790.36,883.86,C,792.29,884.82,792.29,885.78,C,792.29,886.75,794.22,888.67,C,796.14,890.6,797.11,890.6,C,798.07,890.6,801.93,894.46,C,805.78,898.31,806.75,898.31,C,807.71,898.31,808.67,899.28,C,809.64,900.24,809.64,901.2,C,809.64,902.17,810.6,903.13,C,811.57,904.1,812.53,904.1,C,813.49,904.1,814.46,904.1,C,815.42,904.1,815.42,906.02,C,815.42,907.95,816.39,907.95,L,817.35,907.95|1",
      n: 33,
      p: 16,
      st: 781.19,
      t: 25,
      x: "112256324"
    });
    console.log(a);
    if (!a) {
      return "";
    }
    console.log(66666);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = a.thickness / scale;
    ctx.strokeStyle = a.color;
    ctx.lineCap = "round";
    let piece = a.graph.data;
    var i = 0;
    function drawBegin() {
      ctx.beginPath();
      // pointIndex = 0;
      var intervalHandle = window.setInterval(function() {
        if (i < piece.length) {
          ctx.moveTo(piece[i].x / scale, piece[i].y / scale);
          if (piece[i].archX) {
            ctx.lineTo(piece[i].archX / scale, piece[i].archY / scale);
          }

          if (piece[i + 1]) {
            ctx.lineTo(piece[i + 1].x / scale, piece[i + 1].y / scale);
          }

          ctx.stroke();
          i++;
        } else {
          clearInterval(intervalHandle);
        }
      }, 50);
    }
    drawBegin();
  },
  methods: {
    drawSerialize: function(t, e) {
      var A = 1;
      var i = 1,
        n = i,
        r = e.c,
        s = r.split("|"),
        a = s[0],
        c = this.getColor(s[1]),
        l = s[2] * i,
        u = s[3] == A ? !0 : !1,
        h = s[4],
        f = h.split(","),
        d = { lineStyle: { thickness: l, color: c }, moveTo: {}, data: [] },
        p = 0;
      if (!s[4].includes("M")) {
        return "";
      }
      console.log(i);
      console.log(h);
      console.log(f);
      "M" === f[0] && ((d.moveTo = { x: f[1] * i, y: f[2] * n }), (p = 3));
      for (var g = {}; p < f.length; )
        switch (f[p]) {
          case "M":
            (g = {
              name: f[p],
              x: parseInt(f[p + 1]) * i,
              y: parseInt(f[p + 2]) * n
            }),
              d.data.push(g),
              (p += 3);
            break;
          case "L":
            (g = {
              name: f[p],
              x: parseInt(f[p + 1]) * i,
              y: parseInt(f[p + 2]) * n
            }),
              d.data.push(g),
              (p += 3);
            break;
          case "C":
            (g = {
              name: f[p],
              x: parseInt(f[p + 1]) * i,
              y: parseInt(f[p + 2]) * n,
              archX: parseInt(f[p + 3]) * i,
              archY: parseInt(f[p + 4]) * n
            }),
              d.data.push(g),
              (p += 5);
        }
      return {
        objectId: a,
        color: c,
        thickness: l,
        visible: u,
        graph: d
      };
    },
    getColor: function(t) {
      t = parseInt(t);
      if (((t = t.toString(16)), t.length < 6)) {
        var e = 6 - t.length;
        for (let i = 0; e > i; i++) t = "0" + t;
      }
      return (t = "#" + t);
    }
  }
};
</script>
<style lang="less" scoped>
.ppt {
  width: 100%;
  display: block;
}
.canvasBox {
  position: relative;
}
#canvas {
  // transform: scale(1/3.58);
  position: absolute;
  left: 0;
  top: 0;
  // width: 375px;
  // height: 281.25px;
}
</style>
