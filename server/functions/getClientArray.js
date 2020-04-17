const Player = require('../models/player');

function getClientArray(io) {

  return function ({info, arrayMyField}) {

    // console.log(info, arrayMyField)
    // const socketId = this.id;
console.log('1')
    Player.findByIdAndUpdate({_id: info.dbId}, {field: arrayMyField})
    .then(()=>{console.log('2')})
    console.log('3')

   

    // ke`nnels.findByIdAndUpdate(
    //   { _id: "5db6b26730f133b65dbbe459" },
    //   { breed: "Great Dane" },
    //   function(err, result) {
    //     if (err) {
    //       res.send(err);
    //     } else {
    //       res.send(result);
    //     }
    //   }
    // );
  }
}

module.exports = getClientArray;