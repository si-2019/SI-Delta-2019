/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('predmet_kabinet', {
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Predmet',
        key: 'id'
      }
    },
    idKabinet: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Kabinet',
        key: 'idkabinet'
      }
    }
  }, {
    tableName: 'predmet_kabinet'
  });
};
