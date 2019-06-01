/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Issue', {
    idIssue: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idStudent: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Korisnik',
        key: 'id'
      }
    },
    idCategory: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    issueStatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    DateModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'Issue'
  });
};
