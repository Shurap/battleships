const Player = require('../models/player');
const countShips = require('./countShips');

function onShoot(io) {

  return async function ({ player, cellId }) {

    const PlayerWhoShootSocketId = player.socketId;
    const PlayerWhoTargetSocketId = player.opponent;

    const valuePlayerWhoTarget = await Player.find({ 'socketId': PlayerWhoTargetSocketId }, 'field')
    const arrayPlayerWhoTarget = valuePlayerWhoTarget[0].field;

    const isCell = (element) => {
      return (element.id === cellId)
    }
    const indexCell = arrayPlayerWhoTarget.findIndex(isCell);

    if (arrayPlayerWhoTarget[indexCell].content === 'ship') {
      arrayPlayerWhoTarget[indexCell].content = 'kill';

      Player.findOneAndUpdate(
        { 'socketId': PlayerWhoTargetSocketId },
        { field: arrayPlayerWhoTarget },
        () => {
          io.in(PlayerWhoShootSocketId).emit('result shoot', cellId, 'kill');
        }
      );
    }

    if (arrayPlayerWhoTarget[indexCell].content === 'empty') {
      const count = countShips(cellId, arrayPlayerWhoTarget);
      io.in(PlayerWhoShootSocketId).emit('result shoot', cellId, count);
    }


  }
}

module.exports = onShoot;