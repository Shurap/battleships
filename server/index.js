require('dotenv').config();
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const connectToRoom = require('./functions/connectToRoom');
const disconnectClient = require('./functions/disconnectClient');
const getClientArray = require('./functions/getClientArray');
const onShoot = require('./functions/onShoot');

const mongoose = require('mongoose');
const Player = require('./models/player');
// mongoose.connect('mongodb://127.0.0.1:27017/players', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error:', err.message);
});
db.once('open', function () {
  console.log("MongoDB database connected successfully!!!");
})

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
  socket.on('create game', connectToRoom(io));
  socket.on('disconnect', disconnectClient(io));
  socket.on('field', getClientArray(io));
  socket.on('shoot', onShoot(io));
});