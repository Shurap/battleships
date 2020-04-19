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



      // console.log(firstId, secondId[0].opponent);



      // Player.findByIdAndUpdate({ _id: info.dbId }, { field: arrayMyField })
      //   .then(() => {
      //     Player.find({ 'room': info.room }, 'field')
      //       .then((data) => {
      //         const values = data.map((element) => {
      //           return element.field.length
      //         })
      //         if (values[0] && values[1]) {
      //           io.in(info.room).emit('terminal', `BATTLE!!!`);
      //           io.in(info.room).emit('begin battle');

      //           // io.in(clientsInRoom[0].id).emit('battle', 'turn');
      //           // io.in(clientsInRoom[1].id).emit('battle', 'wait');
      //         }
      //       })
      //   })





















// let userRead = async (userID) => {

//   mongoose.connect(`${url}${database}`, optionsConnect);

//   return await User.find({ uid: userID }, (err, doc) => {
//       mongoose.disconnect();
//       return doc;
//   });

// };