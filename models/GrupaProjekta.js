/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GrupaProjekta', {
    idGrupaProjekta: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idProjekat: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Projekat',
        key: 'idprojekat'
      }
    },
    nazivGrupe: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ostvareniBodovi: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    komentarAsistenta: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'GrupaProjekta'
  });
};
