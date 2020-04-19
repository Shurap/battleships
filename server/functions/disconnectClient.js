const Player = require('../models/player');

function disconnectClient(io) {

  return async function () {

    const socketId = this.id;

    const playerDeleted = await Player.findOneAndRemove({ socketId: socketId })
    io.in(playerDeleted.room).emit('terminal', `${playerDeleted.nick} disconnected`);

    //TODO Make showing error in front
  }
}

module.exports = disconnectClient;

// Player.findOneAndRemove({ socketId: socketId })
// .then((playerDeleted) => {
//   io.in(playerDeleted.room).emit('terminal', `${playerDeleted.nick} disconnected`);
// })