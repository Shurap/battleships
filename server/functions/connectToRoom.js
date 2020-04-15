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

        io.in(gameName).emit('connected to room', newPlayer);
        io.in(gameName).emit('terminal', `gameName ${gameName} created! Waiting opponent...`);
      })

    } else if (this.adapter.rooms[gameName].length === 1) {
      this.join(gameName, async function () {

        await newPlayer.save(function (err) {
          if (err) throw error;
        })

        const query = Player.find({ 'room': gameName });
        const playerSecond = query.find({ 'socketId': socketId })
        query.findOneAndUpdate({ 'socketId': { $ne: socketId } }, { opponent: socketId }, { new: true })
          .then((data) => {
            playerSecond.updateOne({ 'socketId': socketId }, { opponent: data.socketId })
              .then(() => { }) //TODO Set here error
          });

        io.to(socketId).emit('connected to room', newPlayer);
        io.in(gameName).emit('terminal', 'Two players connected');
      })
    } else {
      io.in(socketId).emit('error', 'Room is full!');//???????????
    }
  }
}

module.exports = connectToRoom;