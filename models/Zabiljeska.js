/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zabiljeska', {
    idZabiljeska: {
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
    naziv: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'Zabiljeska'
  });
};
