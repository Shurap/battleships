const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

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
  const { id } = socket.client;
  console.log(`User connected: ${id}`);
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});