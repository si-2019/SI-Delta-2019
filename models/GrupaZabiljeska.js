/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GrupaZabiljeska', {
    idGrupaZabiljeska: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idGrupaTermina: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    idZabiljeska: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'GrupaZabiljeska'
  });
};
