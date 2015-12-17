(function(){
	'use strict';
	var express 	= require('express'),
		config = require('./server/config/config'),
		app 		= express(),
		router	= express.Router();
		
		
	/*** EXPRESS CONFIG ***/	
	require('./server/config/express')(app, config);
	/*** ROUTES ***/
	//require('./server/routes/')(app, router);
	/*
	 |--------------------------------------------------------------------------
	 | Start the Server
	 |--------------------------------------------------------------------------
	 */
	app.listen(app.get('port'), function() {
	  console.log('Express server listening on port ' + app.get('port'));
	});
})();