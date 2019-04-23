module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vuestermind/' : '/',
    productionSourceMap: false,
    configureWebpack: {
        entry: ['./src/main.js',],
    }
}
