
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.on('startSlider', () => {
    io.emit("start");
  });
  socket.on('swipeLeft', () => {
    io.emit("prev");
  });
  socket.on('swipeRight', () => {
    io.emit("next");
  });
});

http.listen(3333, () => {
  console.log('listening on *:3333');
});
