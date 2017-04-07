const webpack = require('webpack')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var  ExtractTextPlugin = require('extract-text-webpack-plugin');

var config= {
	entry:{
		index:'./src/index.js',
		user:'./src/user.js',
		trend:'./src/trend.js',
		week:'./src/week.js',
		list_1:'./src/list_1.js',
		list_2:'./src/list_2.js',
		list_3:'./src/list_3.js',
		analysis:'./src/analysis.js'
		
	},
	module:{
		rules:[
			{test:/\.css$/,use:'style-loader'},
			{test:/\.css$/,use:ExtractTextPlugin.extract({
				use:'css-loader'
			})},
			//loaders之 js处理
    		{
    			test:/\.js$/,
    			exclude:/node-modules/,
    			loader:'babel-loader',
    			query:{
    				presets:['es2015','react']
    			}
    		},
    		{
    			test:/\.jsx$/,
    			loader:'jsx-loader'
    		},
			{
		        test: /\.(png|gif|jpe?g)$/,
		        loader: 'url-loader',
		        query: {
		            /*
		             *  limit=10000 ： 10kb
		             *  图片大小小于10kb 采用内联的形式，否则输出图片
		             * */
		            limit: 10000,
		            name: '/img/[name]-[hash:8].[ext]'
		        }
		    },
          	{
		        test: /\.(eot|woff|woff2|ttf|svg)$/,
		        loader: 'url-loader',
		        query: {
		            limit: 5000,
		            name: '/font/[name]-[hash:8].[ext]'
		        }
		    },
		]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	    	template: './src/view/index.html',
	    	filename:'html/index.html',
	    	chunks:['manifest','index']
	    }),
	     new HtmlWebpackPlugin({
	    	template: './src/view/user.html',
	    	filename:'html/user.html',
	    	chunks:['manifest','user']
	    }),
	     new HtmlWebpackPlugin({
	    	template: './src/view/trend.html',
	    	filename:'html/trend.html',
	    	chunks:['manifest','trend']
	    }),
	     new HtmlWebpackPlugin({
	    	template: './src/view/week.html',
	    	filename:'html/week.html',
	    	chunks:['manifest','week']
	    }),
	     new HtmlWebpackPlugin({
	    	template: './src/view/list_1.html',
	    	filename:'html/list_1.html',
	    	chunks:['manifest','list_1']
	    }),
	     new HtmlWebpackPlugin({
	    	template: './src/view/list_2.html',
	    	filename:'html/list_2.html',
	    	chunks:['manifest','list_2']
	    }),
	     new HtmlWebpackPlugin({
	    	template: './src/view/list_3.html',
	    	filename:'html/list_3.html',
	    	chunks:['manifest','list_1']
	    }),
	     new HtmlWebpackPlugin({
	    	template: './src/view/analysis.html',
	    	filename:'html/analysis.html',
	    	chunks:['manifest','analysis']
	    }),
	    new ExtractTextPlugin('css/style.[chunkhash].css'),
	    new webpack.optimize.CommonsChunkPlugin({
	    	names:['manifest'], //specify the common bundle's name
	    	minChunks: Infinity,
	    })
	  ]
}

module.exports = function(){
	return config;
};
