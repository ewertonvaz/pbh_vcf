const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  outputDir: "chatbot",
  configureWebpack: {
    plugins: [
      new TerserPlugin({
        sourceMap: false,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].minify = false;
      return args;
    });
    // config.module
    //   .rule("css")
    //   .oneOf("vue-modules", "normal-modules")
    //   .use("css-loader")
    //   .tap((options) => {
    //     // modify the options...
    //     console.log(options);
    //     return options;
    //   });
  },
};
