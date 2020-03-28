const socketInfo = {};

module.exports = {
  startSocketServer(server) {
    const io = require('socket.io')(server);
    io.on('connection', function (socket) {
      console.log('A user is connected');
      socketInfo.socket = socket;
      socket.emit('name', 'hi socket');
    })
  },
  socketInfo
};
