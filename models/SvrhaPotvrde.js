/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SvrhaPotvrde', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    nazivSvrhe: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'SvrhaPotvrde'
  });
};
