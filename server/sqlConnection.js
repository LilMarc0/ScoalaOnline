var mysql = require('mysql');

var connectionPool = mysql.createPool({
    connectionLimit: 10,
    host     : process.env.SQL_HOST,
    user     : process.env.SQL_USER,
    password : process.env.SQL_PASS,
    database : process.env.SQL_DB,
    port: process.env.SQL_PORT
  });

var getConnection = function (cb) {
    connectionPool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the cb instead of throwing it
        if(err) {
          return cb(err);
        }
        cb(null, connection);
    });
};

module.exports = getConnection;
  