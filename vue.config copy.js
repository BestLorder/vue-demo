let env = process.env.VUE_APP_ENV;
console.log("========================");
console.log(env);
console.log("========================");
module.exports = {
  publicPath: "",
  lintOnSave: true,
  outputDir: env ? "dist-" + env : "dist"
};
