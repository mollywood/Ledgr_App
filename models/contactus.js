'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactUs = sequelize.define('ContactUs', {
    contactName: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    contactComment: DataTypes.TEXT
  }, {});
  ContactUs.associate = function(models) {
    // associations can be defined here
  };
  return ContactUs;
};