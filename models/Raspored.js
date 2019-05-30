/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Raspored', {
    idTermin: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idKabinet: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Kabinet',
        key: 'idkabinet'
      }
    },
    idGrupaTermin: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'GrupaTermina',
        key: 'idGrupaTermina'
      }
    },
    danUsedmici: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    vrijeme: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipNastave: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'Raspored'
  });
};
