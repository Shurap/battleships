const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema(
  {
    socketId: { type: String },
    nick: { type: String },
    room: { type: String },
    field: [],
    opponent: { type: String }
  },
  { versionKey: false }
);

module.exports = mongoose.model('Player', PlayerSchema);
