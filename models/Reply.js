/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reply', {
    idReply: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idComment: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Comment',
        key: 'idcomment'
      }
    },
    idUserCreator: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Korisnik',
        key: 'id'
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
    tableName: 'Reply'
  });
};
