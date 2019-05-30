/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MimeTip', {
    idMimeTip: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idZadatak: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Zadatak',
        key: 'idzadatak'
      }
    },
    mimeTip: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'MimeTip'
  });
};
