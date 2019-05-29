/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GrupaTermina', {
    idGrupaTermina: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Predmet',
        key: 'id'
      }
    },
    idPredavac: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    idKabinet: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Kabinet',
        key: 'idkabinet'
      }
    },
    naziv: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    danUSedmici: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    vrijeme: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    trajanje: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'GrupaTermina'
  });
};
