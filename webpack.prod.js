const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('cssnano');

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
   	mode: 'production',
   	optimization: {
	    minimizer: [
	    	new UglifyJsPlugin({
		        sourceMap: true,
		        uglifyOptions: {
			        compress: {
			            inline: false,
			            drop_console: true
		          		},
		        	},
		      	}),
		    new OptimizeCSSPlugin({
			        cssProcessorOptions: {
			          "preset": "advanced",
			          "safe": true,
			          "map": { "inline": false },
			        },
		      	}),
		    new TerserJSPlugin({}), 
		    new OptimizeCSSAssetsPlugin({}),
		    new webpack.optimize.MinChunkSizePlugin({
			  minChunkSize: 10000 // Minimum number of characters
			});
		    ],
		    
		    
		  
  	},
});