const socketInfo = {};

module.exports = {
  startSocketServer(server) {
    const io = require('socket.io')(server);
    io.on('connection', function (socket) {
      socketInfo[socket.id] = socket;
      socket.emit('handshake', socket.id);
      socket.on('disconnect', () => {
        delete socketInfo[socket.id];
      })
    })
  },
  socketInfo
};
