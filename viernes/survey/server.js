const express = require('express');
const app = express();
const server = app.listen(8080);
const io = require('socket.io')(server);

var number = Math.floor(Math.random()*100+1);

app.set( 'views', __dirname + '/views' ); 
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

let dojoinfo = {}

app.get('/', function( request, response ){
	response.render( 'main' );
    console.log(number);
});

app.post( '/load/info', function(request,response){
    console.log( request.body );
	const name = request.body.yname;
	const location = request.body.location;
	const language = request.body.language;
	const comment = request.body.comment;

	dojoinfo.name = name;
	dojoinfo.location = location;
	dojoinfo.language = language;
	dojoinfo.comment = comment;
	
	response.redirect( '/info' )
});

app.get('/info', function( request, response ){
	response.render( 'info', {dojoinfo} ); 
});

app.listen(function(){
    console.log( 'This server is running in port 8080.' );
});



