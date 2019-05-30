/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IzmjenaPodatakaStudenta', {
    idIzmjenaPodatakaStudenata: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idStudent: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    datumVrijemeIzmjene: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'IzmjenaPodatakaStudenta'
  });
};
