var gulp     	= require('gulp'), 
	concat     	= require('gulp-concat'), 
//	rename     	= require('gulp-rename'), 
	uglify     	= require('gulp-uglify'),
	sourcemaps 	= require('gulp-sourcemaps'),
	to5 		= require('gulp-6to5'),
	browserify = require('gulp-browserify'),
	gulpif = require('gulp-if'),
	connect = require('gulp-connect'),
	config 		= require('../gulp_config')();


gulp.task('js', function() {
  gulp.src(config.js.all)
  	.pipe(to5())
    .pipe(concat('script.js'))
	.pipe(sourcemaps.init({loadMaps: true}))
    .pipe(browserify())
    .pipe(uglify().on('error', errorHandler))
 //   .pipe(gulpif(config.env === 'production', uglify().on('error', errorHandler)))
    .pipe(sourcemaps.write('./')).on('error', errorHandler)
    .pipe(gulp.dest(config.js.outputJS)).on('error', errorHandler)
    .pipe(connect.reload());
});

function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
