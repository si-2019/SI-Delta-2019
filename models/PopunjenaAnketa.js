/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PopunjenaAnketa', {
    idPopunjenaAnketa: {
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
    idPopunio: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    vrijemePopunjavanja: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'PopunjenaAnketa'
  });
};
