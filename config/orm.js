// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll: function (table, cb) {
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    const queryString = "INSERT INTO " + table + " (??, ??) VALUES (?, ?);";
    const mysqlreplacemntArr = cols.concat(vals);
    connection.query(queryString, mysqlreplacemntArr, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (table, obj, condition, cb) {
    const queryString = "UPDATE " + table + "SET ? WHERE `" + condition + "`";
    connection.query(queryString, obj, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
    connection.query(queryString, [''])
  },
};
// Export the orm object for the model burger, in burger.js
module.exports = orm;
