/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('privilegija', {
    id_privilegija: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    privilegija: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'privilegija'
  });
};
;
