const CracoLessPlugin = require("craco-less");

module.exports = {
  //配置代理解决跨域
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://sxyzs.test.doits.cn/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(0, 82, 204)",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
