'use strict';
var gulp = require('gulp');
//var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});

module.exports = function(){
	var env;
	var app = './app/components/';
  	var appCSS = './app/components/**/*.scss';
  	var vendorJS = './app/js/**/*.js';
  	var vendorCSS = './app/vendor/**/*.css'
	var paths = {
		js: {
      		all: app + '**/*.js'
    	},
    	css: {
    		entry: app + 'css/styles.scss',
      		all: app + '**/*.scss'
    	},
    	html: {
    		all: ['app/*.html' ,app + '**/*.html']
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
    	images: {
    		all: 'app/images/**/*.*'
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
		paths.css.outputCSS = 'builds/development/';
	    paths.sassStyle	 	= 'expanded';
		paths.js.outputJS 	= 'builds/development/js/';
		paths.outputImages 	= 'builds/development/images/';
		paths.html.outputHTML	= 'builds/development/components/';
		paths.images.outputImages	= 'builds/development/images/';
	} else {
	  	paths.css.outputCSS = 'builds/production/';
	  	paths.sassStyle 	= 'compressed';
	  	paths.js.outputJS 	= 'builds/production/js/';
		paths.outputImages 	= 'builds/production/images/';
		paths.html.outputHTML	= 'builds/production/components/';
		paths.images.outputImages	= 'builds/production/images/';
	}


	return paths;
};