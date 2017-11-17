/*var express = require('express')
, routes = require('./routes');
var app = express();
*/

var express = require('express'), 
	load = require('express-load'), 
	app = express();

load ('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//app.get('/', routes.index);
//app.get('/usuarios', routes.user.index);

app.listen(65000, function(){
	console.log("Ntalk no ar.");
});