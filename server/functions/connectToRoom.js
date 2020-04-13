
const Player = require('../models/player');

function connectToRoom(io) {

  return function ({ nick, game }) {

    const socketId = this.id;

    const newPlayer = Player({
      socketId: socketId,
      nick: nick,
      room: game,
      field: [],
      opponent: ''
    });

    if (this.adapter.rooms[game] === undefined) {
      this.join(game, () => {

        newPlayer.save(function (err) {
          if (err) {
            throw error;
          }
        })

        io.in(game).emit('connected to room', newPlayer);
        io.in(game).emit('terminal', `Game ${game} created! Waiting opponent...`);
      })

    } else if (this.adapter.rooms[game].length === 1) {
      this.join(game, async function () {

        await newPlayer.save(function (err) {
          if (err) {
            throw error;
          }
        })



        //----------------------
        //   console.log(socketId)
        //   const query = Player.find({ 'socketId': socketId });
        //   query.select('nick');

        //   query.exec(function(err, data){

        //     console.log(data)
        // })

        Player.updateOne({ 'socketId': socketId }, { opponent: socketId }, function (err, result) {

          // mongoose.disconnect();
          if (err) return console.log(err);
          console.log(result);
        });
        console.log('test')


        
        //-------------------------

        io.to(this.id).emit('connected to room', newPlayer);
        io.in(game).emit('terminal', 'Two players connected');
      })
    } else {
      io.in(this.id).emit('error', 'Room is full!');//???????????
    }
  }
}

module.exports = connectToRoom;