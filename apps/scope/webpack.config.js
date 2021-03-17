const getWebpackConfig = require('@nrwl/react/plugins/webpack')

module.exports = function(config) {
    const newConfig = getWebpackConfig(config)

    newConfig.module.rules.push({
        test: /\.html$/,
        loader: require.resolve('raw-loader'),
    });

    return newConfig
}