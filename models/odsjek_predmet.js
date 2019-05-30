/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('odsjek_predmet', {
    idOdsjek: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Odsjek',
        key: 'idodsjek'
      }
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Predmet',
        key: 'id'
      }
    },
    semestar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ciklus: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    tip: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'odsjek_predmet'
  });
};
