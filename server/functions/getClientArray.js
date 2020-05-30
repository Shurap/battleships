const Player = require('../models/player');

function getClientArray(io) {

  return async function ({ info, arrayMyField }) {

    Player.findByIdAndUpdate(
      { _id: info.dbId },
      { field: arrayMyField },
      () => { } //TODO why?
    );

    const field = await Player.find({ 'room': info.room }, 'field')
    const values = field.map((element) => {
      return element.field.length
    });
    io.in(info.room).emit('terminal', `First player ready. Waiting second player!`);

    if (values[0] && values[1]) {
      io.in(info.room).emit('terminal', `BATTLE!!!`);
      io.in(info.room).emit('begin battle');

      const firstId = info.socketId;
      const secondId = await Player.find({ 'socketId': firstId }, 'opponent')
      io.in(firstId).emit('battle', 'turn');
      io.in(secondId[0].opponent).emit('battle', 'wait');
    }
  }
}
module.exports = getClientArray;