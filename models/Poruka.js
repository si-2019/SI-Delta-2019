/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Poruka', {
    idPoruka: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idPosiljaoc: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    idPrimaoc: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    idGrupa: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    sadrzajPoruke: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    file: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'Poruka'
  });
};
