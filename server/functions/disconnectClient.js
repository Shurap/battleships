const Player = require('../models/player');

function disconnectClient(io) {

  return function () {

    const socketId = this.id;

    Player.findOneAndRemove({ socketId: socketId })
      .then((playerDeleted) => {
        io.in(playerDeleted.room).emit('terminal', `${playerDeleted.nick} disconnected`);
      })
    //TODO Make showing error in front
  }
}

module.exports = disconnectClient;