const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const allClients = [];

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

// app.get('/', (req, res) => {
//   app.use(express.static(path.join(__dirname, '../client/public')));
//   res.sendFile(__dirname + 'index.html');
// });

app.get('/ping', function (req, res) {
  return res.send('pong');
});

io.on("connection", socket => {
  //-----------------------------later delete
  // const { id } = socket.client;
  // console.log(`User connected: ${id}`);
  //-----------------------------
  socket.on("chat message", (msg) => {
    io.in(msg.room).emit('chat message', msg);
  });
  socket.on('create game', connectToRoom);
  socket.on('disconnect', disconnectClient);
  socket.on('field', getClientArray);
});

function connectToRoom(data) {
  const newGamer = {
    nick: data.nick,
    id: this.id,
    room: data.game
  }
  if (this.adapter.rooms[data.game] === undefined) {
    this.join(data.game)
    io.in(data.game).emit('connected to room', newGamer);
    io.in(data.game).emit('terminal', `Game ${data.game} created! Waiting opponent...`);
    allClients.push(newGamer);
  } else if (this.adapter.rooms[data.game].length === 1) {
    this.join(data.game)
    io.to(this.id).emit('connected to room', newGamer);
    io.in(data.game).emit('terminal', 'Two players connected');
    allClients.push(newGamer);
  } else {
    io.in(data.game).emit('terminal', 'Room is full!');//???????????
  }
}

function disconnectClient() {
  const value = (element) => element.id === this.id;
  const disconnectedGamer = allClients.find(value);
  const index = allClients.indexOf(disconnectedGamer);
  if (disconnectedGamer) {
    io.in(disconnectedGamer.room).emit('terminal', `${disconnectedGamer.nick} disconnected`);
    allClients.splice(index, 1);
  }
}

function getClientArray(data) {
  allClients.forEach((element) => {
    if (element.id === data.info.id) {
      element['array'] = data.arrayMyField;
    }
  });
  io.in(data.info.room).emit('terminal', `Player ${data.info.nick} ready to battle`);
  const clientsInRoom = allClients.filter((element) => element.room === data.info.room);
  if ((clientsInRoom.length === 2) && clientsInRoom[0].hasOwnProperty('array') && clientsInRoom[1].hasOwnProperty('array')) {
    io.in(data.info.room).emit('terminal', `BATTLE!!!`);
    io.in(data.info.room).emit('begin battle');
    io.in(clientsInRoom[0].id).emit('battle', 'turn');
    io.in(clientsInRoom[1].id).emit('battle', 'wait');
  }
}