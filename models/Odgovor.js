/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Odgovor', {
    idOdgovor: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idPopunjenaAnketa: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'PopunjenaAnketa',
        key: 'idpopunjenaanketa'
      }
    },
    idPitanje: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Pitanje',
        key: 'idpitanja'
      }
    },
    idPonudjeniOdgovor: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'PonudjeniOdgovor',
        key: 'idponudjeniodgovor'
      }
    },
    tekstOdgovora: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'Odgovor'
  });
};
