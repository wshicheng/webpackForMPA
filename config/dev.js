var webpack = require('webpack')
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js')
const path =require('path')
var AssetsPlugin = require('assets-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function (env) {
  return webpackMerge(commonConfig(),{
    devtool: 'cheap-module-source-map',
    output: {
    		path: path.resolve(process.cwd(), 'dist'),
				publicPath:'/webpack2.0.1/dist/',
        filename: 'js/[name].js',
        sourceMapFilename: 'map/[name].map'
    },
    devServer: {
        port: 7777,
        hot:true,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
    },
    plugins:[
		    new CleanWebpackPlugin(['dist'], {
			        root: '', // An absolute path for the root  of webpack.config.js
			        verbose: true,// Write logs to console.
			        dry: false // Do not delete anything, good for testing.
		    }),
     		new webpack.HotModuleReplacementPlugin(),
	    	new AssetsPlugin({
	    		filename: 'assets.json',
	    		fullPath:false,
	    		includeManifest:'manifest',
    			path: path.resolve(process.cwd(), 'dist','views'),
	    		prettyPrint: true,
	    		update: true
	    	}),
    ]
  })
}