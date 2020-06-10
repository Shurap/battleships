const Player = require('../models/player');
const incrementCount = require('./incrementCount');

function getClientArray(io) {

  return async function ({ info, arrayMyField }) {

    await Player.findByIdAndUpdate(
      { _id: info.dbId },
      { field: arrayMyField },
      (err) => {
        if (err) console.log('err', err)
      }
    );

    const field = await Player.find({ 'room': info.room }, 'field')
    const values = field.map((element) => {
      return element.field.length
    });
    io.in(info.room).emit('terminal', `First player ready. Waiting second player!`);

    if (values[0] && values[1]) {
      io.in(info.room).emit('terminal', `BATTLE!!!`);
      io.in(info.room).emit('begin battle');
      
      incrementCount('countGame');

      const firstId = info.socketId;
      const secondId = await Player.find({ 'socketId': firstId }, 'opponent')
      io.in(firstId).emit('battle', 'turn');
      io.in(secondId[0].opponent).emit('battle', 'wait');
    }
  }
}
module.exports = getClientArray;