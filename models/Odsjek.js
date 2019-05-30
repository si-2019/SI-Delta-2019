/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('odsjek', {
    id_odsjek: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    naziv: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    tableName: 'odsjek'
  });
};
};
