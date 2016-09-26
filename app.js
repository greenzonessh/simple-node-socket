var app = require('express')(),
	server = require('http').Server(app),
	socket = require('socket.io')(server);

server.listen(8000, function(){
	console.log('Server listening... 8000');
});

app.get('/', function(req, res){
	res.sendFile(__dirname+'/view/index.html');
});

socket.on('connection', function(dataScoket){
	//send data using object//
	// dataScoket.emit('Ping',{ping:'wkwkwkk...'});

	//send data using string//
	// dataScoket.emit('Ping','Pingwkwkwkk...');

	/*
		melakukan emit secara terusm menerus
		dari server ke client dan sebaliknya dari client ke server
	*/
	dataScoket.emit('keClient',0);
	dataScoket.on('keServer', function(data){
		console.log('Dari client '+data);
		data = data + 1;
		dataScoket.emit('keClient', data);
	});
})
