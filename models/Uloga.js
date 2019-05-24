/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uloga', {
    id_uloga: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    naziv: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'uloga'
  });
};
};
