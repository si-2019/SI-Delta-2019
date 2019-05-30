/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment', {
    idComment: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idUser: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    idTheme: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Theme',
        key: 'idtheme'
      }
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timeCreated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'Comment'
  });
};
