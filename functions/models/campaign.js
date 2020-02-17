'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    title: DataTypes.STRING
  }, {});
  Campaign.associate = function(models) {
    // associations can be defined here
  };
  return Campaign;
};