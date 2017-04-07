
var path = require('path');

var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin')

var CleanWebpackPlugin = require('clean-webpack-plugin');

var AssetsPlugin = require('assets-webpack-plugin')

/*
 *  merge config
 *  （合并config文件）
 * */
var Merge = require('webpack-merge');

/*
 * auto open browser
 * （自动打开浏览器）
 * */
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

/*
 *  Detect how npm is run and branch based on that
 *  （当前 npm 运行）
 * 	npm 提供一个npm_lifecycle_event变量，
 * 	返回当前正在运行的脚本名称，
 * 	比如build、dev、dev-hrm。所以，
 * 	可以利用这个变量，在同一个脚本文件里面，
 * 	为不同的npm scripts命令编写代码。请看下面的例子。
 * */
var currentTarget = process.env.npm_lifecycle_event;
console.log(currentTarget+"===========================")

var debug,          // is debug 
    devServer,      // is hrm mode 
    minimize;       // is minimize 

switch(currentTarget)
	{
		// online mode （线上模式）
		case "build":
			debug = false;
			devServer = false;
			minimize = true;
			break;
		// dev mode （开发模式）	
		case "dev":
			debug = true;
			devServer = false;
			minimize = false;
			break;
		// dev HRM mode （热更新模式）	
		case "start":
			debug = true;
			devServer = true;
			minimize = false;
	}



var entry = {
							index:'./src/js/index.js',
							analysis:'./src/js/analysis.js',
							list_1:'./src/js/list_1.js',
							list_2:'./src/js/list_2.js',
							list_3:'./src/js/list_3.js',
							trend:'./src/js/trend.js',
							user:'./src/js/user.js',
							week:'./src/js/week.js',
							common:['jquery','highcharts','react']
						};
					
var output = {
				path: path.resolve(__dirname, 'development'),
				publicPath:devServer?'/web/':'../',
				filename:devServer?"js/[name].bundle.js":"js/[name].[chunkhash:8].bundle.js"
			};
var rules =  [
		      	{
			      	test: /\.(js|jsx)$/,
			      	use:[
						      	{
						      		loader: 'babel-loader',
						      		query:{
						      			presets:["react","es2015"]
						      		}
						      	}
				      	],
				  	exclude: /node_modules/    
		      	},
	      		{
			      	test: /\.css$/,
			      	use:[
				    		'style-loader','css-loader?importLoaders=1','postcss-loader' 
			 	 	]						      			
	     	 	},
			    {
		       		 test: /\.(png|gif|jpe?g)$/,
		        	 use:[
				        	{
				        		loader: 'url-loader',
						        query: {
						            /*
						             *  limit=10000 ： 10kb
						             *  图片大小小于10kb 采用内联的形式，否则输出图片
						             * */
						            limit: 10000,
						            name: 'img/[name]-[hash:8].[ext]'
						        }
				        	}	
			        	]   
			    },
			    {
		       		test: /\.(eot|woff|woff2|ttf|svg)$/,
			        use:[
			        	{
			        		loader: 'url-loader',
					        query: {
					            limit: 5000,
					            name:'font/[name]-[hash:8].[ext]'
					        }
			        	}
			        ]
			    }
	    	];
