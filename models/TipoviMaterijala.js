/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TipoviMaterijala', {
    idTipoviMaterijala: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    naziv: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'TipoviMaterijala'
  });
};
