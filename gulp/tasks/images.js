const gulp 		  = require('gulp'),
	    config 		= require('../gulp_config')(),
	    gutil 		= require('gulp-util'),
      connect 	= require('gulp-connect'),
      imagemin 	= require('gulp-imagemin'),
      pngquant  = require('imagemin-pngquant');
      gulpif 		= require('gulp-if');

gulp.task('images', function() {
  gulp.src(config.images.all)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.images.outputImages + 'images'))
    .pipe(connect.reload())
});
