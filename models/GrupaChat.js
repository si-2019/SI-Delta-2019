/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GrupaChat', {
    idGrupa: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    naziv: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'GrupaChat'
  });
};
