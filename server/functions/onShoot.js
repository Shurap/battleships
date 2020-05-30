const Player = require('../models/player');
const countShips = require('./countShips');
const countKill = require('./countKill');
const { SHIP, KILL, EMPTY, MISS, TURN, WAIT } = require('../constants');

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
      //----------------------------
      // if (countKill(arrayPlayerWhoTarget, KILL)) {
      //   io.in(PlayerWhoShootSocketId).emit('the end', 'You WON !');
      //   io.in(PlayerWhoTargetSocketId).emit('the end', 'You LOST !');
      // }
      //-----------------------------------
      Player.findOneAndUpdate(
        { 'socketId': PlayerWhoTargetSocketId },
        { field: arrayPlayerWhoTarget },
        () => {
          const count = countShips(cellId, arrayPlayerWhoTarget);
          io.in(PlayerWhoShootSocketId).emit('result shoot', cellId, KILL, +count + 1, TURN);
          io.in(PlayerWhoTargetSocketId).emit('where shoot', cellId, KILL, WAIT);
        }
      );
    }

    if (arrayPlayerWhoTarget[indexCell].content === EMPTY) {
      const count = countShips(cellId, arrayPlayerWhoTarget);
      io.in(PlayerWhoShootSocketId).emit('result shoot', cellId, EMPTY, +count, WAIT);
      io.in(PlayerWhoTargetSocketId).emit('where shoot', cellId, MISS, TURN);
    }
//---------------------------------
    if (countKill(arrayPlayerWhoTarget, KILL)) {
      const arrayWon = await Player.find({ 'socketId': PlayerWhoShootSocketId }, 'field');
      // console.log(arrayWon)
      const arrayLost = await Player.find({ 'socketId': PlayerWhoTargetSocketId }, 'field');
      io.in(PlayerWhoShootSocketId).emit('the end', 'You WON !', arrayLost[0].field);
      io.in(PlayerWhoTargetSocketId).emit('the end', 'You LOST !', arrayWon[0].field);
    }

  }
}

module.exports = onShoot;