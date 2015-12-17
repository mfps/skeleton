const gulp    = require('gulp'),
      config  = require('../gulp_config')(),
      nodemon = require('gulp-nodemon');


gulp.task('connect', function(){
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: {
      PORT: 8000
    },
    ignore: ['./node_modules/**'],
    debug: true
  })
  .on('start', function(){
    console.log('STARTING!!!!!')
  })
  .on('restart', function(){
    console.log("restating")
  });
});