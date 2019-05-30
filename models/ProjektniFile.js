/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjektniFile', {
    idProjektniFile: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idProjektniZadatak: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'ProjektniZadatak',
        key: 'idprojektnogzadatka'
      }
    },
    file: {
      type: "BLOB",
      allowNull: true
    },
    nazivFile: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ProjektniFile'
  });
};
