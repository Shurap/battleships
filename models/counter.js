const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CounterSchema = new Schema(
  {
    name: { type: String },
    countBegin: { type: Number },
    countGame: { type: Number },
    countEnd: { type: Number },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Counter', CounterSchema);