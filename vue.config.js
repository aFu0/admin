// const pxtoviewport = require("postcss-px-to-viewport");
// const autoprefixer = require("autoprefixer");

// // svg
// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, ".", dir);
// }
module.exports = {
  //   // svg
  //   chainWebpack: config => {
  //     config.module
  //       .rule("svg")
  //       .exclude.add(resolve("src/icons"))
  //       .end();

  //     config.module
  //       .rule("icons")
  //       .test(/\.svg$/)
  //       .include.add(resolve("src/icons"))
  //       .end()
  //       .use("svg-sprite-loader")
  //       .loader("svg-sprite-loader")
  //       .options({
  //         symbolId: "[name]"
  //       });
  //   },
  //   // px 转 vw
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/main.scss";`
      }
      //       postcss: {
      //         plugins: [
      //           autoprefixer(),
      //           pxtoviewport({
      //             viewportWidth: 750,
      //             minPixelValue: 1,
      //             unitPrecision: 5,
      //             exclude: /node_modules/,
      //             // https://github.com/youzan/vant/issues/1948
      //             selectorBlackList: ["van-circle__layer"]
      //           })
      //         ]
      //       }
    }
  },
  //   /* eslint-disable */
  //   // Disable sourceMap for production
  //   // productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  devServer: {
    //     // 修改端口
    port: 8099
    //     // 接口
    //     proxy: {
    //       '/api': {
    //         target: process.env.VUE_APP_SERVER_URL,
    //         ws: true,
    //         changeOrigin: true // 如果接口跨域，需要进行这个参数配置为true`
    //       }
    //     }
  }
};
