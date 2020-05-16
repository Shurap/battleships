const Player = require('../models/player');
const countShips = require('./countShips');
const { SHIP, KILL, EMPTY, MISS} = require('../constants');

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

    if (arrayPlayerWhoTarget[indexCell].content === SHIP) {
      arrayPlayerWhoTarget[indexCell].content = KILL;

      Player.findOneAndUpdate(
        { 'socketId': PlayerWhoTargetSocketId },
        { field: arrayPlayerWhoTarget },
        () => {
          const count = countShips(cellId, arrayPlayerWhoTarget);
          io.in(PlayerWhoShootSocketId).emit('result shoot', cellId, KILL, count);
        }
      );
    }

    if (arrayPlayerWhoTarget[indexCell].content === EMPTY) {
      const count = countShips(cellId, arrayPlayerWhoTarget);
      io.in(PlayerWhoShootSocketId).emit('result shoot', cellId, MISS, count);
    }


  }
}

module.exports = onShoot;