

	// set up ========================
    var express  = require('express');
    
	var argv = require('optimist').argv;//
	var app      = express(); 								// create our app w/ express

	// configuration =================


	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	// listen (start app with node server.js) ======================================
	app.listen(8080,argv.fe_ip);
	console.log("App listening on port 8080 @ 35.196.11.73");