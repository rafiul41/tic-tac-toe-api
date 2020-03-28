module.exports = {
  startSocketServer(server) {
    const io = require('socket.io')(server);
    io.on('connection', function (socket) {
      socket.emit('handshake', socket.id);
    })
  }
};
