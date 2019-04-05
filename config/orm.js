// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll: function(table, cb) {
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    const queryString = "INSERT INTO " + table + " (??, ??) VALUES (?, ?);";
    const mysqlreplacemntArr = cols.concat(vals);
    // vals array
    //[ 'Bacon Cheddar Burger', true ]
    connection.query(queryString, mysqlreplacemntArr, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
// An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, col, vals, cb) {
    const queryString = "UPDATE " + table + " (??, ??) VALUES (?, ?);";
    const mysqlreplacemntArr = cols.concat(vals);
    connection.query(queryString, mysqlreplacemntArr, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};
// Export the orm object for the model burger, in burger.js).
module.exports = orm;
