/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pitanje', {
    idPitanja: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idAnketa: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Anketa',
        key: 'idanketa'
      }
    },
    vrstaPitanja: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tekstPitanja: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'Pitanje'
  });
};
