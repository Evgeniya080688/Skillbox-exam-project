const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   	entry: {
    	main: ['babel-polyfill', './src/index.js', './src/index.css']
  	},
   	
   	output: {
	    path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		chunkFilename: '[name].bundle.js'
   	},
   	devServer: {
	    contentBase: path.join(__dirname, "src"),
	    compress: true,
	    port: 8080,
	    watchContentBase: true,
	    progress: true
	},
	plugins: [
     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    	new CleanWebpackPlugin(),
    	new MiniCssExtractPlugin({
	      filename: '[name].css',
	      chunkFilename: '[id].css',
	    }),
    	new HtmlWebpackPlugin({
	      	template: "./src/index.html"
	    }),
	    
   	],
	module: {
	  	rules: [
		    {
		      	test: /\.m?js$/,
		      	exclude: /(node_modules|bower_components)/,
		      	use: {
			        loader: 'babel-loader',
			      }
		    },
		    {
		    	test: /\.(sa|sc|c)ss$/,
			    exclude: /node_modules/,
			    use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader',
			    'postcss-loader'
			    ]
		    },
			{
			    test: /\.(png|jpg|gif|svg)$/,
			    loader: 'file-loader',
			    options: {
			        //name: '[path][name].[ext]',
			        name: '[name].[ext]',
				}
			},
			{
		        test: /\.less$/,
		        loader: 'less-loader', // compiles Less to CSS
		    }	
	  	]
 	},
 	
};
