/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Anketa', {
    idAnketa: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Predmet',
        key: 'id'
      }
    },
    idNapravio: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    napravioIme: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    datumKreiranja: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tipAnkete: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    naziv: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    opisAnkete: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    datumIstekaAnkete: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'Anketa'
  });
};
