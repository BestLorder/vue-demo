let env = process.env.VUE_APP_ENV;
module.exports = {
  publicPath: "",
  lintOnSave: true,
  outputDir: env ? "dist-" + env : "dist"
};
