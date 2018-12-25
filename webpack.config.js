const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');      //生成html
const CleanWebpackPlugin = require('clean-webpack-plugin');        //清理dist文件
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');  //引入css分离插件


module.exports = {
	mode:'production',
	entry: {
			index:'./src/index.js'	
		},
	  output: {
	    filename: 'js/[name].js',
	    path: path.resolve(__dirname, 'dist'),
	  },
    module:{
        rules:[
            {
							test:/\.vue$/,
						  loader: 'vue-loader'
					  },
						{
							test: /\.css$/,
							use: ExtractTextWebapckPlugin.extract({         //打包css
								fallback: "style-loader",
								use:'css-loader',
								publicPath:'../'
							}),
							exclude: /node_modules/
						},
						{
							test:/\.(woff2?|eot|ttf|otf|svg)(\?*)$/,
							use:[
								{
									loader:'file-loader',
									options:{
										name:'[name].[ext]',
										outputPath:'font',           //放在font目录下
									}
								}
							]
						},
						{
							test: /\.js$/,
							exclude: /node_modules/,
							use: {
								loader: 'babel-loader',    //es6 转 es5
								options: {
									presets: ['@babel/preset-env']
								}
							}
						},
						{                                
							test:/\.(png|jpg|gif)$/,						//处理图片
							use:[
								{
									loader:'file-loader',
									options:{
										name:'[name].[ext]',
										outputPath:'image',           //放在image目录下
									}
								}
							]
						},
						{
							test:/\.html$/,
							use:[{
								loader:'html-loader',
									options: {
										attrs: ['img:src']
									}
							}]
						}	
        ]
    },
		plugins: [
			new HtmlWebpackPlugin({									//生成html文件				
				chunks:['index'],                  		//模板内加载index打包的js
				filename: "index.html",
				template:'./src/index.html'           //引入自己的模板
			}),
      new VueLoaderPlugin(),
			new ExtractTextWebapckPlugin({
					filename:'css/[name].css',
			}),
			new CleanWebpackPlugin(['dist']),    //清理dist文件

    ]
}