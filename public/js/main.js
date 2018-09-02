var socket = io();
var mainRunning = false;
var refreshIntervalId = null;

socket.emit('test_client', 'this is client talking');

socket.on('test_server', function (test) {
	document.getElementById('test').innerHTML = String(test);
});