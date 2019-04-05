// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  //cb(result) = res from orm
  selectAll: function(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  }
};
module.exports = burger;

//   // add a delete for the burger
//   delete: function(col, val, cb) {
//     // call the orm delete method 
//     // with the "burger" table
//     orm.delete("burger", col, val, (data) => {
//       cb(data);
//     });
//   }
// cat.delete("id", 6, (data) => {
//   console.log(data);
// });

// Export the database functions for the controller (burgerController.js).
