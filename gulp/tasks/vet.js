(function(){
	'use strict';

	const gulp 	= require('gulp'),
      	config  = require('../gulp_config')(),
      	jshint = require('gulp-jshint'),
      	jscs = require('gulp-jscs'),
      	stylish = require('jshint-stylish');

    gulp.task('vet', () => {
		gulp.src(config.js.all)
	    	.pipe(jshint())
	    	.pipe(jscs())
        	.pipe(jscs.reporter())
	  		.pipe(jshint.reporter(stylish));
	});

})();