var plugins = [
					new CleanWebpackPlugin(['development'], {
				        root: '', // An absolute path for the root  of webpack.config.js
				        verbose: true,// Write logs to console.
				        dry: false // Do not delete anything, good for testing.
				    }),
							    
				    //这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
				     new webpack.ProvidePlugin({
		            	$: 'jquery'
		       		 }),
			        new webpack.optimize.OccurrenceOrderPlugin(),
					        
					new webpack.HotModuleReplacementPlugin(),
	    						
					new webpack.NoEmitOnErrorsPlugin(),
									
					new ExtractTextPlugin(
						{
						    filename: devServer?'css/[name].css':'css/[name].[chunkhash:8].css',
						    allChunks: true
				  		}
					),
				   	new webpack.optimize.CommonsChunkPlugin(
				   		{
						    names:['common','manifest'] ,
						    filename:devServer?'js/[name].js':'js/[name]-[hash:8].js',
				  		}
			   		),
								  
				  	new webpack.HashedModuleIdsPlugin(),
					  
						new AssetsPlugin({
			    		filename: 'assets.json',
			    		fullPath:false,
			    		includeManifest:'manifest',
		    			path: path.resolve(process.cwd(), 'development'),
			    		prettyPrint: true,
			    		update: true
			    	}),
			    	new HtmlWebpackPlugin({
							template:'./src/view/index.html',
							filename:'html/index.html',
							chunks:['index','common','manifest'],
							 // 根据依赖自动排序
				 			chunksSortMode: 'dependency'
					}),
					new HtmlWebpackPlugin({
						template:'./src/view/analysis.html',
						filename:'html/analysis.html',
						chunks:['analysis','common','manifest'],
						 // 根据依赖自动排序
			 			chunksSortMode: 'dependency'
					}),
					new HtmlWebpackPlugin({
						template:'./src/view/list_1.html',
						filename:'html/list_1.html',
						chunks:['list_1','common','manifest'],
						 // 根据依赖自动排序
			 			chunksSortMode: 'dependency'
					}),
					new HtmlWebpackPlugin({
						template:'./src/view/list_2.html',
						filename:'html/list_2.html',
						chunks:['list_2','common','manifest'],
						 // 根据依赖自动排序
			 			chunksSortMode: 'dependency'
					}),
					new HtmlWebpackPlugin({
						template:'./src/view/list_3.html',
						filename:'html/list_3.html',
						chunks:['list_3','common','manifest'],
						 // 根据依赖自动排序
			 			chunksSortMode: 'dependency'
					}),
					new HtmlWebpackPlugin({
						template:'./src/view/trend.html',
						filename:'html/trend.html',
						chunks:['trend','common','manifest'],
						 // 根据依赖自动排序
			 			chunksSortMode: 'dependency'
					}),
					new HtmlWebpackPlugin({
						template:'./src/view/user.html',
						filename:'html/user.html',
						chunks:['user','common','manifest'],
						 // 根据依赖自动排序
			 			chunksSortMode: 'dependency'
					}),
					new HtmlWebpackPlugin({
						template:'./src/view/week.html',
						filename:'html/week.html',
						chunks:['week','common','manifest'],
						 // 根据依赖自动排序
			 			chunksSortMode: 'dependency'
					})				
				];

var devServerConfig = {
						  historyApiFallback: true,
					      hot: true,
					      inline: true,
						  	contentBase: path.join(__dirname, "dist"),
						  	compress: true,
			   				stats: { colors: true },
						  	port: 3000,
						  	host:'localhost',
						  	publicPath:"/web/",
						   	//后端请求 跨域处理
					        proxy: {  
					            '/test/*': {  
					                target: 'http://localhost:8888',  
					                secure: false,
					                changeOrigin: true,
					                pathRewrite:{'^/test':''}
					            }  
					        }  
					};
								
if (minimize) {

    plugins.push(
        /*
         * Uglify
         * （压缩）
         * */
        new webpack.optimize.UglifyJsPlugin({ // js、css都会压缩
            compress: {
                warnings: false
            }
        })
    );
    plugins.push(
    	 new OptimizeCssAssetsPlugin({
		      assetNameRegExp: /\.css$/g,
		      cssProcessor: require('cssnano'),
		      cssProcessorOptions: { discardComments: {removeAll: true } },
		      canPrint: true
	    })
    )

}								
								
								
var config = {
		"entry":entry,
		"output":output,
		"module":{
			"rules":rules
		},
		"plugins":plugins
}

if(devServer){
	config = Merge(config,{
		"plugins":[
   	 		new OpenBrowserPlugin({url: 'http://localhost:3000/web/html/index.html'})
		],
		"devServer":devServerConfig
	})
}




module.exports =config;





