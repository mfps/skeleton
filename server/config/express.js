
	'use strict';
	const 	express 		= require('express'),
			logger 			= require('morgan'),
			bodyParser 		= require('body-parser'),
			path 			= require('path'),
			methodOverride 	= require('method-override'),
			helmet 			= require('helmet'),
			connect 		= require('connect-multiparty');

	module.exports = function(app, config){
		app.set('port', process.env.PORT || 8000);
		app.use(logger('dev'));
		app.use(connect());
		app.use(methodOverride());
		app.use(helmet.xssFilter());
		app.use(helmet.noCache());
		app.use(helmet.noSniff());
		app.use(helmet.frameguard());
		app.use(helmet.hidePoweredBy());


		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json({limit: '50mb'}));
		app.use(express.static(path.join(__dirname, '../../builds/development')));
	};