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
  updateOne: function(obj, condition, cb) {

    orm.updateOne("burgers", obj, condition, (res) => {
      cb(res);
    });
  }
};
module.exports = burger;

// Export the database functions for the controller (burgerController.js).
