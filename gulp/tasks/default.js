var config = require('../gulp_config')(),
    gulp = require('gulp');




gulp.task('default', ['js', 'styles', 'html', 'connect', 'watch']);

