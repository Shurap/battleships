//TODO Make showing error in front
const Player = require('../models/player');

function connectToRoom(io) {

  return function ({ nick, gameName }) {

    const socketId = this.id;

    const newPlayer = Player({
      socketId: socketId,
      nick: nick,
      room: gameName,
      field: [],
      opponent: ''
    });

    if (this.adapter.rooms[gameName] === undefined) {
      this.join(gameName, () => {

        newPlayer.save(function (err) {
          if (err) throw error;
        })
        io.to(gameName).emit('connected to room', newPlayer);
        io.in(gameName).emit('terminal', `Game ${gameName} created! Waiting opponent...`);
      })

    } else if (this.adapter.rooms[gameName].length === 1) {
      this.join(gameName, async function () {

        await newPlayer.save(function (err) {
          if (err) throw error;
        })

        const query = Player.find({ 'room': gameName });
        const playerSecond = query.find({ 'socketId': socketId })
        query.findOneAndUpdate({ 'socketId': { $ne: socketId } }, { opponent: socketId }, { new: true })
          .then((firstPlayer) => {
            io.to(firstPlayer.socketId).emit('connected to room', firstPlayer);
            playerSecond.findOneAndUpdate({ 'socketId': socketId }, { opponent: firstPlayer.socketId })
              .then((secondPlayer) => {
                io.to(secondPlayer.socketId).emit('connected to room', secondPlayer);
              }) //TODO Set here error
          });
        io.in(gameName).emit('terminal', 'Two players connected');
      })
    } else {
      io.in(socketId).emit('error', 'Room is full!');//???????????
    }
  }
}

module.exports = connectToRoom;