const	gulp		= require('gulp'),
    	gutil 		= require('gulp-util'),
    	config 		= require('../gulp_config')(), // Relative to this file
    	sass 		= require('gulp-sass'),
    	connect 	= require('gulp-connect'),
	    please 		= require('gulp-pleeease'),
	    sourcemaps  = require('gulp-sourcemaps');


gulp.task('styles', function() {
	gulp.src(config.css.all)
	    .pipe(sourcemaps.init({loadMaps: true}))
	    .pipe(sass().on('error', gutil.log))
	    .pipe(please({
	      "autoprefixer": true,
	      "filters": true,
	      "rem": true,
	      "opacity": true
	    }))
	    .pipe(sourcemaps.write('./'))
	    .pipe(gulp.dest(config.css.outputCSS).on('error', gutil.log))
	    .pipe(connect.reload())
});