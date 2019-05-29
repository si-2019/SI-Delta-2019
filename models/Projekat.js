/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Projekat', {
    idProjekat: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idKorisnik: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Predmet',
        key: 'id'
      }
    },
    nazivProjekta: {
      type: DataTypes.STRING(85),
      allowNull: true
    },
    progress: {
      type: "DOUBLE(20,3)",
      allowNull: true
    },
    opisProjekta: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    moguciBodovi: {
      type: "DOUBLE(10,0)",
      allowNull: true
    },
    rokProjekta: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'Projekat'
  });
};
