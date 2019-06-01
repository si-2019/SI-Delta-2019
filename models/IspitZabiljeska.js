/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IspitZabiljeska', {
    idIspitZabiljeska: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idIspit: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    idZabiljeska: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'IspitZabiljeska'
  });
};
