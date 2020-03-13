const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

// const allRooms = [];
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
    io.emit("chat message", msg);
  });

  socket.on('create game', connectToRoom);
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
    io.in(data.game).emit('connected to room', newGamer);
    io.in(data.game).emit('terminal', 'Two players connected');
    allClients.push(newGamer);
  } else {
    io.in(data.game).emit('terminal', 'Room is full!');
  }
  console.log('all', allClients);
}