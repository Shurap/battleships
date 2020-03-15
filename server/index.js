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
  // console.log('all:', allClients);
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
    if (element.id === data.id) {
      element['array'] = data.arrayMyField;
    }
  });

  io.in(data.info.room).emit('terminal', `Player ${data.info.nick} ready to battle`);
  if (this.adapter.rooms[data.info.room].length === 2) {
    io.in(data.info.room).emit('terminal', `BATTLE!!!`);
    io.in(data.info.room).emit('begin battle');
  }

  //console.log(data)
  //console.log(this.adapter.rooms[data.info.room].length)
}