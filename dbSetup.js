var mongoose = require('mongoose');
const dbURI = require("./settings").DEV_DB_URI;
var debug = require('debug')('miniproject:mongo');

function connect(dbUriString){
 const conStr = dbUriString ? dbUriString : dbURI;
 // This returns a promise
 return mongoose.connect(conStr,{ useNewUrlParser: true, useCreateIndex: true }); 
}
mongoose.connection.once('connected', function () { 
 debug('Mongoose default connection open to ' + dbURI);
});
mongoose.connection.once('error',function (err) { 
 debug('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  debug('Mongoose connection closed ' );
});

module.exports = connect;
