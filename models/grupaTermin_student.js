/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupaTermin_student', {
    idGrupaTerminaStudent: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idGrupaTermina: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'GrupaTermina',
        key: 'idGrupaTermina'
      }
    },
    idStudent: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    }
  }, {
    tableName: 'grupaTermin_student'
  });
};
