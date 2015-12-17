var gulp		= require('gulp'),
    gutil 		= require('gulp-util'),
    gulpif 		= require('gulp-if'),
    connect 	= require('gulp-connect'),
    config 		= require('../gulp_config')(),
    minifyHTML = require('gulp-minify-html');


gulp.task('html', ['index'], function() {
  	gulp.src(config.html.all)
	    .pipe(minifyHTML())
	    .pipe(gulp.dest(config.html.outputHTML))
	    .pipe(connect.reload())
});

gulp.task('index', function() {
  	gulp.src('app/index.html')
	    .pipe(minifyHTML())
	    .pipe(gulp.dest(config.outputDir))
	    .pipe(connect.reload())
});