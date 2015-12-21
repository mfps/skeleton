const	config 	= require('../gulp_config')(),
    	gulp 	= require('gulp');

gulp.task('default', ['vet', 'js', 'styles', 'html', 'connect', 'watch']);

