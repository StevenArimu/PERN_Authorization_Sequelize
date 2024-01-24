const Students = require("./students");
const Campuses = require("./campuses");
const User = require("./user");

//Table
//
Campuses.hasMany(Students);
Students.belongsTo(Campuses);
module.exports = {
  Students,
  Campuses,
  User,
};
