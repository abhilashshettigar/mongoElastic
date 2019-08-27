const mongoose = require('mongoose');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
exports.connect = () => {
  let mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/test'
  mongoose.connect(mongoUri, {
    keepAlive: 1,
    useNewUrlParser: true,
  });
  return mongoose.connection;
};
