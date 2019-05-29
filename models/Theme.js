/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Theme', {
    idTheme: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Predmet',
        key: 'id'
      }
    },
    idUser: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    closed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    timeCreated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'Theme'
  });
};
