module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
                'assets': '@/assets'
            }
        }
    }
}