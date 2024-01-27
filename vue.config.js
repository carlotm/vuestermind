
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuestermind/'
    : '/',
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vuestermind ✓ A master mind implementation in vue";
      return args;
    });
  },
};
