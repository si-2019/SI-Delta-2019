/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IspitiRezultati', {
    
    bodovi: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'IspitiRezultati'
  });
};
