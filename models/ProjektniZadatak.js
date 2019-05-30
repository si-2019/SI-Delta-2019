/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjektniZadatak', {
    idProjektnogZadatka: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idProjekta: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Projekat',
        key: 'idprojekat'
      }
    },
    opis: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    otkad: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dokad: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    zavrsen: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    komentarAsistenta: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ProjektniZadatak'
  });
};
