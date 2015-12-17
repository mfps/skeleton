var gulp		= require('gulp'),
    gutil 		= require('gulp-util'),
    gulpif 		= require('gulp-if'),
    connect 	= require('gulp-connect'),
    config 		= require('../gulp_config')(),
    minifyHTML = require('gulp-minify-html');


gulp.task('html', function() {
  	gulp.src(config.html.all)
	    .pipe(minifyHTML())
	    .pipe(gulp.dest(config.html.outputHTML))
	    .pipe(connect.reload())
});