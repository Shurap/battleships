const Player = require('../models/player');

function disconnectClient(io) {

  return async function () {

    const socketId = this.id;

    const playerDeleted = await Player.findOneAndRemove({ socketId: socketId })
    if (playerDeleted) {
      io.in(playerDeleted.room).emit('terminal', `${playerDeleted.nick} disconnected`);
    }


    //TODO Make showing error in front
  }
}

module.exports = disconnectClient;