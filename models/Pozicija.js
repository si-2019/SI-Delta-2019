/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pozicija', {
    idPozicija: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    x1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    x2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    y1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    y2: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'Pozicija'
  });
};
