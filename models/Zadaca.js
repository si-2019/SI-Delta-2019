/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zadaca', {
    idZadaca: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idPredmet: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    naziv: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brojZadataka: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rokZaPredaju: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ukupnoBodova: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ukupniOstvareniBodovi: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    postavka: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'Zadaca'
  });
};
