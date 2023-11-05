const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');
const path = require('path');
const process = require('process');
module.exports = {
    ...defaultConfig,
    ...{
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
        }
    },
    entry: {
        ...defaultConfig.entry(),
        "css/style": './src/theme/scss/main.scss',
        "css/woocommerce": './src/theme/scss/woocommerce.scss',
        "js/scripts": './src/theme/index.js',
    },
    output: {
        ...defaultConfig.output,
		path: path.resolve( process.cwd(), "assets/build" ),
	},
}