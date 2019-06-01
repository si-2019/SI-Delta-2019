/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zadatak', {
    idZadatak: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idZadaca: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Zadaca',
        key: 'idzadaca'
      }
    },
    redniBrojZadatkaUZadaci: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    maxBrojBodova: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    brojOstvarenihBodova: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    profesorovKomentar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    datumPredaje: {
      type: DataTypes.DATE,
      allowNull: true
    },
    statusZadatka: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sadrzajFile: {
      type: "BLOB",
      allowNull: true
    },
    velicinaFile: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    mimeTipUpdateZadatka: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'Zadatak'
  });
};
