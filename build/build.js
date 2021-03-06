var webpack = require('webpack');
var config = require('./webpack.base');

webpack(config, function (err, stats) {
	  if (err) throw err;
	  process.stdout.write(stats.toString({
		  colors: true,
		  modules: false,
		  children: false,
		  chunks: false,
		  chunkModules: false
	}) + '\n');
});
