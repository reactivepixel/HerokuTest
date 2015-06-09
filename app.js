// npm modules
var express 			= require('express'),
	app 						= express(),
	port 						= process.env.PORT || 3000;
  
// static file handling
app.use(express.static(__dirname+'/public'));

// START THE SERVER
// =============================================================================
var server = app.listen(port);
console.log('Starting Node Server on Port ' + port);