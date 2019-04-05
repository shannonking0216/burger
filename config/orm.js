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
    console.log("QUERY STRING:", queryString);
    const mysqlreplacemntArr = cols.concat(vals);
    console.log(mysqlreplacemntArr);
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
    const queryString = "UPDATE" + table + "WHERE ?? = ?;";
    console.log(queryString);

    connection.query(queryString, [col, vals], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // add a delete method to the orm
  // // DELETE FROM tableName WHERE col = value
  // delete: function(table, col, val, cb) {
  //   const queryString = "DELETE FROM ?? WHERE ?? = ?";
  //   connection.query(queryString, [table, col, val], (err, results) => {
  //     if(err) throw err;
  //     cb(results);
  //   });
  // }
};

// orm.delete("cats", "id", 1, (data) => {
//   console.log(data);
// });

// Export the orm object for the model (burger.js).
module.exports = orm;
