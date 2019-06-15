/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IspitBodovi', {

  	 id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idIspita: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Ispit',
        key: 'idIspit'
      }
    },
    idKorisnika: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    bodovi: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'IspitBodovi'
  });
};
