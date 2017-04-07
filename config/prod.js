var webpack = require('webpack')
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js')
const path =require('path')
var AssetsPlugin = require('assets-webpack-plugin')
module.exports = function (env) {
  return webpackMerge(commonConfig(),{
	  	 output: {
	        path: path.resolve(__dirname, '../production'),
	        filename: '[name].[chunkhash].js',
	        sourceMapFilename: '[name].map'
	    },
	    plugins: [
	        new webpack.LoaderOptionsPlugin({
	            minimize: true,
	            debug: false
	        }),
	        new webpack.DefinePlugin({
	                'process.env': {
	                    'NODE_ENV': JSON.stringify('production')
	                }
	        }),
	        new webpack.optimize.UglifyJsPlugin({
	            beautify: false,
	            mangle: {
	                screw_ie8: true,
	                keep_fnames: true
	            },
	            compress: {
	                screw_ie8: true
	            },
	            comments: false
	        }),
	        new AssetsPlugin({
		    		filename: 'assets.json',
		    		fullPath:false,
		    		includeManifest:'manifest',
		    		path:path.join(__dirname,'../production','views'),
		    		prettyPrint: true,
		    		update: true
		    	}),
	    ]
  })
}