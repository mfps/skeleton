const	config 	= require('../gulp_config')(),
    	gulp 	= require('gulp');


gulp.task('watch', function() {
  gulp.watch(config.js.all, ['js']);
  gulp.watch(config.css.all, ['styles']);
  gulp.watch(config.html.all, ['html']);
  gulp.watch(config.images.all, ['images']);
});