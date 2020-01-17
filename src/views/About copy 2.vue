<!--
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2019-12-05 16:21:22
 * @LastEditors  : Lorder
 * @LastEditTime : 2020-01-02 17:55:35
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <canvas id="canvas" width="1000 " height="1000"></canvas>
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
    // data = data.split("C,");
    // console.log(data[0]);
    // var arr = [];
    // data.map(item => {
    //   console.log(item);
    //   item = item.split(",");
    //   let obj = {};

    //   obj.startX = item[0];
    //   obj.startY = item[1];
    //   obj.endX = item[2];
    //   obj.endY = item[3];
    //   arr.push(obj);
    //   return item;
    // });
    // console.log(arr);
    // var c = document.getElementById("canvas");
    // var ctx = c.getContext("2d");
    // var piece = [
    //   { startX: 0.0, startY: 0.0, endX: 100.0, endY: 100.0 },
    //   { startX: 100.0, startY: 100.0, endX: 220.0, endY: 100.0 },
    //   { startX: 220.0, startY: 100.0, endX: 220.0, endY: 230.0 },
    //   {
    //     startX: 220.0,
    //     startY: 230.0,
    //     endX: 0.0000000000000141,
    //     endY: 230.0000000000001
    //   },
    //   {
    //     startX: 0.0,
    //     startY: 0.0,
    //     endX: 0.0000000000000141,
    //     endY: 230.0000000000001
    //   },
    //   {
    //     startX: 89.77207522026764,
    //     startY: 219.6621288974165,
    //     endX: 36.69454011741072,
    //     endY: 100.5705109272744
    //   },
    //   {
    //     startX: 36.69454011741072,
    //     startY: 100.5705109272744,
    //     endX: 70.74427940665509,
    //     endY: 124.0886031218738
    //   },
    //   {
    //     startX: 70.74427940665509,
    //     startY: 124.0886031218738,
    //     endX: 89.77207522026764,
    //     endY: 219.6621288974165
    //   },
    //   {
    //     startX: 0.0000000000000141,
    //     startY: 230.0000000000001,
    //     endX: 69.7234725280814,
    //     endY: 306.9712386802853
    //   },
    //   {
    //     startX: 69.7234725280814,
    //     startY: 306.9712386802853,
    //     endX: 141.9502699288459,
    //     endY: 252.2175956681772
    //   },
    //   {
    //     startX: 141.9502699288459,
    //     startY: 252.2175956681772,
    //     endX: 249.04518081075,
    //     endY: 340.9848627654174
    //   },
    //   {
    //     startX: 249.04518081075,
    //     startY: 340.9848627654174,
    //     endX: 382.2911677076281,
    //     endY: 255.1211990907436
    //   },
    //   {
    //     startX: 382.2911677076281,
    //     startY: 255.1211990907436,
    //     endX: 355.7249920716332,
    //     endY: 143.1251162048193
    //   },
    //   {
    //     startX: 355.7249920716332,
    //     startY: 143.1251162048193,
    //     endX: 315.0455293755986,
    //     endY: 242.6771915985073
    //   },
    //   {
    //     startX: 315.0455293755986,
    //     startY: 242.6771915985073,
    //     endX: 254.8565300256468,
    //     endY: 284.98682325443
    //   },
    //   {
    //     startX: 254.8565300256468,
    //     startY: 284.98682325443,
    //     endX: 195.0826302967179,
    //     endY: 256.3655994535725
    //   },
    //   {
    //     startX: 195.0826302967179,
    //     startY: 256.3655994535725,
    //     endX: 157.7877297732406,
    //     endY: 238.5078772812887
    //   },
    //   {
    //     startX: 157.7877297732406,
    //     startY: 238.5078772812887,
    //     endX: 111.6482249913006,
    //     endY: 238.5078772812887
    //   },
    //   {
    //     startX: 111.6482249913006,
    //     startY: 238.5078772812887,
    //     endX: 77.6103016563229,
    //     endY: 274.6168137909417
    //   },
    //   {
    //     startX: 77.6103016563229,
    //     startY: 274.6168137909417,
    //     endX: 0.0000000000000141,
    //     endY: 230.0000000000001
    //   },
    //   {
    //     startX: 220.0,
    //     startY: 230.0,
    //     endX: 296.5934070687545,
    //     endY: 177.7297545356891
    //   },
    //   {
    //     startX: 296.5934070687545,
    //     startY: 177.7297545356891,
    //     endX: 259.8285386381903,
    //     endY: 103.5845220693604
    //   },
    //   {
    //     startX: 259.8285386381903,
    //     startY: 103.5845220693604,
    //     endX: 420.9254943490212,
    //     endY: 73.5256463399537
    //   },
    //   {
    //     startX: 420.9254943490212,
    //     startY: 73.5256463399537,
    //     endX: 439.6421521602497,
    //     endY: 243.1913093870648
    //   },
    //   {
    //     startX: 439.6421521602497,
    //     startY: 243.1913093870648,
    //     endX: 358.0909944211144,
    //     endY: 351.403264331298
    //   },
    //   {
    //     startX: 358.0909944211144,
    //     startY: 351.403264331298,
    //     endX: 437.6367923928081,
    //     endY: 351.403264331298
    //   },
    //   {
    //     startX: 437.6367923928081,
    //     startY: 351.403264331298,
    //     endX: 535.8992572716124,
    //     endY: 188.4173535929156
    //   },
    //   {
    //     startX: 535.8992572716124,
    //     startY: 188.4173535929156,
    //     endX: 494.4552221142694,
    //     endY: 22.75954115825243
    //   },
    //   {
    //     startX: 494.4552221142694,
    //     startY: 22.75954115825243,
    //     endX: 242.448784306629,
    //     endY: 58.16222028022185
    //   },
    //   {
    //     startX: 242.448784306629,
    //     startY: 58.16222028022185,
    //     endX: 242.448784306629,
    //     endY: 170.3820258369023
    //   },
    //   {
    //     startX: 242.448784306629,
    //     startY: 170.3820258369023,
    //     endX: 220.0,
    //     endY: 230.0
    //   },
    //   {
    //     startX: 0.0,
    //     startY: 0.0,
    //     endX: 102.7423024622439,
    //     endY: 34.11511660553697
    //   },
    //   {
    //     startX: 102.7423024622439,
    //     startY: 34.11511660553697,
    //     endX: 120.1220567938053,
    //     endY: 67.51387042128271
    //   },
    //   {
    //     startX: 120.1220567938053,
    //     startY: 67.51387042128271,
    //     endX: 182.9565476258303,
    //     endY: 67.51387042128271
    //   },
    //   {
    //     startX: 182.9565476258303,
    //     startY: 67.51387042128271,
    //     endX: 206.3523721638376,
    //     endY: 42.13081783043207
    //   },
    //   {
    //     startX: 206.3523721638376,
    //     startY: 42.13081783043207,
    //     endX: 345.3904068163301,
    //     endY: 25.431442854534
    //   },
    //   {
    //     startX: 345.3904068163301,
    //     startY: 25.431442854534,
    //     endX: 546.5944851089534,
    //     endY: 13.40789101719156
    //   },
    //   {
    //     startX: 546.5944851089534,
    //     startY: 13.40789101719156,
    //     endX: 603.4129148304164,
    //     endY: 196.4330548178109
    //   },
    //   {
    //     startX: 603.4129148304164,
    //     startY: 196.4330548178109,
    //     endX: 677.6110988834389,
    //     endY: 118.9479481290927
    //   },
    //   {
    //     startX: 677.6110988834389,
    //     startY: 118.9479481290927,
    //     endX: 626.140283080649,
    //     endY: 68.84981933744893
    //   },
    //   {
    //     startX: 626.140283080649,
    //     startY: 68.84981933744893,
    //     endX: 603.4129148304164,
    //     endY: 196.4330548178109
    //   },
    //   {
    //     startX: 125.4696707124749,
    //     startY: 207.120653875038,
    //     endX: 103.4107496541364,
    //     endY: 134.9793505788825
    //   },
    //   {
    //     startX: 103.4107496541364,
    //     startY: 134.9793505788825,
    //     endX: 195.6571443264965,
    //     endY: 134.9793505788825
    //   },
    //   {
    //     startX: 195.6571443264965,
    //     startY: 134.9793505788825,
    //     endX: 125.4696707124749,
    //     endY: 207.120653875038
    //   },
    //   {
    //     startX: 125.4696707124749,
    //     startY: 207.120653875038,
    //     endX: 182.9565476258303,
    //     endY: 67.51387042128271
    //   }
    // ];
    // piece = arr;
    // for (var i = 0; i < piece.length; i++) {
    //   ctx.beginPath();
    //   ctx.moveTo(piece[i].startX, Math.abs(piece[i].startY - 445.0));
    //   ctx.lineTo(piece[i].endX, Math.abs(piece[i].endY - 445.0));

    //   ctx.stroke();
    // }
    var a = this.drawSerialize(1, {
      c:
        "me_1573647561386_d75|16711680|4|1|M,175.42,584.1,M,175.42,584.1,C,175.42,584.1,183.13,584.1,C,190.84,584.1,196.63,582.17,C,202.41,580.24,207.23,579.28,C,212.05,578.31,217.83,577.35,C,223.61,576.39,227.47,576.39,C,231.33,576.39,232.29,575.42,C,233.25,574.46,234.22,574.46,C,235.18,574.46,237.11,574.46,C,239.04,574.46,240.96,574.46,C,242.89,574.46,244.82,574.46,C,246.75,574.46,249.64,574.46,C,252.53,574.46,254.46,574.46,C,256.39,574.46,259.28,574.46,C,262.17,574.46,264.1,574.46,C,266.02,574.46,266.99,574.46,C,267.95,574.46,269.88,574.46,C,271.81,574.46,272.77,574.46,C,273.73,574.46,275.66,574.46,L,277.59,574.46|1",
      n: 75,
      p: 20,
      st: 1190.57,
      t: 25,
      x: "112256324"
    });
    console.log(a);
  },
  methods: {
    drawSerialize: function(t, e) {
      var A = 1;
      var i = this.scaleX(t, e.p),
        n = i,
        r = e.c,
        o = {},
        s = r.split("|"),
        a = s[0],
        c = this.getColor(s[1]),
        l = s[2] * i,
        u = s[3] == A ? !0 : !1,
        h = s[4],
        f = h.split(","),
        d = { lineStyle: { thickness: l, color: c }, moveTo: {}, data: [] },
        p = 0;
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
      return (o = {
        objectId: a,
        color: c,
        thickness: l,
        visible: u,
        graph: d
      });
    },
    scaleX: function(t, e) {
      return this.isWhiteBoard(e)
        ? t.width / this.whiteBoardWidth
        : t.width / this.drawWidth;
    },
    isWhiteBoard: function(t) {
      return t > 1e4 ? !0 : !1;
    },
    getColor: function(t) {
      var t = parseInt(t);
      if (((t = t.toString(16)), t.length < 6)) {
        var e = 6 - t.length;
        for (i = 0; e > i; i++) t = "0" + t;
      }
      return (t = "#" + t);
    }
  }
};
</script>
