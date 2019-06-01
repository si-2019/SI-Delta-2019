/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZeljeniTermin', {
    idZeljeniTermin: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idPredavac: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    idKabinet: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    danUSedmici: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    vrijeme: {
      type: DataTypes.DATE,
      allowNull: true
    },
    brCasova: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'ZeljeniTermin'
  });
};
