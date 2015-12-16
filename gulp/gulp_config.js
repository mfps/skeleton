'use strict';
var gulp = require('gulp');
//var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});

module.exports = function(){
	var env;
	var app = './app/';
  	var appCSS = './app/components/**/*.scss';
  	var vendorJS = './app/js/**/*.js';
  	var vendorCSS = './app/vendor/**/*.css'
	var paths = {
		js: {
      		entry: app + 'components/**/*.js',
      		vendor: app + 'vendor/**/*.js',
      		all: app + '**/**/**/*.js'
    	},
    	css: {

    	},
    	names: {
      		css: 'styles.min.css',
      		js: {
        		app: 'app.min.js',
        		vendor: 'vendor.min.js'
      		}
    	},
    	names: {
      		css: 'styles.min.css',
      		js: {
       			app: 'app.min.js',
        		vendor: 'vendor.min.js'
      		}
    	},
    	index: app + 'index.html',
    	client: app,
    	env: process.env.NODE_ENV || 'development'
    //	bower: {
    //  		json: require('../bower.json'),
    //  		directory: app + './vendor/',
    //  		ignorePath: '../..'
    //	}
	}

	if (paths.env==='development') {
		paths.css.outputCSS = 'builds/development/css/';
	    paths.sassStyle = 'expanded';
		paths.js.outputJS = 'builds/development/js/';
	} else {
	  	paths.css.outputCSS = 'builds/production/css/';
	  	paths.sassStyle = 'compressed';
	  	paths.js.outputJS = 'builds/production/js/';
	}


	return paths;
};