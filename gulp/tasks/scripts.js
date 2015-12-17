const	gulp     	= require('gulp'), 
		concat     	= require('gulp-concat'), 
	    gutil 		= require('gulp-util'),
		uglify     	= require('gulp-uglify'),
		sourcemaps 	= require('gulp-sourcemaps'),
		to5 		= require('gulp-6to5'),
		browserify 	= require('gulp-browserify'),
		gulpif 		= require('gulp-if'),
		connect 	= require('gulp-connect'),
		config 		= require('../gulp_config')();


gulp.task('js', function() {
  gulp.src(config.js.all)
  	.pipe(to5())
    .pipe(concat('script.js'))
	.pipe(sourcemaps.init({loadMaps: true}))
    .pipe(browserify())
    .pipe(uglify().on('error', gutil.log))
    .pipe(sourcemaps.write('./').on('error', gutil.log))
    .pipe(gulp.dest(config.js.outputJS).on('error', gutil.log))
    .pipe(connect.reload())
});