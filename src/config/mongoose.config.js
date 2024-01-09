const mongoose = require('mongoose');

const connectToDB = () => {
  mongoose.connect('mongodb://localhost:27017/coding_dojo_btcamp')
  .then(() => console.log('Connected to Data Base...'))
  .catch(err => console.error('Could not connect to the Data Base...', err))
}

module.exports = connectToDB