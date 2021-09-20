module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vuestermind ✓ A master mind implementation in vue";
      return args;
    });
  },
};
