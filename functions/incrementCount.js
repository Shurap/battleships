const Counter = require('../models/counter');

function incrementCount(field) {
  Counter.find({ 'name': 'counter' }, field, (err, data) => {
    const count = data[0][field] + 1;
    Counter.findOneAndUpdate({ 'name': 'counter' }, { [field]: count }, (err) => { })
  });

}

module.exports = incrementCount;