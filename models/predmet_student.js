/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('predmet_student', {
    idStudent: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Predmet',
        key: 'id'
      }
    },
    ocjena: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    datum_upisa: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'predmet_student'
  });
};
