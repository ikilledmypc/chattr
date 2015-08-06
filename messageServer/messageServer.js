/**
 * Created by tim on 16-7-15.
 */
var messages =  new Array();
messages.push("test test test");
var socketio = require('socket.io');
var io;

function socketServer(server) {
    io = socketio.listen(server);
    io.sockets.on('connection', function (socket) {
        console.log("client connected");
        socket.emit('initial messages',messages);
    })}


function newMessage(message){
    messages.push(message);
    io.emit('chat message',message);
}


module.exports = {
    getMessages : messages,
    newMessage : newMessage,
    socketServer : socketServer,
};